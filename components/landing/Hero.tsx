"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const avatarUrls = [
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1", // Woman smiling
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1", // Man with beard
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1", // Man in suit
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1", // Smiling man outdoors
  ];

  return (
    <div className="relative overflow-hidden  py-20 md:py-32">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Build Your <span className="text-primary">Perfect CV</span> in
                  Minutes
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create professional, ATS-friendly CVs that stand out to
                  employers. Choose from beautiful templates and customize every
                  detail.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="mr-4">
                <Link href="/cv-builder">Create Your CV</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#templates">View Templates</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex -space-x-2">
                {avatarUrls.map((url, index) => (
                  <div
                    key={index} // Using index as key for simplicity, ensure URLs are stable if list changes
                    className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <img
                      src={url}
                      alt={`User avatar ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium">5,000+</span> professionals trust
                us
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mx-auto w-full max-w-[400px] lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 p-1.5">
              {/* Paper effect with shadow */}
              <div className="overflow-hidden rounded-xl border bg-card/95 backdrop-blur-sm shadow-xl">
                {/* CV Header */}
                <div className="flex items-start space-x-4 border-b p-6">
                  <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-primary/10 ring-2 ring-primary/20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="CV Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      Alex Morgan
                    </h3>
                    <p className="text-sm font-medium tracking-wide text-primary">
                      Senior Product Designer
                    </p>
                    <div className="mt-2 flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>London, UK</span>
                      <span>•</span>
                      <span>alex@designstudio.com</span>
                    </div>
                  </div>
                </div>

                {/* CV Content */}
                <div className="p-6 space-y-4">
                  {/* Summary */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center text-foreground">
                      <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-primary/60"></span>
                      Professional Summary
                    </h4>
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-full rounded-full bg-muted"></div>
                      <div className="h-2.5 w-[90%] rounded-full bg-muted"></div>
                      <div className="h-2.5 w-[95%] rounded-full bg-muted"></div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center text-foreground">
                      <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-primary/60"></span>
                      Work Experience
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <div className="h-3 w-32 rounded-full bg-muted/80"></div>
                          <div className="h-3 w-20 rounded-full bg-muted/60"></div>
                        </div>
                        <div className="h-2.5 w-[85%] rounded-full bg-muted"></div>
                        <div className="h-2.5 w-[80%] rounded-full bg-muted"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <div className="h-3 w-28 rounded-full bg-muted/80"></div>
                          <div className="h-3 w-20 rounded-full bg-muted/60"></div>
                        </div>
                        <div className="h-2.5 w-[75%] rounded-full bg-muted"></div>
                        <div className="h-2.5 w-[82%] rounded-full bg-muted"></div>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center text-foreground">
                      <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-primary/60"></span>
                      Education
                    </h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <div className="h-3 w-36 rounded-full bg-muted/80"></div>
                        <div className="h-3 w-16 rounded-full bg-muted/60"></div>
                      </div>
                      <div className="h-2.5 w-[65%] rounded-full bg-muted"></div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center text-foreground">
                      <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-primary/60"></span>
                      Skills
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-12 rounded-full bg-primary/30"></div>
                      </div>
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-10 rounded-full bg-primary/30"></div>
                      </div>
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-14 rounded-full bg-primary/30"></div>
                      </div>
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-11 rounded-full bg-primary/30"></div>
                      </div>
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-9 rounded-full bg-primary/30"></div>
                      </div>
                      <div className="h-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-12 rounded-full bg-primary/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
              <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-secondary/20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
