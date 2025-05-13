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
      <div className="!my-12 grid grid-cols-1 md:flex justify-between items-center gap-4">
        <div className="md:flex gap-4 w-full grid">
          <Button variant="special">Post an Article</Button>
          <Button>My Articles</Button>
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uni">WorldWide</SelectItem>
            <SelectItem value="light">United States</SelectItem>
            <SelectItem value="dark">Canada</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div className="!my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div> */}

      <h2 className="text-3xl">🔥 Featured Articles</h2>

      <div className="!my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 50 }).map((_, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </>
  );
}
