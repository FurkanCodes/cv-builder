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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useCVData } from "@/hooks/use-cv-data";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Plus, Trash2, MoveUp, MoveDown } from "lucide-react";

const educationSchema = z.object({
  institution: z.string().min(1, { message: "Institution name is required" }),
  degree: z.string().min(1, { message: "Degree is required" }),
  field: z.string().min(1, { message: "Field of study is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
  gpa: z.string().optional(),
});

export default function EducationForm() {
  const {
    cvData,
    addEducation,
    updateEducation,
    removeEducation,
    reorderSection,
    updateProgress,
  } = useCVData();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      gpa: "",
    },
  });

  function onSubmit(values: z.infer<typeof educationSchema>) {
    addEducation({
      institution: values.institution,
      degree: values.degree,
      field: values.field,
      location: values.location,
      startDate: values.startDate,
      endDate: values.current ? "" : values.endDate || "",
      current: values.current,
      description: values.description,
      gpa: values.gpa,
    });

    form.reset({
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      gpa: "",
    });

    updateProgress();
  }

  const moveEducationUp = (index: number) => {
    if (index > 0) {
      reorderSection("education", index, index - 1);
    }
  };

  const moveEducationDown = (index: number) => {
    if (index < cvData.education.length - 1) {
      reorderSection("education", index, index + 1);
    }
  };

  return (
    <div className="space-y-6">
      {cvData.education.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>Manage your education entries</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              value={expandedId || undefined}
              onValueChange={(value) => setExpandedId(value)}
            >
              {cvData.education.map((education, index) => (
                <AccordionItem
                  key={education.id}
                  value={education.id}
                  className="border rounded-md mb-2"
                >
                  <div className="flex items-center">
                    <AccordionTrigger className="flex-grow hover:no-underline px-4 py-2">
                      <div className="flex-grow text-left">
                        <div className="flex justify-between">
                          <div>
                            <span className="font-medium">
                              {education.degree}
                            </span>
                            <span className="text-muted-foreground"> in </span>
                            <span className="font-medium">
                              {education.field}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground hidden md:block">
                            {education.institution}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                  </div>
                  <AccordionContent className="px-6 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium">
                          Institution
                        </label>
                        <Input
                          value={education.institution}
                          onChange={(e) =>
                            updateEducation(education.id, {
                              institution: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Location</label>
                        <Input
                          value={education.location}
                          onChange={(e) =>
                            updateEducation(education.id, {
                              location: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-sm font-medium">Degree</label>
                        <Input
                          value={education.degree}
                          onChange={(e) =>
                            updateEducation(education.id, {
                              degree: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Field of Study
                        </label>
                        <Input
                          value={education.field}
                          onChange={(e) =>
                            updateEducation(education.id, {
                              field: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-sm font-medium">
                              Start Date
                            </label>
                            <Input
                              type="date"
                              value={education.startDate}
                              onChange={(e) =>
                                updateEducation(education.id, {
                                  startDate: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              End Date
                            </label>
                            <Input
                              type="date"
                              value={education.endDate}
                              disabled={education.current}
                              onChange={(e) =>
                                updateEducation(education.id, {
                                  endDate: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id={`current-${education.id}`}
                            checked={education.current}
                            onCheckedChange={(checked) =>
                              updateEducation(education.id, {
                                current: Boolean(checked),
                              })
                            }
                          />
                          <label
                            htmlFor={`current-${education.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I currently study here
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          GPA (optional)
                        </label>
                        <Input
                          value={education.gpa || ""}
                          onChange={(e) =>
                            updateEducation(education.id, {
                              gpa: e.target.value,
                            })
                          }
                          placeholder="e.g., 3.8/4.0"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="text-sm font-medium">
                        Description (optional)
                      </label>
                      <Textarea
                        value={education.description || ""}
                        onChange={(e) =>
                          updateEducation(education.id, {
                            description: e.target.value,
                          })
                        }
                        placeholder="Relevant coursework, honors, activities..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => moveEducationUp(index)}
                          disabled={index === 0}
                        >
                          <MoveUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => moveEducationDown(index)}
                          disabled={index === cvData.education.length - 1}
                        >
                          <MoveDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete this education entry.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => {
                                removeEducation(education.id);
                                updateProgress();
                              }}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Add Education</CardTitle>
          <CardDescription>
            Add details about your educational background
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution</FormLabel>
                      <FormControl>
                        <Input placeholder="Harvard University" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Cambridge, MA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree</FormLabel>
                      <FormControl>
                        <Input placeholder="Bachelor of Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field of Study</FormLabel>
                      <FormControl>
                        <Input placeholder="Computer Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              disabled={form.watch("current")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormField
                      control={form.control}
                      name="current"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>I currently study here</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3.8/4.0" {...field} />
                      </FormControl>
                      <FormDescription>
                        Include your GPA if it enhances your application
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Relevant coursework, honors, activities..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include relevant coursework, academic achievements,
                      honors, or extracurricular activities.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                <Plus className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
