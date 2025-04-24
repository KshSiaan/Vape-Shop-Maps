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
        <TabsList className="border-b !justify-start gap-6">
          <TabsTrigger value="hearted">Most Hearted Products ❤️</TabsTrigger>
          <TabsTrigger value="followers">Most Followers 👥</TabsTrigger>
          <TabsTrigger value="rated">Most Rated ⭐</TabsTrigger>
          <TabsTrigger value="featured">Featured 🔍</TabsTrigger>
        </TabsList>
        <TabsContent value="hearted">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-6">
            {/* Content for Most Hearted Products */}
            <div className="border rounded-lg !p-4">Product 1</div>
            <div className="border rounded-lg !p-4">Product 2</div>
            <div className="border rounded-lg !p-4">Product 3</div>
          </div>
        </TabsContent>
        <TabsContent value="followers">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-6">
            {/* Content for Most Followers */}
            <div className="border rounded-lg !p-4">
              Product with many followers 1
            </div>
            <div className="border rounded-lg !p-4">
              Product with many followers 2
            </div>
            <div className="border rounded-lg !p-4">
              Product with many followers 3
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-6">
            {/* Content for Most Rated */}
            <div className="border rounded-lg !p-4">Highly rated product 1</div>
            <div className="border rounded-lg !p-4">Highly rated product 2</div>
            <div className="border rounded-lg !p-4">Highly rated product 3</div>
          </div>
        </TabsContent>
        <TabsContent value="featured">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-6">
            {/* Content for Featured */}
            <div className="border rounded-lg !p-4">Featured product 1</div>
            <div className="border rounded-lg !p-4">Featured product 2</div>
            <div className="border rounded-lg !p-4">Featured product 3</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
