import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col justify-start items-baseline !p-12 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          className="w-full rounded-2xl flex flex-row justify-between items-center border !p-4"
          key={i}
        >
          <div
            className="size-16 aspect-square bg-secondary rounded-lg bg-center bg-cover"
            style={{ backgroundImage: `url('/image/home/car1.png')` }}
          ></div>
          <div className="font-semibold">
            Blue Dream | Melted Diamond Live Resin Vaporizer | 1.0g (Reload)
          </div>
          <div className="text-sm font-semibold">Date: 23-04-2024</div>
          <Button>View Review</Button>
        </div>
      ))}
    </div>
  );
}
