import React from "react";
import { bannerTable, db } from "@/lib/schema";
import { BannersForm } from "../../components/organisms/BannersForm";

async function fetchGlobals() {
  const resp = await db.select().from(bannerTable);
  if (resp && resp.length > 0) {
    return resp[0];
  }
  return null;
}

export default async function page() {
  const global = await fetchGlobals();
  return (
    <div>
      <BannersForm data={global as any} />
    </div>
  );
}
