import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import "dotenv/config";

const client = postgres(process.env.POSTGRES_URL as any, { max: 1 });

const db = drizzle(client);

async function main() {
    console.log("Migrating...");

    await migrate(db, {
        migrationsFolder: "drizzle",
    })

    console.log("Migrated");

    await client.end()

    process.exit(0)
}

main().then(() => console.log("Done")).catch(console.error)