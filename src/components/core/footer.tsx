"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { footer_navs } from "./core-values/footerlinks";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-[#FCFAFF] dark:bg-zinc-900 w-full !py-12 !px-6 sm:!px-10 lg:!px-[7%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-8 sm:gap-10">
      <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-6">
        <div className="flex items-center gap-3 text-lg font-bold">
          <div
            className="w-12 h-12 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/image/vsm-logo.webp')" }}
          ></div>
          <span>Vape Shop Maps</span>
        </div>
        <p className="text-base sm:text-lg">
          <span className="font-bold">🚫 21+ Notice:</span> This platform is
          intended for adults 21 and over. Access is restricted to jurisdictions
          where vape-related products are legal.
        </p>
        <p className="text-base sm:text-lg">
          <span className="font-bold"> ⚠️ Disclaimer:</span> Vape Shop Maps does
          not sell products. All purchases are completed in-store or via the
          businesses listed.
        </p>
      </div>

      {footer_navs.map((nav, index) => (
        <div
          key={index}
          className="sm:col-span-1 lg:col-span-2 flex flex-col gap-3"
        >
          <h2 className="font-semibold text-lg sm:text-xl">{nav.title}</h2>
          {mounted &&
            nav.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.target}
                className="text-sm sm:text-base text-muted-foreground hover:text-foreground hover:underline flex items-center gap-2"
              >
                {resolvedTheme === "dark" ? link.icon?.light : link.icon?.dark}
                <span>{link.label}</span>
              </Link>
            ))}
        </div>
      ))}
    </footer>
  );
}
