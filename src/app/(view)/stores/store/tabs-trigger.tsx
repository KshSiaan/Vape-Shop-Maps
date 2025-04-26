import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/custom-tabs";
import MostHearted from "./most-hearted";

export default function TabsTriggerer() {
  return (
    <div className="!py-10">
      <Tabs defaultValue="hearted">
        <TabsList className="border-b !justify-start gap-2 md:gap-3 lg:gap-6">
          <TabsTrigger value="hearted">Most Hearted Products</TabsTrigger>
          <TabsTrigger value="followers">Catalog</TabsTrigger>
          <TabsTrigger value="rated">Announcement</TabsTrigger>
          <TabsTrigger value="featured">Feed</TabsTrigger>
          <TabsTrigger value="featured">Inbox</TabsTrigger>
          <TabsTrigger value="featured">About</TabsTrigger>
          <TabsTrigger value="featured">Groups</TabsTrigger>
        </TabsList>
        <TabsContent value="hearted">
          <MostHearted />
        </TabsContent>
        <TabsContent value="followers">
          <></>
        </TabsContent>
        <TabsContent value="rated">
          <></>
        </TabsContent>
        <TabsContent value="featured">
          <></>
        </TabsContent>
      </Tabs>
    </div>
  );
}
