"use client";
import React from "react";
import TabsTriggerer from "../_typeofs/member-tabs-trigger";
import { useSearchParams } from "next/navigation";
import StoreTabsTriggerer from "../_typeofs/store-tabs-trigger";

export default function Page() {
  const searched = useSearchParams();

  console.log(searched.get("type"));

  return (
    <main className="">
      {searched.get("type") === "store" || searched.get("type") === "brand" ? (
        <StoreTabsTriggerer />
      ) : (
        <TabsTriggerer />
      )}
    </main>
  );
}
