"use client";

import { useCV } from '@/components/providers/cv-provider';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const SummaryForm = () => {
  const { cvData, updateCV } = useCV();
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateCV({ summary: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={cvData.summary}
          onChange={handleChange}
          placeholder="A brief summary of your professional background, skills, and career goals."
          className="min-h-[150px]"
        />
        <p className="text-sm text-muted-foreground mt-2">
          Write a concise professional summary that highlights your expertise, key skills, and career achievements.
          Keep it under 4-6 sentences for maximum impact.
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;