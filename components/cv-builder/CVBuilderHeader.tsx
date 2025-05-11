"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ChevronLeft, Download } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Progress } from "@/components/ui/progress";
import { useRef } from "react";
import { useCVData } from "@/hooks/use-cv-data";
import { generatePDF } from "@/lib/pdf-generator";

export default function CVBuilderHeader() {
  const { cvData, progress } = useCVData();
  const cvComponentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (cvComponentRef.current) {
      await generatePDF(cvComponentRef.current, cvData.personalInfo.fullName || "my-cv");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center mr-6">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <FileText className="h-6 w-6 mr-2" />
            <span className="font-bold">CV Builder</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <div className="w-44">
              <Progress value={progress} className="h-2" />
            </div>
            <span className="text-xs text-muted-foreground">{progress}% complete</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="default" size="sm">
            Save
          </Button>
        </div>
      </div>
    </header>
  );
}