"use client";

import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg mx-auto max-w-[800px]">
            Choose the perfect plan for your needs. No hidden fees or surprises.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-2 bg-card rounded-full p-1 border">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  billingPeriod === 'monthly' 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  billingPeriod === 'yearly' 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                Yearly <span className="text-xs ml-1 opacity-80">Save 20%</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={cn("flex", plan.recommended ? "md:-mt-4 md:-mb-4" : "")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn(
                "flex flex-col w-full border", 
                plan.recommended ? "border-primary shadow-xl" : ""
              )}>
                {plan.recommended && (
                  <div className="bg-primary text-primary-foreground text-xs font-medium py-1 text-center">
                    RECOMMENDED
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    {plan.period === 'monthly' ? 'Billed monthly' : 'Billed yearly'}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${billingPeriod === 'yearly' ? (plan.price * 0.8).toFixed(2) : plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.recommended ? "default" : "outline"} 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All plans include a 14-day money-back guarantee. Cancel anytime, no questions asked.
            Need a custom solution for your team or enterprise? <a href="/contact" className="text-primary underline underline-offset-4">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}