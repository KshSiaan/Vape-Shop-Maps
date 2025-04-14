import React from "react";
import { Button } from "../ui/button";
import {
  ChevronDown,
  HeartIcon,
  LayoutGridIcon,
  MapPinIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[148px] w-full fixed top-0 left-0 !px-[7%] border-b shadow-sm flex flex-col justify-between items-stretch">
      <div className="h-1/2 flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row justify-start items-center gap-2 text-lg font-bold">
          <div
            className="size-12 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/image/vsm-logo.webp')" }}
          ></div>
          <span>Vape Shop Maps</span>
        </div>
        <div className="flex-1">
          <div className="h-[calc(48px-8px)] w-full border rounded-md flex flex-row justify-between items-center">
            <div className="!size-10 flex justify-center items-center !pl-4">
              <div className="">
                <SearchIcon className="size-5 text-zinc-500" />
              </div>
            </div>
            <Input
              className="border-none outline-none !ring-0 !px-4"
              placeholder="Products, retailers & brands"
            />
            <div className="w-[1px] h-1/2 bg-zinc-300"></div>
            <div className="w-1/3 h-full !space-x-2 flex flex-row justify-start items-center !pl-4 text-zinc-500">
              <MapPinIcon /> <p className="font-medium">California, PA</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <Button variant="ghost" size="icon">
            <ShoppingCartIcon />
          </Button>
          <Button variant="ghost" size="icon">
            <HeartIcon />
          </Button>
          <Button variant="ghost" size="lg">
            Log in
          </Button>
          <Button variant="special">Register</Button>
        </div>
      </div>
      <div className="h-1/2 flex flex-row justify-start items-center">
        <Link href={"#"}>
          <Button variant="ghost" className="text-purple-800">
            Trending <LayoutGridIcon />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost">
            Brands <ChevronDown />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
