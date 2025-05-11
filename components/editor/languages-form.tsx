"use client";

import { useCV } from "@/components/providers/cv-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash } from "lucide-react";
import { v4 as uuidv4 } from "@/lib/utils";
import { Language } from "@/lib/types";
import React from "react";

const proficiencyLevels = [
  { label: "Basic", value: "Basic" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Fluent", value: "Fluent" },
  { label: "Native", value: "Native" },
];

const LanguagesForm = () => {
  const {
    cvData,
    updateItemInSection,
    removeItemFromSection,
    addItemToSection /*, reorderSection*/,
  } = useCV();
  const { languages } = cvData;

  const handleAdd = () => {
    addItemToSection("languages", {
      id: uuidv4(),
      name: "",
      proficiency: "Intermediate",
    });
  };

  const handleRemove = (index: number) => {
    removeItemFromSection("languages", index);
  };

  const handleChange = (
    index: number,
    field: keyof Language,
    value: string
  ) => {
    updateItemInSection("languages", index, { [field]: value });
  };

  // Removed handleDragEnd function

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {languages.map((language, index) => (
          <Card key={language.id} className="relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                <span>
                  {language.name ? language.name : `Language ${index + 1}`}
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
                <Label htmlFor={`language-name-${index}`}>Language</Label>
                <Input
                  id={`language-name-${index}`}
                  value={language.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  placeholder="English"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`language-proficiency-${index}`}>
                  Proficiency
                </Label>
                <Select
                  value={language.proficiency}
                  onValueChange={(value) =>
                    handleChange(index, "proficiency", value)
                  }
                >
                  <SelectTrigger id={`language-proficiency-${index}`}>
                    <SelectValue placeholder="Select proficiency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {proficiencyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
        Add Language
      </Button>
    </div>
  );
};

export default LanguagesForm;
