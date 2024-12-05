"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { useClerk } from "@clerk/nextjs";
import { LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";

import logo from "/logo.png";
import Image from "next/image";

const Navbar = () => {
  // const { user } = useClerk();

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    console.log("Current ScrollY:", window.scrollY);
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    console.log("Current ScrollY:", window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full  z-[99999] select-none pt-12",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md pt-0"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between px-5">
          <div className="flex items-center space-x-12">
            <Link href="/#home">
              {/* <span className="text-lg font-bold font-heading !leading-none">
                                Cyro
                            </span> */}
              <Image
                src="/assets/logo.png"
                alt="Cyromics"
                width={80}
                height={80}
                className="w-7 h-7"
              />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              {/* <Link
              //   href="/auth/sign-up"
              //   className={buttonVariants({ variant: "orange", size: "lg" })}
              // >
              //   Read Comics
              // </Link> */}

              <Link
                href="/marketplace"
                className={
                  scroll
                    ? buttonVariants({ variant: "white", size: "sm" })
                    : buttonVariants({ variant: "white", size: "lg" })
                }
              >
                Read Comics
              </Link>
            </div>

            {/* {user ? (
                            <div className="flex items-center">
                                <Link href="/dashboard" className={buttonVariants({ size: "sm", })}>
                                    Dashboard
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-4">
                                <Link href="/auth/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    Sign In
                                </Link>
                                <Link href="/auth/sign-up" className={buttonVariants({ size: "sm", })}>
                                    Get Started
                                    <ZapIcon className="size-3.5 ml-1.5 text-orange-500 fill-orange-500" />
                                </Link>
                            </div>
                        )} */}
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
