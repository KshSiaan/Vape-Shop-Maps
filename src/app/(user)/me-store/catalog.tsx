import ProductCard from "@/components/core/product-card";
import React from "react";

export default function Catalog() {
  const data = {
    image: "/image/shop/item.jpg",
    title: "Blue Dream | Melted Diamond Live Resin Vaporizer | 1.0g (Reload)",
    category: "PODS",
    note: "93.1% THC",
  };
  return (
    <div className="grid lg:grid-cols-3 gap-6 !pt-10 lg:!p-12">
      {Array.from({ length: 12 }).map((_, i) => (
        <ProductCard data={data} key={i} />
      ))}
    </div>
  );
}
