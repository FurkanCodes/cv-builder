"use client";

import { useCV } from '@/components/providers/cv-provider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { templateOptions } from '@/lib/types';

const TemplateSelector = () => {
  const { selectedTemplate, setSelectedTemplate } = useCV();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Template:</span>
      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent>
          {templateOptions.map((template) => (
            <SelectItem key={template.value} value={template.value}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TemplateSelector;