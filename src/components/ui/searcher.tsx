"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPinIcon, SearchIcon, StarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import Image from "next/image";
import Namer from "../core/internal/namer";
import Dotter from "./dotter";

const categories = ["shops", "brands", "products", "accounts", "everything"];

const getImageSrc = (category: string) => {
  switch (category) {
    case "shops":
      return "/image/icon/store.png";
    case "brands":
      return "/image/icon/brand.jpg";
    case "products":
      return "/image/shop/item.jpg";
    case "accounts":
    default:
      return "/image/icon/user.jpeg";
  }
};

export default function Searcher({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);

  const [selectedSearch, setSelectedSearch] = useState("shops");
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchFocus(false);
        setLocationFocus(false);
      }
    };

    if (searchFocus || locationFocus) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchFocus, locationFocus]);

  return (
    <div className={className} {...props} ref={searchContainerRef}>
      <div className="h-[calc(48px-8px)] w-full border rounded-md flex justify-between items-center relative overflow-visible">
        <div className="!size-10 flex items-center !pl-2 md:!pl-4">
          <SearchIcon className="size-4 md:size-5 text-zinc-500" />
        </div>
        <Input
          className="border-none outline-none !ring-0 !px-2 md:!px-4 !bg-background text-xs md:text-base"
          placeholder="Products, retailers & brands"
          onFocus={() => setSearchFocus(true)}
        />
        <div className="w-[1px] h-1/2 bg-zinc-300" />
        <div className="w-1/2 sm:w-1/3 h-full md:!space-x-2 flex items-center !pl-2 md:!pl-4 text-zinc-500">
          <MapPinIcon className="size-4 md:size-5" />
          <Input
            className="border-none outline-none !ring-0 !bg-background text-xs md:text-base !pl-1 sm:!pl-2"
            placeholder="California, PA"
            onFocus={() => {
              setSearchFocus(false);
              setLocationFocus(true);
            }}
          />
        </div>

        <AnimatePresence>
          {searchFocus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(148px/3)] left-0 w-full bg-background border shadow-lg h-[40vh] rounded-lg grid grid-cols-4 divide-x p-4 z-10"
            >
              <div className="col-span-3 w-full h-full pr-4 space-y-4 overflow-auto overflow-x-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[100px] w-full border rounded p-2 flex gap-2"
                  >
                    <Card className="aspect-square rounded p-1">
                      <Image
                        src={getImageSrc(selectedSearch)}
                        height={124}
                        width={124}
                        className="h-full w-full object-cover rounded animate-in"
                        alt="icon"
                      />
                    </Card>
                    <div className="flex-1 flex flex-col justify-between">
                      <Namer
                        name="Vape Juice Deport"
                        type="store"
                        isVerified
                        size="sm"
                      />
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <StarIcon
                          fill="#ee8500"
                          stroke=""
                          className="w-4 h-4"
                        />
                        4.9
                      </div>
                      <div className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                        <p className="truncate">BROOKLYN, New York</p>
                        <Dotter />
                        <div className="whitespace-nowrap">4 mi</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-around items-center text-xs sm:text-sm md:text-base lg:text-lg">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant="link"
                    className={cn(
                      selectedSearch === cat && "font-black underline"
                    )}
                    onClick={() => setSelectedSearch(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {locationFocus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[48px] left-0 w-full bg-background border shadow-lg h-[30vh] rounded-lg grid grid-cols-2 divide-x p-4 z-10" // Changed top to 48px to account for the search bar's height (40px) + some spacing.
            >
              <div className="space-y-3 px-2!">
                {["Brooklyn", "Manhattan", "Queens", "Bronx"].map(
                  (loc, idx) => (
                    <div
                      key={idx}
                      className="hover:bg-accent p-2 rounded cursor-pointer text-sm md:text-base"
                    >
                      <p className="font-medium">{loc}</p>
                      <p className="text-muted-foreground text-xs">New York</p>
                    </div>
                  )
                )}
              </div>
              <div className="hidden sm:flex items-center justify-center text-muted-foreground">
                <MapPinIcon className="w-12 h-12" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
