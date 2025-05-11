"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg mx-auto max-w-[800px]">
            See how our CV builder has helped professionals land their dream jobs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div className="mb-4">
                        <div className="flex text-amber-400 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-5 w-5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 space-x-2">
              <CarouselPrevious className="relative position-static" />
              <CarouselNext className="relative position-static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}