"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Build Your <span className="text-primary">Perfect CV</span> in Minutes
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create professional, ATS-friendly CVs that stand out to employers. Choose from beautiful templates and customize every detail.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/cv-builder">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Create Your CV Now
                </Button>
              </Link>
              <Link href="#templates">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  View Templates
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4 text-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img 
                      src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=${i}`} 
                      alt="User avatar" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground">
                <span className="font-medium">5,000+</span> professionals trust us
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="mx-auto grid max-w-[350px] items-start gap-6 lg:max-w-none lg:grid-cols-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mx-auto w-full drop-shadow-xl">
              <div className="overflow-hidden rounded-2xl border bg-card">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-20 w-20 rounded-full bg-muted mx-auto overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="CV Preview" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded-full bg-muted"></div>
                      <div className="h-3 w-3/4 rounded-full bg-muted"></div>
                      <div className="h-3 w-5/6 rounded-full bg-muted"></div>
                      <div className="h-3 w-3/4 rounded-full bg-muted"></div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Experience</h4>
                      <div className="h-3 w-full rounded-full bg-muted"></div>
                      <div className="h-3 w-5/6 rounded-full bg-muted"></div>
                      <div className="h-3 w-4/5 rounded-full bg-muted"></div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Education</h4>
                      <div className="h-3 w-full rounded-full bg-muted"></div>
                      <div className="h-3 w-3/4 rounded-full bg-muted"></div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Skills</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-6 rounded bg-muted"></div>
                        <div className="h-6 rounded bg-muted"></div>
                        <div className="h-6 rounded bg-muted"></div>
                        <div className="h-6 rounded bg-muted"></div>
                        <div className="h-6 rounded bg-muted"></div>
                        <div className="h-6 rounded bg-muted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}