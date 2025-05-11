"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import { v4 as uuidv4 } from "@/lib/utils";
import { Certification } from "@/lib/types";
import React from "react";

const CertificationsForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection,
    // reorderSection, // Removed as drag and drop is removed
  } = useCV();
  const { certifications } = cvData;

  const handleAdd = () => {
    addItemToSection("certifications", {
      id: uuidv4(),
      name: "",
      issuer: "",
      date: "",
      link: "",
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("certifications", index);
  };

  const handleChange = (
    index: number,
    field: keyof Certification,
    value: string
  ) => {
    updateItemInSection("certifications", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <Card key={cert.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>
                  {cert.name ? cert.name : `Certification ${index + 1}`}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 absolute top-2 right-2"
                  onClick={() => handleRemove(index)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`cert-name-${index}`}>Certification Name</Label>
                <Input
                  id={`cert-name-${index}`}
                  value={cert.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  placeholder="AWS Certified Solutions Architect"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`cert-issuer-${index}`}>
                  Issuing Organization
                </Label>
                <Input
                  id={`cert-issuer-${index}`}
                  value={cert.issuer}
                  onChange={(e) =>
                    handleChange(index, "issuer", e.target.value)
                  }
                  placeholder="Amazon Web Services"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`cert-date-${index}`}>Date Issued</Label>
                <Input
                  id={`cert-date-${index}`}
                  type="month"
                  value={cert.date}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`cert-link-${index}`}>
                  Credential Link (Optional)
                </Label>
                <Input
                  id={`cert-link-${index}`}
                  type="url"
                  value={cert.link}
                  onChange={(e) => handleChange(index, "link", e.target.value)}
                  placeholder="https://credential.net/abc123"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={handleAdd}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Certification
      </Button>
    </div>
  );
};

export default CertificationsForm;
