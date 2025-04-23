import Image from "next/image";
import { JSX } from "react";

interface FooterNav {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  target: string;
  icon?: { light: JSX.Element; dark: JSX.Element };
}

export const footer_navs: FooterNav[] = [
  {
    title: "Platform Navigation",
    links: [
      { label: "Log In / Sign up", target: "#" },
      { label: "Home", target: "#" },
      { label: "Trending", target: "#" },
      { label: "Find Stores", target: "#" },
      { label: "Find Brands", target: "#" },
      { label: "Forums", target: "#" },
      { label: "Featured", target: "#" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", target: "#" },
      { label: "Terms of Service", target: "#" },
      { label: "Vape & Age Restriction Policy", target: "#" },
      { label: "Refund & Subscription Cancellation Policy", target: "#" },
      { label: "Liability & Store/Brand", target: "#" },
      { label: "Content & Review Moderation Policy", target: "#" },
      { label: "DMCA Copyright", target: "#" },
      { label: "Community Guidelines", target: "#" },
      { label: "Acceptance of Terms", target: "#" },
    ],
  },
  {
    title: "Join Our Community",
    links: [
      {
        label: "Facebook",
        target: "#",
        icon: {
          light: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
              alt="thumbnail"
            />
          ),
          dark: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/facebook-new.png"
              alt="thumbnail"
            />
          ),
        },
      },
      {
        label: "Instagram",
        target: "#",
        icon: {
          light: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
              alt="thumbnail"
            />
          ),
          dark: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
              alt="thumbnail"
            />
          ),
        },
      },
      {
        label: "X",
        target: "#",
        icon: {
          light: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v1.png"
              alt="thumbnail"
            />
          ),
          dark: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
              alt="thumbnail"
            />
          ),
        },
      },
      {
        label: "Discord",
        target: "#",
        icon: {
          light: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png"
              alt="thumbnail"
            />
          ),
          dark: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/discord-logo.png"
              alt="thumbnail"
            />
          ),
        },
      },
      {
        label: "Youtube",
        target: "#",
        icon: {
          light: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
              alt="thumbnail"
            />
          ),
          dark: (
            <Image
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/youtube-play.png"
              alt="thumbnail"
            />
          ),
        },
      },
    ],
  },
];
