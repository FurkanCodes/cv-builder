"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-background">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Land Your Dream Job?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Create a professional CV in minutes and take the next step in your
              career journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cv-builder">
                <div>
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Building Your CV
                  </Button>
                </div>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Templates
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
