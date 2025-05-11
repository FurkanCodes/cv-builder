"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PersonalInfoForm from '@/components/editor/personal-info-form';
import SummaryForm from '@/components/editor/summary-form';
import WorkExperienceForm from '@/components/editor/work-experience-form';
import EducationForm from '@/components/editor/education-form';
import SkillsForm from '@/components/editor/skills-form';
import ProjectsForm from '@/components/editor/projects-form';
import CertificationsForm from '@/components/editor/certifications-form';
import LanguagesForm from '@/components/editor/languages-form';
import StylingPanel from '@/components/editor/styling-panel';

const EditorPanel = () => {
  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={['personal-info']}>
        <AccordionItem value="personal-info">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent>
            <PersonalInfoForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="summary">
          <AccordionTrigger>Professional Summary</AccordionTrigger>
          <AccordionContent>
            <SummaryForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="work-experience">
          <AccordionTrigger>Work Experience</AccordionTrigger>
          <AccordionContent>
            <WorkExperienceForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="education">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <EducationForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <SkillsForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="projects">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent>
            <ProjectsForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="certifications">
          <AccordionTrigger>Certifications</AccordionTrigger>
          <AccordionContent>
            <CertificationsForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="languages">
          <AccordionTrigger>Languages</AccordionTrigger>
          <AccordionContent>
            <LanguagesForm />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="styling">
          <AccordionTrigger>Appearance</AccordionTrigger>
          <AccordionContent>
            <StylingPanel />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default EditorPanel;