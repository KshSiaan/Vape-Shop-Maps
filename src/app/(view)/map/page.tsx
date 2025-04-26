import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { InfoIcon, TagIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  return (
    <main className="!my-12 !px-4 lg:!px-[7%]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Map</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="!my-12">
        <h1 className="font-semibold text-4xl">
          Vape Shop in <span className="font-normal">Murfreesboro, TN</span>
        </h1>
      </div>

      <div className="!my-12 flex flex-row justify-start items-center gap-4">
        <Button className="rounded-full">Open now</Button>
        <Button className="rounded-full bg-primary hover:!bg-primary/80 !text-foreground">
          Storefronts
        </Button>
        <Button className="rounded-full">Delivery</Button>
        <Button className="rounded-full">Order online</Button>
        <Button className="rounded-full flex items-center">
          <TagIcon /> Deals
        </Button>
        <Button className="rounded-full">Best of Vapeshopmaps</Button>
        <Button className="rounded-full">Disposable</Button>
      </div>

      <div className="bg-secondary h-[80dvh] relative">
        <div className="absolute left-6 h-11/12 w-[500px] border top-1/2 -translate-y-1/2 bg-background flex flex-col justify-between items-center">
          <div className="h-[48px] w-full bg-primary flex justify-between items-center !px-4">
            <div className="flex items-center gap-2 text-xs text-background font-semibold">
              Showing result 1-30 <InfoIcon className="ml-1 size-3" />
            </div>
            <div className="">
              <Select>
                <SelectTrigger className="w-min">
                  <SelectValue
                    placeholder="Sort by"
                    className="bg-background"
                  />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectItem value="light">Most Recent</SelectItem>
                  <SelectItem value="dark">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
