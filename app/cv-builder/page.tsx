import CVBuilderHeader from "@/components/cv-builder/CVBuilderHeader";
import CVBuilderCore from "@/components/cv-builder/CVBuilderCore";

export default function CVBuilderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <CVBuilderHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <CVBuilderCore />
      </main>
    </div>
  );
}
