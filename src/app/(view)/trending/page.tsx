import React from "react";
import TabsTriggerer from "./tabs-trigger";

export default function Page() {
  return (
    <main className="!py-12 !px-[7%]">
      <h1 className="text-center font-bold text-6xl">TRENDING</h1>

      <div className="">
        <TabsTriggerer />
      </div>
    </main>
  );
}
