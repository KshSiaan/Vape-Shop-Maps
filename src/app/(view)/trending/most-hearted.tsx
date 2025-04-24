import ProductCard from "@/components/core/product-card";
import React from "react";

export default function MostHearted() {
  const data = {
    image: "/image/shop/item.jpg",
    title: "Blue Dream | Melted Diamond Live Resin Vaporizer | 1.0g (Reload)",
    category: "PODS",
    note: "93.1% THC",
    type: "ad",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !my-6">
      {/* Content for Most Hearted Products */}

      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCard data={data} key={i} />
      ))}
    </div>
  );
}
