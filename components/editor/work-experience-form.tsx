"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardFooter
import { Plus, Trash } from "lucide-react"; // Removed Check
// import { Checkbox } from '@/components/ui/checkbox'; // Removed if not used elsewhere
import { Switch } from "@/components/ui/switch";
import { v4 as uuidv4 } from "@/lib/utils";
import { WorkExperience } from "@/lib/types";
import React from "react";

const WorkExperienceForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection /*, reorderSection*/,
  } = useCV();
  const { workExperience } = cvData;

  const handleAdd = () => {
    addItemToSection("workExperience", {
      id: uuidv4(),
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("workExperience", index);
  };

  const handleChange = (
    index: number,
    field: keyof WorkExperience,
    value: string | boolean
  ) => {
    updateItemInSection("workExperience", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {workExperience.map((experience, index) => (
          <Card key={experience.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>
                  {experience.position || experience.company
                    ? `${experience.position || "Position"} at ${
                        experience.company || "Company"
                      }`
                    : `Work Experience ${index + 1}`}
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
                  <Label htmlFor={`position-${index}`}>Position</Label>
                  <Input
                    id={`position-${index}`}
                    value={experience.position}
                    onChange={(e) =>
                      handleChange(index, "position", e.target.value)
                    }
                    placeholder="Software Engineer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input
                    id={`company-${index}`}
                    value={experience.company}
                    onChange={(e) =>
                      handleChange(index, "company", e.target.value)
                    }
                    placeholder="Tech Company Inc."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={experience.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                  placeholder="New York, NY"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                  <Input
                    id={`startDate-${index}`}
                    type="month"
                    value={experience.startDate}
                    onChange={(e) =>
                      handleChange(index, "startDate", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={`current-${index}`}
                        className="text-sm text-muted-foreground"
                      >
                        Current
                      </label>
                      <Switch
                        id={`current-${index}`}
                        checked={experience.current}
                        onCheckedChange={(checked) =>
                          handleChange(index, "current", checked)
                        }
                      />
                    </div>
                  </div>
                  <Input
                    id={`endDate-${index}`}
                    type="month"
                    value={experience.endDate}
                    onChange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                    disabled={experience.current}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`description-${index}`}>Description</Label>
                <Textarea
                  id={`description-${index}`}
                  value={experience.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  placeholder="Describe your responsibilities and achievements..."
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
        Add Work Experience
      </Button>
    </div>
  );
};

export default WorkExperienceForm;
