import Namer from "@/components/core/internal/namer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2Icon,
  InfoIcon,
  MapPinIcon,
  MessageSquareMoreIcon,
  RadioIcon,
  Share2Icon,
} from "lucide-react";
import React from "react";
import TabsTriggerer from "./tabs-trigger";
import Dotter from "@/components/ui/dotter";

export default function Page() {
  return (
    <>
      <div
        className="h-[50dvh] w-full relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image/home/car2.png')` }}
      >
        <Avatar className="size-40 absolute -bottom-[10rem] -translate-y-1/2 left-4 lg:left-[7%]">
          <AvatarImage src="/image/icon/store.png" />
          <AvatarFallback>VD</AvatarFallback>
        </Avatar>
      </div>
      <main className="!py-12 !p-4 lg:!px-[7%]">
        <div className="">
          <div className="h-12"></div>
          <div className="flex !py-4 gap-4 items-center">
            <div className="h-24 flex flex-col !py-3 justify-between">
              <Namer
                name="Vape Juice Deport"
                isVerified
                type="brand"
                size="xl"
              />
            </div>
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="!mt-8 flex justify-between items-center">
            <div className="text-xs md:text-sm text-muted-foreground flex gap-2 items-center">
              <span className={"text-green-600"}>Open Now</span>
              <Dotter />
              <span>Close 10 PM</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <MapPinIcon className="size-4" />
              BROOKLYN, New York
            </div>
          </div>
          <div className="!mt-4">
            <div className="flex gap-8 items-center">
              <div className="text-xs flex items-center gap-2 cursor-pointer hover:text-foreground/80">
                <InfoIcon className="size-4" />
                About us
              </div>
              <div className="text-xs flex items-center gap-2 cursor-pointer hover:text-foreground/80">
                <RadioIcon className="size-4" />
                Connected Stores
              </div>
              <div className="text-xs flex items-center gap-1">
                PL
                <CheckCircle2Icon className="size-4 text-green-600" />
              </div>
              <div className="flex-1 h-24 flex flex-row justify-end items-center gap-4">
                <p className="font-semibold text-sm">43.1k followers</p>
                <Button variant="outline" className="!text-sm font-extrabold">
                  B2B
                </Button>
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
        </div>
        <div className="w-full">
          <TabsTriggerer />
        </div>
      </main>
    </>
  );
}
