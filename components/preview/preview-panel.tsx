"use client";

import { useCV } from '@/components/providers/cv-provider';
import { ModernTemplate } from '@/components/templates/modern-template';
import { ClassicTemplate } from '@/components/templates/classic-template';
import { MinimalTemplate } from '@/components/templates/minimal-template';
import { ProfessionalTemplate } from '@/components/templates/professional-template';
import React from 'react';

const PreviewPanel = () => {
  const { selectedTemplate } = useCV();

  // Return the selected template component
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate />;
      case 'classic':
        return <ClassicTemplate />;
      case 'minimal':
        return <MinimalTemplate />;
      case 'professional':
        return <ProfessionalTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  return (
    <div className="w-full max-w-[800px] bg-white shadow-md rounded-lg">
      <div className="p-1">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default PreviewPanel;