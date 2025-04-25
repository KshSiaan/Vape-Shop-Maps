import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessagesSquareIcon } from "lucide-react";
import Link from "next/link";

interface ForumCardType {
  title: string;
  date: string;
  secondaryA: string;
  secondaryB: string;
  new?: boolean;
}

export default function ForumCard({
  data,
  to,
}: {
  data: ForumCardType;
  to?: string;
}) {
  return (
    <Link href={to ? to : "#"}>
      <div className="w-full flex flex-row justify-between items-center !py-2 lg:!py-6 cursor-pointer hover:bg-secondary lg:rounded-xl lg:hover:border dark:hover:bg-background lg:hover:scale-[103%] transition-all">
        <div className="h-20 md:h-24 !px-6 flex gap-4 w-full">
          <div className="h-full aspect-square border rounded-xl bg-secondary flex justify-center items-center">
            <MessagesSquareIcon className="size-10 text-muted-foreground" />
          </div>
          <div className="h-full flex flex-col justify-between md:!py-1 w-full">
            <div className="flex flex-col lg:flex-row gap-1 md:gap-3">
              <h2 className="text-sm lg:text-xl">{data.title}</h2>
              {data.new && <Badge>New!</Badge>}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs md:text-sm text-muted-foreground flex gap-4">
                <p>{data.secondaryA}</p>
                <p>{data.secondaryB}</p>
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {data.date}5
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
