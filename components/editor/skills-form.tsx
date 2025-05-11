"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import { v4 as uuidv4 } from "@/lib/utils";
import { Skill } from "@/lib/types";
import { Slider } from "@/components/ui/slider";
import React from "react";

const SkillsForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection /*, reorderSection*/,
  } = useCV();
  const { skills } = cvData;

  const handleAdd = () => {
    addItemToSection("skills", {
      id: uuidv4(),
      name: "",
      level: 3,
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("skills", index);
  };

  const handleChange = (
    index: number,
    field: keyof Skill,
    value: string | number
  ) => {
    updateItemInSection("skills", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <Card key={skill.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>{skill.name ? skill.name : `Skill ${index + 1}`}</span>
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
                <Label htmlFor={`skill-name-${index}`}>Skill Name</Label>
                <Input
                  id={`skill-name-${index}`}
                  value={skill.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  placeholder="JavaScript"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor={`skill-level-${index}`}>
                    Proficiency Level
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    {
                      [
                        "Beginner",
                        "Basic",
                        "Intermediate",
                        "Advanced",
                        "Expert",
                      ][skill.level - 1]
                    }
                  </span>
                </div>
                <Slider
                  id={`skill-level-${index}`}
                  min={1}
                  max={5}
                  step={1}
                  value={[skill.level]}
                  onValueChange={(value) =>
                    handleChange(index, "level", value[0])
                  }
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
        Add Skill
      </Button>
    </div>
  );
};

export default SkillsForm;
