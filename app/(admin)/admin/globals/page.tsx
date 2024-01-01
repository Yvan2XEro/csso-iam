import React from "react";
import { GlobalsForm } from "../../components/organisms/GlobalsForm";
import { GlobalTable, db } from "@/lib/schema";

async function fetchGlobals() {
  const resp = await db.select().from(GlobalTable);
  if (resp && resp.length > 0) {
    return resp[0];
  }
  return null;
}

export default async function page() {
  const global = await fetchGlobals();
  return (
    <div>
      <GlobalsForm data={global as any} />
    </div>
  );
}
