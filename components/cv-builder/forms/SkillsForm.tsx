"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCVData } from "@/hooks/use-cv-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, Plus } from "lucide-react";

const skillSchema = z.object({
  name: z.string().min(1, { message: "Skill name is required" }),
  level: z.number().min(1).max(5),
  category: z.string().min(1, { message: "Category is required" }),
});

const SKILL_CATEGORIES = [
  "Technical",
  "Programming Languages",
  "Frameworks",
  "Tools",
  "Soft Skills",
  "Languages",
  "Other",
];

export default function SkillsForm() {
  const { cvData, addSkill, removeSkill, updateProgress } = useCVData();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      level: 3,
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof skillSchema>) {
    addSkill({
      name: values.name,
      level: values.level,
      category: values.category,
    });

    form.reset({
      name: "",
      level: 3,
      category: "",
    });

    updateProgress();
  }

  const getLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Basic";
      case 3:
        return "Intermediate";
      case 4:
        return "Advanced";
      case 5:
        return "Expert";
      default:
        return "Intermediate";
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {cvData.skills.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              {/* Removed drag description */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cvData.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center space-x-2 p-3 border rounded-md"
                  >
                    {/* Removed drag handle */}
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-xs ml-2 text-muted-foreground">
                            {skill.category}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently delete this skill.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              removeSkill(skill.id);
                              updateProgress();
                            }}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Skills</CardTitle>
          <CardDescription>
            Add your technical and soft skills with proficiency levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill Name</FormLabel>
                      <FormControl>
                        <Input placeholder="React.js" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SKILL_CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Proficiency Level: {getLevelText(field.value)}
                    </FormLabel>
                    <FormControl>
                      <Slider
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                      />
                    </FormControl>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                <Plus className="h-4 w-4 mr-2" />
                Add Skill
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
