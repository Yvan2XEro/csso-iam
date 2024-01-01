import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { GlobalTable, bannerTable, FaqTable, MemberTable, ReasonTable, ServiceTable, UserTable } from "@/lib/schema";
import "dotenv/config";
import { bannersData, faqData, globalsData, membersData, reasonsData, servicesData, usersData } from "./data";

if (!("POSTGRES_URL" in process.env))
    throw new Error("POSTGRES_URL not found on .env.development");

const main = async () => {
    const client = postgres(process.env.POSTGRES_URL as any, { max: 1 });

    const db = drizzle(client);


    await db.delete(GlobalTable).execute();
    await db.delete(bannerTable).execute();
    await db.delete(FaqTable).execute();
    await db.delete(MemberTable).execute();
    await db.delete(ReasonTable).execute();
    await db.delete(ServiceTable).execute();
    await db.delete(UserTable).execute();



    console.log("Seed start");
    await db.insert(GlobalTable).values(globalsData);
    await db.insert(bannerTable).values(bannersData);
    await db.insert(FaqTable).values(faqData)
    await db.insert(MemberTable).values(membersData)
    await db.insert(ReasonTable).values(reasonsData)
    await db.insert(ServiceTable).values(servicesData)
    await db.insert(UserTable).values(usersData)
    console.log("Seed done");
    await client.end()
    process.exit(0)
};

main();
