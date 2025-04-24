import {
  // BadgeDollarSignIcon,
  ChevronDown,
  LayoutGridIcon,
  NotebookIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { JSX } from "react";

export const LinkList = [
  {
    title: "Trending",
    icon: <LayoutGridIcon />,
    target: "/trending",
  },
  {
    title: "Forum",
    icon: <NotebookIcon />,
    target: "/forum",
  },
  // {
  //   title: "Subscriptions",
  //   icon: <BadgeDollarSignIcon />,
  //   target: "/subscriptions",
  // },
  {
    title: "Brands",
    icon: <ChevronDown />,
    dropdown: {
      main: ["All brands"],
      sub: {
        title: "My Favourite Brands",
        items: ["All brand", "All brand", "All brand", "All brand"],
      },
    },
  },
  {
    title: "Stores",
    icon: <ChevronDown />,
    dropdown: {
      main: ["All stores"],
      sub: {
        title: "My Favourite Stores",
        items: ["All stores", "All stores", "All stores", "All stores"],
      },
    },
  },
];

export interface NavActionsType {
  icon?: JSX.Element;
  variant:
    | "ghost"
    | "special"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | null
    | undefined;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
  href: string;
  label?: string;
  asChild?: boolean;
}

export const navActionsBasic: NavActionsType[] = [
  {
    icon: <ShoppingCartIcon />,
    variant: "ghost",
    size: "icon",
    href: "#",
  },
  {
    icon: <HeartIcon />,
    variant: "ghost",
    size: "icon",
    href: "#",
  },
];

export const navActions: NavActionsType[] = [
  {
    label: "Log in",
    variant: "ghost",
    size: "lg",
    href: "/login",
  },
  {
    label: "Register",
    variant: "special",
    href: "/create-an-account",
    asChild: true,
    size: null,
  },
];
