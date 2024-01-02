import { FaqTable, GlobalTable, MemberTable, ReasonTable, ServiceTable, bannerTable, db } from "@/lib/schema";


export async function fetchGlobals() {
    const resp = await db.select().from(GlobalTable);
    if (resp && resp.length > 0) {
        return resp[0];
    }
    throw new Error("No globals found");
}


export async function fetchBanners() {
    const resp = await db.select().from(bannerTable);
    if (resp && resp.length > 0) {
        return resp[0];
    }
    throw new Error("No globals found");
}

export async function fetchFaqs() {
    return await db.select().from(FaqTable);
}

export async function fetchReasons() {
    return await db.select().from(ReasonTable);
}

export async function fetchMembers() {
    return await db.select().from(MemberTable);
}

export async function fetchServices() {
    return await db.select().from(ServiceTable);
}