import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/custom-tabs";

export default function TabsTriggerer() {
  return (
    <div className="container !py-10">
      <Tabs defaultValue="hearted">
        <TabsList className="border-b !justify-start gap-2 md:gap-3 lg:gap-6">
          <TabsTrigger value="hearted">Most Hearted Products ❤️</TabsTrigger>
          <TabsTrigger value="followers">Most Followers 👥</TabsTrigger>
          <TabsTrigger value="rated">Most Rated ⭐</TabsTrigger>
          <TabsTrigger value="featured">Featured 🔍</TabsTrigger>
        </TabsList>
        <TabsContent value="hearted">
          <></>
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
