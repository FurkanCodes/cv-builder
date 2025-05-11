"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import { v4 as uuidv4 } from "@/lib/utils";
import { Project } from "@/lib/types";
import React from "react";

const ProjectsForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection /*, reorderSection*/,
  } = useCV();
  const { projects } = cvData;

  const handleAdd = () => {
    addItemToSection("projects", {
      id: uuidv4(),
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      link: "",
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("projects", index);
  };

  const handleChange = (index: number, field: keyof Project, value: string) => {
    updateItemInSection("projects", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card key={project.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>
                  {project.title ? project.title : `Project ${index + 1}`}
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
                <Label htmlFor={`project-title-${index}`}>Project Title</Label>
                <Input
                  id={`project-title-${index}`}
                  value={project.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  placeholder="E-commerce Website"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-description-${index}`}>
                  Description
                </Label>
                <Textarea
                  id={`project-description-${index}`}
                  value={project.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                  placeholder="Describe the project, technologies used, and your role..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`project-startDate-${index}`}>
                    Start Date
                  </Label>
                  <Input
                    id={`project-startDate-${index}`}
                    type="month"
                    value={project.startDate}
                    onChange={(e) =>
                      handleChange(index, "startDate", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`project-endDate-${index}`}>End Date</Label>
                  <Input
                    id={`project-endDate-${index}`}
                    type="month"
                    value={project.endDate}
                    onChange={(e) =>
                      handleChange(index, "endDate", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-link-${index}`}>
                  Project Link (Optional)
                </Label>
                <Input
                  id={`project-link-${index}`}
                  type="url"
                  value={project.link}
                  onChange={(e) => handleChange(index, "link", e.target.value)}
                  placeholder="https://example.com"
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
        Add Project
      </Button>
    </div>
  );
};

export default ProjectsForm;
