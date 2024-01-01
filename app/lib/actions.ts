'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { put } from "@vercel/blob"
import { FaqTable, GlobalTable, MemberTable, ReasonTable, ServiceTable, bannerTable, db } from '@/lib/schema';
import { eq } from "drizzle-orm";
import { v4 } from 'uuid';



export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}


export async function uploadFile(fd: FormData) {
    const file = fd.get('file') as File
    const filename = file.name
    const blob = await put(filename, file, {
        access: 'public',
    });

    return blob.url
}

export async function addGlobal(params: any) {
    return await db
        .insert(GlobalTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function updateGlobal(id: any, params: any) {
    return await await db
        .update(GlobalTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(GlobalTable.id, id))
        .execute();
}
export async function addBanners(params: any) {
    return await db
        .insert(bannerTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function updateBanners(id: any, params: any) {
    return await await db
        .update(bannerTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(bannerTable.id, id))
        .execute();
}


// Faqs
export async function updateFaqs(id: any, params: any) {
    return await await db
        .update(FaqTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(FaqTable.id, id))
        .execute();
}

export async function addFaqs(params: any) {
    return await db
        .insert(FaqTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function deleteFaqs(id: any) {
    return await db
        .delete(FaqTable)
        .where(eq(FaqTable.id, id))
        .execute();
}


// Members
export async function updateMembers(id: any, params: any) {
    return await await db
        .update(MemberTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(MemberTable.id, id))
        .execute();
}

export async function addMembers(params: any) {
    return await db
        .insert(MemberTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function deleteMembers(id: any) {
    return await db
        .delete(MemberTable)
        .where(eq(MemberTable.id, id))
        .execute();
}
// Reasons
export async function updatereasons(id: any, params: any) {
    return await await db
        .update(ReasonTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(ReasonTable.id, id))
        .execute();
}

export async function addreasons(params: any) {
    return await db
        .insert(ReasonTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function deletereasons(id: any) {
    return await db
        .delete(ReasonTable)
        .where(eq(ReasonTable.id, id))
        .execute();
}


// Services
export async function updateservices(id: any, params: any) {
    return await await db
        .update(ServiceTable)
        .set({ ...params, id: undefined } as any)
        .where(eq(ServiceTable.id, id))
        .execute();
}

export async function addservices(params: any) {
    return await db
        .insert(ServiceTable)
        .values({ ...params, id: v4() })
        .execute();
}

export async function deleteservices(id: any) {
    return await db
        .delete(ServiceTable)
        .where(eq(ServiceTable.id, id))
        .execute();
}
