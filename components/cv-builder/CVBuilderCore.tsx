"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCVData } from "@/hooks/use-cv-data";
import PersonalInfoForm from "@/components/cv-builder/forms/PersonalInfoForm";
import WorkExperienceForm from "@/components/cv-builder/forms/WorkExperienceForm";
import EducationForm from "@/components/cv-builder/forms/EducationForm";
import SkillsForm from "@/components/cv-builder/forms/SkillsForm";
import ProjectsForm from "@/components/cv-builder/forms/ProjectsForm";
import CVPreview from "@/components/cv-builder/preview/CVPreview";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  { id: "personal", label: "Personal" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function CVBuilderCore() {
  const { updateProgress } = useCVData();
  const [activeTab, setActiveTab] = useState("personal");
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  useEffect(() => {
    // Calculate initial progress
    updateProgress();
  }, [updateProgress]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-5 mb-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="personal" className="space-y-6">
            <PersonalInfoForm />
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6">
            <WorkExperienceForm />
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            <EducationForm />
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6">
            <SkillsForm />
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-6">
            <ProjectsForm />
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={goToPreviousTab}
            disabled={activeTab === "personal"}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={goToNextTab}
            disabled={activeTab === "projects"}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="sticky top-24 h-[calc(100vh-120px)] overflow-auto"
      >
        <CVPreview />
      </motion.div>
    </div>
  );
}