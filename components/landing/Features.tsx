"use client";

import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Download, Brush, Eye, Scissors, ZoomIn } from "lucide-react";

const iconComponents = {
  FileText,
  Download,
  Brush,
  Eye,
  Scissors,
  ZoomIn
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for Your Perfect CV
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg mx-auto max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to create, customize, and share impressive CVs that get you noticed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconComponents[feature.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={feature.id}
                className={cn(
                  "relative group rounded-lg border bg-card p-6 transition-all hover:shadow-md",
                  index === 1 ? "md:translate-y-4" : "",
                  index === 4 ? "md:translate-y-4" : ""
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}