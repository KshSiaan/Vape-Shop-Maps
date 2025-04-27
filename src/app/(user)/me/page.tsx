"use client";
import React from "react";
import TabsTriggerer from "../_typeofs/member-tabs-trigger";
import { useSearchParams } from "next/navigation";
import StoreTabsTriggerer from "../_typeofs/store-tabs-trigger";

export default function Page() {
  const searched = useSearchParams();

  return (
    <main className="">
      {searched.get("type") === "store" || "brand" ? (
        <StoreTabsTriggerer />
      ) : (
        <TabsTriggerer />
      )}
    </main>
  );
}
