"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import { v4 as uuidv4 } from "@/lib/utils";
import { Education } from "@/lib/types";
import React from "react";

const EducationForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection /*, reorderSection*/,
  } = useCV();
  const { education } = cvData;

  const handleAdd = () => {
    addItemToSection("education", {
      id: uuidv4(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("education", index);
  };

  const handleChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    updateItemInSection("education", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={edu.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>
                  {edu.degree || edu.institution
                    ? `${edu.degree || "Degree"} - ${
                        edu.institution || "Institution"
                      }`
                    : `Education ${index + 1}`}
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`degree-${index}`}>Degree</Label>
                  <Input
                    id={`degree-${index}`}
                    value={edu.degree}
                    onChange={(e) =>
                      handleChange(index, "degree", e.target.value)
                    }
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`institution-${index}`}>Institution</Label>
                  <Input
                    id={`institution-${index}`}
                    value={edu.institution}
                    onChange={(e) =>
                      handleChange(index, "institution", e.target.value)
                    }
                    placeholder="University Name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={edu.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                  placeholder="City, Country"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                  <Input
                    id={`startDate-${index}`}
                    type="month"
                    value={edu.startDate}
                    onChange={(e) =>
                      handleChange(index, "startDate", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${index}`}>End Date</Label>
                  <Input
                    id={`endDate-${index}`}
                    type="month"
                    value={edu.endDate}
                    onChange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`description-${index}`}>
                  Description (Optional)
                </Label>
                <Textarea
                  id={`description-${index}`}
                  value={edu.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  placeholder="Relevant courses, achievements, or activities..."
                  className="min-h-[100px]"
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
        Add Education
      </Button>
    </div>
  );
};

export default EducationForm;
