"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import EditorPanel from "@/components/editor/editor-panel";
import PreviewPanel from "@/components/preview/preview-panel";
import TemplateSelector from "@/components/editor/template-selector";
import { Download, FileText, Home, Settings } from "lucide-react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";
import ExportDialog from "@/components/export/export-dialog";
import { CVProvider } from "../providers/cv-provider";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "../ui/mode-toggle";

export default function BuilderLayout() {
  const [activeTab, setActiveTab] = useState<string>("editor");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <CVProvider>
      <div className="flex min-h-screen flex-col bg-background ">
        <header className="border-b border-border">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <Link href="/" className="font-bold text-lg">
                CVBuilder
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExportOpen(true)}
                className="hidden sm:flex items-center gap-1"
              >
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </header>

        {isDesktop ? (
          // Desktop layout - side by side
          <div className="flex flex-1 overflow-hidden">
            <div className="w-[420px] border-r border-border flex flex-col">
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold">Editor</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsExportOpen(true)}
                  className="sm:hidden flex items-center gap-1"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
              <ScrollArea className="flex-1">
                <div className="px-4 py-3">
                  <EditorPanel />
                </div>
              </ScrollArea>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold">Preview</h2>
                <TemplateSelector />
              </div>
              <ScrollArea className="flex-1">
                <div className="p-6 flex items-center justify-center">
                  <PreviewPanel />
                </div>
              </ScrollArea>
            </div>
          </div>
        ) : (
          // Mobile & Tablet layout - tabs
          <Tabs
            defaultValue="editor"
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col"
          >
            <div className="px-4 pt-3 border-b border-border">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="editor"
              className="flex-1 m-0 p-0 data-[state=active]:flex data-[state=active]:flex-col"
            >
              <ScrollArea className="flex-1">
                <div className="px-4 py-3">
                  <EditorPanel />
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value="preview"
              className="flex-1 m-0 p-0 data-[state=active]:flex data-[state=active]:flex-col"
            >
              <div className="px-4 py-3 border-b border-border">
                <TemplateSelector />
              </div>
              <ScrollArea className="flex-1">
                <div className="p-6 flex items-center justify-center">
                  <PreviewPanel />
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        )}
      </div>

      <ExportDialog open={isExportOpen} onOpenChange={setIsExportOpen} />
    </CVProvider>
  );
}
