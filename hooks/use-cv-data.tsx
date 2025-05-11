"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CVData, CVSection } from "@/lib/types";
import { DEFAULT_CV_DATA } from "@/lib/constants";

type CVDataContextType = {
  cvData: CVData;
  updatePersonalInfo: (data: Partial<CVData["personalInfo"]>) => void;
  addWorkExperience: (data: Omit<CVData["workExperience"][0], "id">) => void;
  updateWorkExperience: (id: string, data: Partial<CVData["workExperience"][0]>) => void;
  removeWorkExperience: (id: string) => void;
  addEducation: (data: Omit<CVData["education"][0], "id">) => void;
  updateEducation: (id: string, data: Partial<CVData["education"][0]>) => void;
  removeEducation: (id: string) => void;
  addSkill: (data: Omit<CVData["skills"][0], "id">) => void;
  updateSkill: (id: string, data: Partial<CVData["skills"][0]>) => void;
  removeSkill: (id: string) => void;
  addProject: (data: Omit<CVData["projects"][0], "id">) => void;
  updateProject: (id: string, data: Partial<CVData["projects"][0]>) => void;
  removeProject: (id: string) => void;
  reorderSection: (section: "workExperience" | "education" | "skills" | "projects", sourceIndex: number, destinationIndex: number) => void;
  progress: number;
  updateProgress: () => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
};

const CVDataContext = createContext<CVDataContextType | undefined>(undefined);

export function CVDataProvider({ children }: { children: ReactNode }) {
  const [cvData, setCVData] = useState<CVData>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("cv-data");
      return savedData ? JSON.parse(savedData) : DEFAULT_CV_DATA;
    }
    return DEFAULT_CV_DATA;
  });
  
  const [progress, setProgress] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState("professional");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cv-data", JSON.stringify(cvData));
      updateProgress();
    }
  }, [cvData]);

  const updatePersonalInfo = (data: Partial<CVData["personalInfo"]>) => {
    setCVData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...data,
      },
    }));
  };

  const addWorkExperience = (data: Omit<CVData["workExperience"][0], "id">) => {
    setCVData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          ...data,
          id: generateId(),
        },
      ],
    }));
  };

  const updateWorkExperience = (id: string, data: Partial<CVData["workExperience"][0]>) => {
    setCVData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    }));
  };

  const removeWorkExperience = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((item) => item.id !== id),
    }));
  };

  const addEducation = (data: Omit<CVData["education"][0], "id">) => {
    setCVData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          ...data,
          id: generateId(),
        },
      ],
    }));
  };

  const updateEducation = (id: string, data: Partial<CVData["education"][0]>) => {
    setCVData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  const addSkill = (data: Omit<CVData["skills"][0], "id">) => {
    setCVData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          ...data,
          id: generateId(),
        },
      ],
    }));
  };

  const updateSkill = (id: string, data: Partial<CVData["skills"][0]>) => {
    setCVData((prev) => ({
      ...prev,
      skills: prev.skills.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    }));
  };

  const removeSkill = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item.id !== id),
    }));
  };

  const addProject = (data: Omit<CVData["projects"][0], "id">) => {
    setCVData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          ...data,
          id: generateId(),
        },
      ],
    }));
  };

  const updateProject = (id: string, data: Partial<CVData["projects"][0]>) => {
    setCVData((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ),
    }));
  };

  const removeProject = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };

  const reorderSection = (
    section: "workExperience" | "education" | "skills" | "projects",
    sourceIndex: number,
    destinationIndex: number
  ) => {
    setCVData((prev) => {
      const items = [...prev[section]];
      const [removed] = items.splice(sourceIndex, 1);
      items.splice(destinationIndex, 0, removed);
      return { ...prev, [section]: items };
    });
  };

  const calculateSectionProgress = (section: CVSection) => {
    let progress = 0;
    
    if (section === "personalInfo") {
      const { fullName, jobTitle, email, phone, location, summary } = cvData.personalInfo;
      const requiredFields = [fullName, jobTitle, email, phone, location, summary];
      progress = requiredFields.filter(Boolean).length / requiredFields.length;
    } else {
      // For arrays, we just check if there's at least one item
      progress = cvData[section].length > 0 ? 1 : 0;
    }
    
    return progress * 100;
  };

  const updateProgress = () => {
    const sections: CVSection[] = ["personalInfo", "workExperience", "education", "skills", "projects"];
    const sectionProgress = sections.map(calculateSectionProgress);
    const totalProgress = sectionProgress.reduce((sum, p) => sum + p, 0) / sections.length;
    setProgress(Math.round(totalProgress));
  };

  return (
    <CVDataContext.Provider
      value={{
        cvData,
        updatePersonalInfo,
        addWorkExperience,
        updateWorkExperience,
        removeWorkExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        addProject,
        updateProject,
        removeProject,
        reorderSection,
        progress,
        updateProgress,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </CVDataContext.Provider>
  );
}

export function useCVData() {
  const context = useContext(CVDataContext);
  if (context === undefined) {
    throw new Error("useCVData must be used within a CVDataProvider");
  }
  return context;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}