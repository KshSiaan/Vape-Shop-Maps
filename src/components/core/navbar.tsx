"use client";

import { Button } from "../ui/button";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LinkList, navActions, navActionsBasic } from "./core-values/navlinks";
import Searcher from "../ui/searcher";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="lg:h-[148px] w-full top-0 left-0 !px-6 lg:!px-[7%] !py-2 border-b shadow-sm flex flex-col justify-between items-stretch !space-y-6">
      <div className="h-1/2 flex flex-row justify-between items-center gap-4">
        <div className="">
          <Link
            href="/"
            className="flex flex-row justify-start items-center gap-2 text-sm lg:text-lg font-bold"
          >
            <div
              className="size-12 bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/image/vsm-logo.webp')" }}
            ></div>
            <span>Vape Shop Maps</span>
          </Link>
        </div>
        <Searcher className="flex-1 hidden lg:block" />
        <div className="flex flex-row justify-end items-center gap-2">
          <div className="flex flex-row justify-end items-center gap-2">
            {navActionsBasic.map((action, i) =>
              action.asChild ? (
                <Button key={i} variant={action.variant} asChild>
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ) : (
                <Link key={i} href={action.href}>
                  <Button variant={action.variant} size={action.size}>
                    {action.icon || action.label}
                  </Button>
                </Link>
              )
            )}
          </div>
          <div className="hidden lg:flex flex-row justify-end items-center gap-2">
            {navActions.map((action, i) =>
              action.asChild ? (
                <Button key={i} variant={action.variant} asChild>
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ) : (
                <Link key={i} href={action.href}>
                  <Button variant={action.variant} size={action.size}>
                    {action.icon || action.label}
                  </Button>
                </Link>
              )
            )}
          </div>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
      <Searcher className="flex-1 block lg:hidden" />
      <div className="lg:h-1/2 flex flex-row justify-start items-center !py-4">
        {LinkList.map((link, index) =>
          link.dropdown ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  {link.title} {link.icon}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.dropdown.main.map((item, idx) => (
                  <DropdownMenuItem key={`main-${idx}`} asChild>
                    <Link href={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {link.dropdown.sub.title}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {link.dropdown.sub.items.map((subItem, subIdx) => (
                      <DropdownMenuItem key={`sub-${subIdx}`} asChild>
                        <Link href={subItem.to}>{subItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={link.target} key={index}>
              <Button variant="ghost">
                {link.title} {link.icon}
              </Button>
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
