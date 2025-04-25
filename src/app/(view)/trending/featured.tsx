import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArticleCard from "@/components/core/article-card";
import { Button } from "@/components/ui/button";
export default function Featured() {
  return (
    <>
      <div className="!my-12 flex justify-between items-center">
        <div className="flex gap-4">
          <Button variant="special">Post an Article</Button>
          <Button>My Articles</Button>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">United States</SelectItem>
            <SelectItem value="dark">Canada</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="!my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
      <h2 className="text-3xl">🔥 Featured Articles</h2>
      <div className="!my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </>
  );
}
