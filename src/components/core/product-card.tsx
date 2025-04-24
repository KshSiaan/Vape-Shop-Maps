import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductType } from "@/lib/types/product";

export default function ProductCard({ data }: { data: ProductType }) {
  return (
    <Card className="!p-0 !gap-0 shadow-sm relative">
      <div className="absolute top-4 left-4 text-4xl">🔥</div>
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-lg"
        style={{ backgroundImage: `url('${data.image}')` }}
      />
      <CardContent className="!p-4 !space-y-1">
        <p className="text-muted-foreground font-bold text-sm md:text-base">
          {data.category}
        </p>
        <h3 className="lg:text-base font-semibold text-sm">{data.title}</h3>
        <div className="text-xs md:text-sm text-muted-foreground">
          <span>{data.note}</span>
        </div>
      </CardContent>
    </Card>
  );
}
