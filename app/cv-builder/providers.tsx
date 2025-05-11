"use client";

import { ReactNode } from "react";
import { CVDataProvider } from "@/hooks/use-cv-data";

export function CVBuilderProviders({ children }: { children: ReactNode }) {
  return <CVDataProvider>{children}</CVDataProvider>;
}
