"use client";
import { Loader2Icon, RadarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "./core/mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MagicButton() {
  const [mounted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <Loader2Icon className="animate-spin" />
      </>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-6 left-6 !size-12 !p-0 text-3xl bg-gradient-to-br from-zinc-950 to- to-zinc-500 text-white hover:from-zinc-900 hover:to-zinc-600 cursor-pointer rounded-full flex justify-center items-center">
          <RadarIcon />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Magic Land</DialogTitle>
          <div className="!py-4 w-full">
            <div className="w-full !py-2 flex flex-row justify-between items-center">
              <p className="text-xs sm:text-sm">Theme changer: </p>{" "}
              <div>
                <ModeToggle />
              </div>
            </div>
            <div className="w-full !py-2 grid grid-cols-2">
              <p className="text-xs sm:text-sm text-start">
                Profile Dashboards:
              </p>
              <div className="w-full !space-y-4">
                <Button className="w-full">
                  <Link href={"/me"}>User Dashboard</Link>
                </Button>
                <Button className="w-full">
                  <Link href={"/me?type=brand"}>Brand Dashboard</Link>
                </Button>
                <Button className="w-full">
                  <Link href={"/me?type=store"}>Store Dashboard</Link>
                </Button>
                <Button className="w-full" variant="special">
                  <Link href={"/admin/dashboard"}>Admin Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
