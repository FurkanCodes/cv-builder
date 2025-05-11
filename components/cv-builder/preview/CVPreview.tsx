"use client";

import { useCVData } from "@/hooks/use-cv-data";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import { CVTemplate } from "@/lib/types";
import { CV_TEMPLATES } from "@/lib/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import { motion } from "framer-motion";

export default function CVPreview() {
  const { cvData, selectedTemplate, setSelectedTemplate } = useCVData();
  const previewRef = useRef<HTMLDivElement>(null);
  
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "professional":
        return <ProfessionalTemplate cvData={cvData} />;
      case "creative":
        return <CreativeTemplate cvData={cvData} />;
      default:
        return <ProfessionalTemplate cvData={cvData} />;
    }
  };
  
  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
  };
  
  return (
    <div className="flex flex-col h-full">
      <motion.div 
        className="mb-4 p-4 bg-card border rounded-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-3">Select Template</h3>
        <RadioGroup 
          value={selectedTemplate} 
          onValueChange={handleTemplateChange}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {CV_TEMPLATES.map((template: CVTemplate) => (
            <div key={template.id} className="relative">
              <RadioGroupItem
                value={template.id}
                id={template.id}
                className="sr-only"
              />
              <Label
                htmlFor={template.id}
                className="cursor-pointer block"
              >
                <div className={`
                  overflow-hidden rounded-md border-2 transition-all
                  ${selectedTemplate === template.id ? 'border-primary shadow-sm' : 'border-muted hover:border-muted-foreground/50'}
                `}>
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                </div>
                <span className="mt-1 block text-center text-sm font-medium">
                  {template.name}
                </span>
              </Label>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 h-4 w-4 rounded-full bg-primary"></div>
              )}
            </div>
          ))}
        </RadioGroup>
      </motion.div>
      
      <Card className="flex-grow overflow-hidden border shadow-md">
        <ScrollArea className="h-full rounded-md">
          <div ref={previewRef} className="p-6 min-h-full">
            {renderTemplate()}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}