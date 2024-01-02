import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { UserTable, db } from './lib/schema';
import { eq } from 'drizzle-orm';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const u = await db.select().from(UserTable).where(eq(UserTable.email, email));

                    if (!u || u.length === 0) return null;
                    const passwordsMatch = await bcrypt.compare(password, u[0].password);

                    if (passwordsMatch) return u[0];
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});