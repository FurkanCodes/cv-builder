import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Facebook, Twitter, Instagram, Linkedin, FileText } from "lucide-react";

const iconComponents = {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6" />
                <span className="font-bold text-xl">CV Builder</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Create professional, ATS-friendly CVs that help you stand out and
              land your dream job.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  iconComponents[social.icon as keyof typeof iconComponents];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CV Builder. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              <span>Terms of Service</span>
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              <span>Cookie Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
