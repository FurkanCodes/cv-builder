"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCV } from "@/components/providers/cv-provider";
import { ExportOptions, defaultExportOptions } from "@/lib/types";
import { Check, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ModernTemplate } from "@/components/templates/modern-template";
import { ClassicTemplate } from "@/components/templates/classic-template";
import { MinimalTemplate } from "@/components/templates/minimal-template";
import { ProfessionalTemplate } from "@/components/templates/professional-template";
import { useReactToPdf } from "@/hooks/use-react-to-pdf";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExportDialog = ({ open, onOpenChange }: ExportDialogProps) => {
  const { cvData, selectedTemplate } = useCV();
  const [options, setOptions] = useState<ExportOptions>(defaultExportOptions);
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();
  const { targetRef, toPdf } = useReactToPdf({
    filename: `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV.pdf`,
    options: {
      format: options.paperSize === "a4" ? "a4" : "letter",
      margin:
        options.margins === "narrow"
          ? { top: "0.5cm", right: "0.5cm", bottom: "0.5cm", left: "0.5cm" }
          : options.margins === "wide"
          ? { top: "2cm", right: "2cm", bottom: "2cm", left: "2cm" }
          : { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
    },
  });

  const handleExport = async () => {
    setIsExporting(true);

    try {
      await toPdf();
      toast({
        title: "Success!",
        description: "Your CV has been exported to PDF.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue exporting your CV.",
        variant: "destructive",
      });
      console.error("PDF export error:", error);
    } finally {
      setIsExporting(false);
      onOpenChange(false);
    }
  };

  const updateSectionVisibility = (
    section: keyof ExportOptions["includeSections"],
    value: boolean
  ) => {
    setOptions((prev) => ({
      ...prev,
      includeSections: {
        ...prev.includeSections,
        [section]: value,
      },
    }));
  };

  // Get the appropriate template component based on selection
  const getTemplateComponent = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate />;
      case "classic":
        return <ClassicTemplate />;
      case "minimal":
        return <MinimalTemplate />;
      case "professional":
        return <ProfessionalTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Export CV to PDF</DialogTitle>
            <DialogDescription>
              Customize your export settings before downloading your CV.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Paper Size</h3>
              <RadioGroup
                value={options.paperSize}
                onValueChange={(value) =>
                  setOptions({
                    ...options,
                    paperSize: value as "a4" | "letter",
                  })
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a4" id="a4" />
                  <Label htmlFor="a4">A4</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="letter" id="letter" />
                  <Label htmlFor="letter">Letter</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Margins</h3>
              <RadioGroup
                value={options.margins}
                onValueChange={(value) =>
                  setOptions({
                    ...options,
                    margins: value as "normal" | "narrow" | "wide",
                  })
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="narrow" id="narrow" />
                  <Label htmlFor="narrow">Narrow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="normal" />
                  <Label htmlFor="normal">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wide" id="wide" />
                  <Label htmlFor="wide">Wide</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Included Sections</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="summary"
                    checked={options.includeSections.summary}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("summary", checked)
                    }
                  />
                  <Label htmlFor="summary">Summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="workExperience"
                    checked={options.includeSections.workExperience}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("workExperience", checked)
                    }
                  />
                  <Label htmlFor="workExperience">Work Experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="education"
                    checked={options.includeSections.education}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("education", checked)
                    }
                  />
                  <Label htmlFor="education">Education</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="skills"
                    checked={options.includeSections.skills}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("skills", checked)
                    }
                  />
                  <Label htmlFor="skills">Skills</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="projects"
                    checked={options.includeSections.projects}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("projects", checked)
                    }
                  />
                  <Label htmlFor="projects">Projects</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="certifications"
                    checked={options.includeSections.certifications}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("certifications", checked)
                    }
                  />
                  <Label htmlFor="certifications">Certifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="languages"
                    checked={options.includeSections.languages}
                    onCheckedChange={(checked: boolean) =>
                      updateSectionVisibility("languages", checked)
                    }
                  />
                  <Label htmlFor="languages">Languages</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="includePhoto"
                    checked={options.includePhoto}
                    onCheckedChange={(checked: any) =>
                      setOptions({ ...options, includePhoto: checked })
                    }
                  />
                  <Label htmlFor="includePhoto">Include Photo</Label>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="button" onClick={handleExport} disabled={isExporting}>
              {isExporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Hidden template for PDF export */}
      <div
        style={{
          position: "fixed",
          left: "-3000px", // Position far off-screen
          top: "0px",
          width: "210mm", // Explicit dimensions for the container
          height: "297mm",
          zIndex: -100, // Ensure it's behind all other content
          opacity: 0, // Make it fully transparent (optional, off-screen is key)
          pointerEvents: "none", // Prevent any interaction
          overflow: "hidden", // Prevent potential scrollbars from affecting layout
        }}
      >
        <div
          ref={targetRef}
          className="bg-white"
          style={{ width: "210mm", height: "297mm" }}
        >
          {/*
          Ensure getTemplateComponent() renders content that fits.
          A background color (e.g., bg-white or style={{ backgroundColor: 'white' }})
          is important as html2canvas might render transparent backgrounds as black in the PDF.
        */}
          {getTemplateComponent()}
        </div>
      </div>
    </>
  );
};

export default ExportDialog;
