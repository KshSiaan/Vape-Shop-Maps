import React from "react";
import { Button } from "../ui/button";
import {
  BadgeDollarSignIcon,
  ChevronDown,
  HeartIcon,
  LayoutGridIcon,
  MapPinIcon,
  NotebookIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="h-[148px] w-full top-0 left-0 !px-[7%] border-b shadow-sm flex flex-col justify-between items-stretch">
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
              className="border-none outline-none !ring-0 !px-4 !bg-background"
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
          <Button variant="special" asChild>
            <Link href="/create-an-account">Register</Link>
          </Button>
        </div>
      </div>
      <div className="h-1/2 flex flex-row justify-start items-center">
        <Link href={"#"}>
          <Button variant="ghost">
            Trending <LayoutGridIcon />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost">
            Forum <NotebookIcon />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button variant="ghost">
            Subscriptions <BadgeDollarSignIcon />
          </Button>
        </Link>
        <Link href={"#"}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Brands <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All brands</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  My Favourite Brands
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>All brand</DropdownMenuItem>
                  <DropdownMenuItem>All brand</DropdownMenuItem>
                  <DropdownMenuItem>All brand</DropdownMenuItem>
                  <DropdownMenuItem>All brand</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
        <Link href={"#"}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Stores <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All stores</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  My Favourite Stores
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>All stores</DropdownMenuItem>
                  <DropdownMenuItem>All stores</DropdownMenuItem>
                  <DropdownMenuItem>All stores</DropdownMenuItem>
                  <DropdownMenuItem>All stores</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </Link>
      </div>
    </nav>
  );
}
