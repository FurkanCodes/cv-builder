"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CVData, defaultCV } from "@/lib/types";

type CVContextType = {
  cvData: CVData;
  updateCV: (newData: Partial<CVData>) => void;
  updateSection: <K extends keyof CVData>(
    section: K,
    data: Partial<CVData[K]>
  ) => void;
  addItemToSection: <K extends keyof CVData>(section: K, item: any) => void;
  removeItemFromSection: <K extends keyof CVData>(
    section: K,
    index: number
  ) => void;
  updateItemInSection: <K extends keyof CVData>(
    section: K,
    index: number,
    data: any
  ) => void;
  reorderSection: <K extends keyof CVData>(
    section: K,
    startIndex: number,
    endIndex: number
  ) => void;
  resetCV: () => void;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedFont: string;
  setSelectedFont: (font: string) => void;
};

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: React.ReactNode }) {
  // The misplaced brace was here, I removed it.
  const [cvData, setCVData] = useState<CVData>(defaultCV);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [selectedColor, setSelectedColor] = useState("slate");
  const [selectedFont, setSelectedFont] = useState("inter");

  // Load from localStorage on initial mount
  useEffect(() => {
    const savedCV = localStorage.getItem("cvData");
    const savedTemplate = localStorage.getItem("selectedTemplate");
    const savedColor = localStorage.getItem("selectedColor");
    const savedFont = localStorage.getItem("selectedFont");

    if (savedCV) {
      setCVData(JSON.parse(savedCV));
    }
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
    if (savedColor) {
      setSelectedColor(savedColor);
    }
    if (savedFont) {
      setSelectedFont(savedFont);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
    localStorage.setItem("selectedTemplate", selectedTemplate);
    localStorage.setItem("selectedColor", selectedColor);
    localStorage.setItem("selectedFont", selectedFont);
  }, [cvData, selectedTemplate, selectedColor, selectedFont]);

  const updateCV = (newData: Partial<CVData>) => {
    setCVData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateSection = <K extends keyof CVData>(
    section: K,
    data: Partial<CVData[K]>
  ) => {
    setCVData((prevData) => ({
      ...prevData,
      [section]: { ...(prevData[section] as object), ...data },
    }));
  };

  const addItemToSection = <K extends keyof CVData>(section: K, item: any) => {
    setCVData((prevData) => {
      const currentSection = prevData[section];
      if (Array.isArray(currentSection)) {
        return {
          ...prevData,
          [section]: [...currentSection, item],
        };
      }
      return prevData;
    });
  };

  const removeItemFromSection = <K extends keyof CVData>(
    section: K,
    index: number
  ) => {
    setCVData((prevData) => {
      const currentSection = prevData[section];
      if (Array.isArray(currentSection)) {
        return {
          ...prevData,
          [section]: currentSection.filter((_, i) => i !== index),
        };
      }
      return prevData;
    });
  };

  const updateItemInSection = <K extends keyof CVData>(
    section: K,
    index: number,
    data: any
  ) => {
    setCVData((prevData) => {
      const currentSection = prevData[section];
      if (Array.isArray(currentSection)) {
        return {
          ...prevData,
          [section]: currentSection.map((item, i) =>
            i === index ? { ...item, ...data } : item
          ),
        };
      }
      return prevData;
    });
  };

  const reorderSection = <K extends keyof CVData>(
    section: K,
    startIndex: number,
    endIndex: number
  ) => {
    setCVData((prevData) => {
      const currentSection = prevData[section];
      if (Array.isArray(currentSection)) {
        const result = Array.from(currentSection);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return {
          ...prevData,
          [section]: result,
        };
      }
      return prevData;
    });
  };

  const resetCV = () => {
    setCVData(defaultCV);
    setSelectedTemplate("modern");
    setSelectedColor("slate");
    setSelectedFont("inter");
  };

  return (
    <CVContext.Provider
      value={{
        cvData,
        updateCV,
        updateSection,
        addItemToSection,
        removeItemFromSection,
        updateItemInSection,
        reorderSection,
        resetCV,
        selectedTemplate,
        setSelectedTemplate,
        selectedColor,
        setSelectedColor,
        selectedFont,
        setSelectedFont,
      }}
    >
      {children}
    </CVContext.Provider>
  );
} // This is the correct closing brace for CVProvider

export const useCV = () => {
  // The misplaced brace was here, I removed it.
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error("useCV must be used within a CVProvider");
  }
  return context;
}; // This is the correct closing brace for useCV
