import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function CartDrawer() {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" variant="ghost">
            <ShoppingCartIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[100dvh] lg:h-[60dvh]">
          <DrawerHeader>
            <div className="flex w-full justify-between items-center">
              <DrawerTitle>Your Cart</DrawerTitle>
              <div className="flex justify-center items-center gap-4">
                <Button variant="special">Checkout</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </div>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
