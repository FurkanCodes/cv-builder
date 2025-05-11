"use client";

import { useCV } from '@/components/providers/cv-provider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  colorOptions,
  fontOptions,
} from '@/lib/types';
import React from 'react';

const StylingPanel = () => {
  const { selectedColor, setSelectedColor, selectedFont, setSelectedFont } = useCV();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-base">Color Scheme</Label>
        <RadioGroup
          value={selectedColor}
          onValueChange={setSelectedColor}
          className="grid grid-cols-3 gap-3"
        >
          {colorOptions.map((color) => (
            <div key={color.value} className="relative">
              <RadioGroupItem
                value={color.value}
                id={`color-${color.value}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`color-${color.value}`}
                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div
                  className="h-8 w-8 rounded-full mb-1"
                  style={{ backgroundColor: color.preview }}
                />
                <div className="text-xs font-normal">{color.name}</div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label className="text-base">Font</Label>
        <RadioGroup
          value={selectedFont}
          onValueChange={setSelectedFont}
          className="grid grid-cols-2 gap-3"
        >
          {fontOptions.map((font) => (
            <div key={font.value} className="relative">
              <RadioGroupItem
                value={font.value}
                id={`font-${font.value}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`font-${font.value}`}
                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-base">
                  {font.name}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default StylingPanel;