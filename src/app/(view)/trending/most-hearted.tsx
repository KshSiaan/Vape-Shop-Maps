import ProductCard from "@/components/core/product-card";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useMosthartedProductQuery } from "@/redux/features/Trending/TrendingApi";

export default function MostHearted() {
  const { data: mosthartedproducts, isLoading } = useMosthartedProductQuery();

  console.log("mosthartedproducts", mosthartedproducts);

  const dataAd = {
    image: "/image/shop/item.jpg",
    title: "Blue Dream | Melted Diamond Live Resin Vaporizer | 1.0g (Reload)",
    category: "PODS",
    note: "93.1% THC",
    type: "ad",
  };

  const data = {
    image: "/image/shop/item.jpg",
    title: "Blue Dream | Melted Diamond Live Resin Vaporizer | 1.0g (Reload)",
    category: "PODS",
    note: "93.1% THC",
  };

  return (
    <>
      <div className="w-full flex justify-end items-center gap-6 !my-12">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="disposables">Disposables</SelectItem>
            <SelectItem value="ejuice">E-juice</SelectItem>
            <SelectItem value="pods">PODS</SelectItem>
            <SelectItem value="mods">MODS</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uni">Worldwide</SelectItem>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Canada</SelectLabel>
              <SelectItem value="on">Ontario</SelectItem>
              <SelectItem value="br">British Columbina</SelectItem>
              <SelectItem value="al">Alberta</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>United States</SelectLabel>
              <SelectItem value="tn">Tennessee (TN)</SelectItem>
              <SelectItem value="ga">Georgia (GA)</SelectItem>
              <SelectItem value="tx">Texas (TX)</SelectItem>
              <SelectItem value="fl">Florida (FL)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 !my-6">
        {/* Content for Most Hearted Products */}

        {Array.from({ length: 8 }).map((_, i) => (
          <Link href="/brands/brand/product" key={i}>
            <ProductCard data={dataAd} />
          </Link>
        ))}
      </div>
      <h2 className="font-semibold text-2xl !mt-12 text-center">
        Top 50 Trending Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !my-6">
        {mosthartedproducts?.data?.map((product: any) => (
          <Link href={`/brands/brand/product/${product.id}`} key={product.id}>
            <ProductCard
              data={{
                image: product.product_image || "/image/shop/item.jpg",
                title: product.product_name,
                category: product.category_id?.toString() || "PODS",
                note: `${product.product_price}$`,
                discount: product.product_discount,
                hearts: product.total_heart
              }}
            />
          </Link>
        ))}
      </div>
    </>
  );
}