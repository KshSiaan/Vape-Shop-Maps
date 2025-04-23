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
    <footer className="bg-[#FCFAFF] dark:bg-zinc-900 h-[50vh] w-full grid grid-cols-9 gap-6 !py-12 !px-[7%]">
      <div className="col-span-3 h-full !space-y-6">
        <div className="flex flex-row justify-start items-center gap-2 text-lg font-bold">
          <div
            className="size-12 bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/image/vsm-logo.webp')" }}
          ></div>
          <span>Vape Shop Maps</span>
        </div>
        <p className="text-lg">
          <span className="font-bold">🚫 21+ Notice:</span> &quot;This platform
          is intended for adults 21 and over. Access is restricted to
          jurisdictions where vape-related products are legal.&quot;
        </p>
        <p className="text-lg">
          <span className="font-bold"> ⚠️ Disclaimer:</span> &quot;Vape Shop
          Maps does not sell products. All purchases are completed in-store or
          via the businesses listed.&quot;
        </p>
      </div>
      {footer_navs.map((nav, index) => (
        <div
          key={index}
          className="col-span-2 h-full flex flex-col justify-start items-start !space-y-3"
        >
          <h2 className="font-semibold text-xl">{nav.title}</h2>
          {mounted &&
            nav.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.target}
                className="text-base text-muted-foreground hover:text-foreground hover:underline flex items-center gap-2"
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
