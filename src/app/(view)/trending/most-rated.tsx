import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "@/components/core/review-card";

export default function MostRated() {
  return (
    <>
      <div className="!my-12 flex justify-end items-center">
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
      <h2 className="text-3xl">Top 20 Most Rated Reviews</h2>
      <div className="!my-12 !space-y-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ReviewCard key={i} />
        ))}
      </div>
    </>
  );
}
