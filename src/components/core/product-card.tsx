import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductType } from "@/lib/types/product";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";

export default function ProductCard({ data }: { data: ProductType }) {
  return (
    <Card className="!p-0 !gap-0 shadow-sm">
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-lg relative"
        style={{ backgroundImage: `url('${data.image}')` }}
      >
        {data.type === "ad" && (
          <div className="absolute top-4 left-4 text-2xl md:text-4xl">🔥</div>
        )}
        <Button
          className="absolute bottom-2 right-2 size-10 !text-4xl"
          variant="ghost"
          size="icon"
        >
          <HeartIcon className="!text-4xl size-5" />
        </Button>
      </div>
      <CardContent className="!p-4 !space-y-1">
        <p className="text-muted-foreground font-bold text-sm md:text-base">
          {data.category}
        </p>
        <h3 className="lg:text-base font-semibold text-xs md:text-sm">
          {data.title}
        </h3>
        <div className="text-xs md:text-sm text-muted-foreground">
          <span>{data.note}</span>
        </div>
      </CardContent>
    </Card>
  );
}
