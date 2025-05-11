"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

const TEMPLATES = [
  {
    title: "Modern",
    href: "/templates/modern",
    description: "Clean, streamlined layout with a professional color scheme",
  },
  {
    title: "Creative",
    href: "/templates/creative",
    description: "Bold design for creative fields with custom elements",
  },
  {
    title: "Executive",
    href: "/templates/executive",
    description: "Sophisticated template for senior professionals",
  },
  {
    title: "Simple",
    href: "/templates/simple",
    description: "Minimalist design focusing on content clarity",
  },
];

type ListItemProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor:
          isScrolled || !isHomePage ? "var(--background)" : "transparent",
        boxShadow: isScrolled
          ? "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
          : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        isScrolled || !isHomePage ? "border-border" : "border-transparent"
      )}
    >
      <div className="w-full mx-auto">
        <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity hover:opacity-90"
          >
            <div className="flex items-center space-x-2.5">
              <FileText className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CV Builder</span>
            </div>
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      pathname === "/"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    pathname.startsWith("/templates")
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }
                >
                  Templates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {TEMPLATES.map((template) => (
                      <ListItem
                        key={template.title}
                        title={template.title}
                        href={template.href}
                        className="cursor-pointer"
                      >
                        {template.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      pathname === "/pricing"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className={cn(
                      "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      pathname === "/blog"
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <ModeToggle />
            <Button asChild size="sm" className="font-medium shadow-sm">
              <Link href="/cv-builder">Create CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
