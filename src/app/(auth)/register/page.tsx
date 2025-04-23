"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import MemberRegister from "./member-reg";
import StoreRegister from "./store-reg";
import BrandRegister from "./brand-reg";
import WholeRegister from "./whole-reg";
import AssosRegister from "./assos-reg";

export default function Page() {
  const searchParams = useSearchParams();
  const as = searchParams.get("as");

  switch (as) {
    case "member":
      return <MemberRegister />;
    case "store":
      return <StoreRegister />;
    case "brand":
      return <BrandRegister />;
    case "wholesaler":
      return <WholeRegister />;
    case "association":
      return <AssosRegister />;
    default:
      return <MemberRegister />;
  }
}
