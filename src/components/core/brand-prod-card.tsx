import React from "react";

import { CheckCircle2Icon, HeartIcon, StarIcon } from "lucide-react";

import Link from "next/link";

import { BrandType } from "@/lib/types/product";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Dotter from "@/components/ui/dotter";

export default function BrandProdCard({ data }: { data: BrandType }) {
  return (
    <div className="!p-0 !gap-0 shadow-sm">
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-lg relative"
        style={{ backgroundImage: `url('${data.image}')` }}
      >
        {data.type === "ad" && (
          <div className="absolute top-2 left-2 text-4xl">🔥</div>
        )}
        <Button
          className="absolute bottom-2 right-2 bg-background hover:bg-zinc-800 text-foreground"
          variant="default"
          size="icon"
        >
          <HeartIcon />
        </Button>
      </div>
      <div className="!p-4 !space-y-1">
        <div className="flex flex-row justify-between items-center gap-4">
          <Avatar className="size-12">
            <AvatarImage src="/image/icon/store.png" />
            <AvatarFallback>
              {data.storeName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex gap-2 items-center font-bold">
              {data.storeName}
              {data.isVerified && <CheckCircle2Icon className="size-5" />}
            </div>
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
