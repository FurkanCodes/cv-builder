"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const components: { title: string; href: string; description: string }[] = [
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

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    visible: {
      backgroundColor: isScrolled ? "var(--background)" : isHomePage ? "transparent" : "var(--background)",
      boxShadow: isScrolled ? "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" : "none",
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      animate="visible"
      transition={{ duration: 0.3 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        isScrolled ? "border-border" : isHomePage ? "border-transparent" : "border-border"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6" />
          <span className="font-bold text-xl">CV Builder</span>
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/" ? "text-primary" : "text-muted-foreground"
                )}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
                )}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                )}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/cv-builder">
            <Button>Create CV</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";