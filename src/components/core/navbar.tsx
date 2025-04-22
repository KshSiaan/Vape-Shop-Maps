"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "motion/react";
import { MapPinIcon, SearchIcon } from "lucide-react";
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
import { LinkList, navActions } from "./core-values/navlinks";

export default function Navbar() {
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search container
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchFocus(false);
      }
    }

    // Add event listener when dropdown is open
    if (searchFocus) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchFocus]);

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
        <div className="flex-1" ref={searchContainerRef}>
          <div className="h-[calc(48px-8px)] w-full border rounded-md flex flex-row justify-between items-center">
            <div className="!size-10 flex justify-center items-center !pl-4">
              <div className="">
                <SearchIcon className="size-5 text-zinc-500" />
              </div>
            </div>
            <Input
              className="border-none outline-none !ring-0 !px-4 !bg-background"
              placeholder="Products, retailers & brands"
              onFocus={() => setSearchFocus(true)}
              // Remove the onBlur handler
            />
            <div className="w-[1px] h-1/2 bg-zinc-300"></div>
            <div className="w-1/3 h-full !space-x-2 flex flex-row justify-start items-center !pl-4 text-zinc-500 relative">
              <MapPinIcon />{" "}
              <Input
                className="border-none outline-none !ring-0 !bg-background"
                placeholder="California, PA"
                onFocus={() => {
                  setSearchFocus(false);
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
                  className={`absolute top-[calc(148px/2)] left-1/2 -translate-x-1/2 w-2/3 bg-background border shadow-lg h-[40vh] rounded-lg grid grid-cols-4 divide-x !p-4`}
                >
                  <div className="col-span-3 w-full h-full !pr-4 !space-y-4 overflow-auto overflow-x-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-[100px] w-full bg-pink-200 rounded"
                      />
                    ))}
                  </div>

                  <div className="flex flex-col justify-around items-center text-lg">
                    <div className="font-bold underline">Shops</div>
                    <div className="">Brands</div>
                    <div className="">Products</div>
                    <div className="">Accounts</div>
                    <div className="">Everything</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          {navActions.map((action, i) =>
            action.asChild ? (
              <Button key={i} variant={action.variant} asChild>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ) : (
              <Link key={i} href={action.href}>
                <Button variant={action.variant} size={action.size}>
                  {action.icon || action.label}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>

      <div className="h-1/2 flex flex-row justify-start items-center">
        {LinkList.map((link, index) =>
          link.dropdown ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  {link.title} {link.icon}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.dropdown.main.map((item, idx) => (
                  <DropdownMenuItem key={`main-${idx}`}>
                    {item}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {link.dropdown.sub.title}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {link.dropdown.sub.items.map((subItem, subIdx) => (
                      <DropdownMenuItem key={`sub-${subIdx}`}>
                        {subItem}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={link.target} key={index}>
              <Button variant="ghost">
                {link.title} {link.icon}
              </Button>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
