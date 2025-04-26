import Namer from "@/components/core/internal/namer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquareMoreIcon, Share2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import TabsTriggerer from "./tabs-trigger";

export default function Page() {
  return (
    <main className="!py-12 !p-4 lg:!px-[7%]">
      <div className="">
        <div className="flex !py-4 gap-4">
          <Avatar className="size-24">
            <AvatarImage src="/image/icon/brand.jpg" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div className="h-24 flex flex-col !py-3 justify-between">
            <Namer name="SMOK" isVerified type="brand" size="xl" />
            <Link
              href={"#"}
              className="text-purple-700 hover:text-purple-900 underline"
            >
              (166 Reviews)
            </Link>
          </div>
          <div className="flex-1 h-24 flex flex-row justify-end items-center gap-4">
            <p className="font-semibold text-sm">43.1k followers</p>
            <Button variant="outline" size="icon">
              <MessageSquareMoreIcon />
            </Button>
            <Button variant="outline">Follow</Button>
            <Button variant="outline" size="icon">
              <Share2Icon />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <TabsTriggerer />
      </div>
    </main>
  );
}
