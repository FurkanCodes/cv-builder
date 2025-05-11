"use client";

import { motion } from "framer-motion";
import { FEATURE_BENEFITS } from "@/lib/constants";

export default function Benefits() {
  return (
    <section className="bg-muted py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Stand out from the competition
            </h2>
            <p className="text-muted-foreground text-lg">
              In today's competitive job market, a professional CV can make all the difference. Our CV builder helps you create a document that showcases your skills and experience effectively.
            </p>
            
            <div className="space-y-6 mt-8">
              {FEATURE_BENEFITS.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              <div className="aspect-[4/5] rounded-xl bg-card border shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="CV example" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-3/4 rounded-lg bg-card border shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    93%
                  </div>
                  <div>
                    <div className="text-sm font-medium">ATS Score</div>
                    <div className="text-xs text-muted-foreground">Excellent chance of getting noticed!</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-2/3 rounded-lg bg-card border shadow-lg p-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Recruiter Feedback</div>
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-muted-foreground">
                      Impressive layout and content
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}