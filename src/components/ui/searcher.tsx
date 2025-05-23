import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPinIcon, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";
export default function Searcher({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
    <div className={className} {...props} ref={searchContainerRef}>
      <div className="h-[calc(48px-8px)] w-full border rounded-md flex flex-row justify-between items-center relative">
        <div className="!size-10 flex justify-center items-center !pl-2 md:!pl-4">
          <div className="">
            <SearchIcon className="size-4 md:size-5 text-zinc-500" />
          </div>
        </div>
        <Input
          className="border-none outline-none !ring-0 !px-2 md:!px-4 !bg-background text-xs md:text-base"
          placeholder="Products, retailers & brands"
          onFocus={() => setSearchFocus(true)}
          // Remove the onBlur handler
        />
        <div className="w-[1px] h-1/2 bg-zinc-300"></div>
        <div className="w-1/2 sm:w-1/3 h-full md:!space-x-2 flex flex-row justify-start items-center !pl-2 md:!pl-4 text-zinc-500">
          <MapPinIcon className="size-4 md:size-5" />
          <Input
            className="border-none outline-none !ring-0 !bg-background text-xs md:text-base !pl-1 sm:!pl-2"
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
              className={`absolute top-[calc(148px/3)] left-0 w-full bg-background border shadow-lg h-[40vh] rounded-lg grid grid-cols-4 divide-x !p-4 z-10`}
            >
              <div className="col-span-3 w-full h-full !pr-4 !space-y-4 overflow-auto overflow-x-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-[100px] w-full border rounded" />
                ))}
              </div>

              <div className="flex flex-col justify-around items-center text-xs sm:text-sm md:text-base lg:text-lg">
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
  );
}
