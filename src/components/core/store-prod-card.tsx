import React from "react";

import { EyeIcon, HeartIcon, StarIcon } from "lucide-react";

import Link from "next/link";

import { BrandType } from "@/lib/types/product";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Dotter from "@/components/ui/dotter";
import Namer from "./internal/namer";

export default function StoreProdCard({ data }: { data: BrandType }) {
  return (
    <div className="!p-0 !gap-0 shadow-sm">
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-lg relative transition-all"
        style={{ backgroundImage: `url('${data.image}')` }}
      >
        {data.type === "ad" && (
          <div className="absolute top-2 left-2 text-4xl z-10">🔥</div>
        )}
        <Link href="/stores/store">
          <div className="bg-background/70 h-full w-full opacity-0 hover:opacity-60 hover:backdrop-blur-xs transition-all z-0">
            <div className="absolute flex top-1/2 left-1/2 -translate-1/2 text-foreground hover:scale-125 transition-transform cursor-pointer">
              <EyeIcon /> View
            </div>
          </div>
        </Link>
        <Button
          className="absolute bottom-2 right-2 bg-background hover:bg-secondary dark:hover:bg-zinc-800 text-foreground"
          variant="default"
          size="icon"
        >
          <HeartIcon className="text-foreground" />
        </Button>
      </div>
      <div className="!p-4 !space-y-1">
        <div className="flex flex-row justify-between items-center gap-4">
          <Avatar className="size-12 border">
            <AvatarImage src="/image/icon/store.png" />
            <AvatarFallback>
              {data.storeName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Link href="/stores/store">
              <Namer type="store" name={data.storeName} isVerified />
            </Link>
            <div className="flex flex-row justify-start items-center gap-2 text-sm text-muted-foreground">
              <p>{data.location.city}</p>
              <Dotter />
              <div>{data.location.distance}</div>
            </div>
          </div>
        </div>
        <h3 className="text-sm">
          <div className="flex flex-row items-center gap-2 text-muted-foreground">
            <StarIcon fill="#ee8500" stroke="" /> {data.rating.value}
            <Link href={"#"} className="text-primary underline">
              ({data.rating.reviews} Reviews)
            </Link>
          </div>
        </h3>
        <div className="text-xs md:text-sm text-muted-foreground flex gap-2 items-center">
          <span className={data.isOpen ? "text-green-600" : "text-red-600"}>
            {data.isOpen ? "Open Now" : "Closed"}
          </span>
          <Dotter />
          <span>Close {data.closingTime}</span>
        </div>
      </div>
    </div>
  );
}
