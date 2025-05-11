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
import { Plus, Trash2 } from "lucide-react";

const workExperienceSchema = z.object({
  company: z.string().min(1, { message: "Company name is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters" }),
  achievements: z.array(z.string()).optional(),
});

export default function WorkExperienceForm() {
  const {
    cvData,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
    updateProgress,
  } = useCVData();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof workExperienceSchema>>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      achievements: [],
    },
  });

  function onSubmit(values: z.infer<typeof workExperienceSchema>) {
    addWorkExperience({
      company: values.company,
      position: values.position,
      location: values.location,
      startDate: values.startDate,
      endDate: values.current ? "" : values.endDate || "",
      current: values.current,
      description: values.description,
      achievements: values.achievements || [],
    });

    form.reset({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      achievements: [],
    });

    updateProgress();
  }

  const handleAddAchievement = () => {
    const achievements = form.getValues().achievements || [];
    form.setValue("achievements", [...achievements, ""]);
  };

  const handleRemoveAchievement = (index: number) => {
    const achievements = form.getValues().achievements || [];
    form.setValue(
      "achievements",
      achievements.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {cvData.workExperience.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              {/* Removed drag description */}
            </CardHeader>
            <CardContent>
              <Accordion
                type="single"
                collapsible
                value={expandedId || undefined}
                onValueChange={(value) => setExpandedId(value)}
              >
                {cvData.workExperience.map((experience) => (
                  <div key={experience.id} className="mb-2">
                    <AccordionItem
                      value={experience.id}
                      className="border rounded-md"
                    >
                      <div className="flex items-center">
                        {/* Removed drag handle */}
                        <AccordionTrigger className="flex-grow hover:no-underline px-4 py-2">
                          <div className="flex-grow text-left">
                            <div className="flex justify-between">
                              <div>
                                <span className="font-medium">
                                  {experience.position}
                                </span>
                                <span className="text-muted-foreground">
                                  {" "}
                                  at{" "}
                                </span>
                                <span className="font-medium">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="text-sm text-muted-foreground hidden md:block">
                                {experience.startDate} -{" "}
                                {experience.current
                                  ? "Present"
                                  : experience.endDate}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                      </div>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="text-sm font-medium">
                              Company
                            </label>
                            <Input
                              value={experience.company}
                              onChange={(e) =>
                                updateWorkExperience(experience.id, {
                                  company: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              Position
                            </label>
                            <Input
                              value={experience.position}
                              onChange={(e) =>
                                updateWorkExperience(experience.id, {
                                  position: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="text-sm font-medium">
                              Location
                            </label>
                            <Input
                              value={experience.location}
                              onChange={(e) =>
                                updateWorkExperience(experience.id, {
                                  location: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="text-sm font-medium">
                                  Start Date
                                </label>
                                <Input
                                  type="date"
                                  value={experience.startDate}
                                  onChange={(e) =>
                                    updateWorkExperience(experience.id, {
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
                                  value={experience.endDate}
                                  disabled={experience.current}
                                  onChange={(e) =>
                                    updateWorkExperience(experience.id, {
                                      endDate: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Checkbox
                                id={`current-${experience.id}`}
                                checked={experience.current}
                                onCheckedChange={(checked) =>
                                  updateWorkExperience(experience.id, {
                                    current: Boolean(checked),
                                  })
                                }
                              />
                              <label
                                htmlFor={`current-${experience.id}`}
                                className="text-sm font-medium"
                              >
                                I currently work here
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="text-sm font-medium">
                            Description
                          </label>
                          <Textarea
                            value={experience.description}
                            onChange={(e) =>
                              updateWorkExperience(experience.id, {
                                description: e.target.value,
                              })
                            }
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="flex justify-end">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remove
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete this work
                                  experience.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => {
                                    removeWorkExperience(experience.id);
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
                  </div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ) : null}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Work Experience</CardTitle>
          <CardDescription>
            Add details about your previous employment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Google, Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Senior Software Engineer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Mountain View, CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div>
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

                  <div className="flex items-center space-x-2 mt-2">
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
                            <FormLabel>I currently work here</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your responsibilities and accomplishments"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your key responsibilities, projects, and
                      achievements in this role.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="achievements"
                render={() => (
                  <FormItem>
                    <FormLabel>Key Achievements</FormLabel>
                    <FormDescription>
                      List specific accomplishments, metrics, or awards
                      (optional)
                    </FormDescription>
                    <div className="space-y-2">
                      {form.watch("achievements")?.map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            placeholder={`Achievement ${index + 1}`}
                            value={form.watch(`achievements.${index}`)}
                            onChange={(e) => {
                              const achievements = [
                                ...(form.getValues().achievements || []),
                              ];
                              achievements[index] = e.target.value;
                              form.setValue("achievements", achievements);
                            }}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => handleRemoveAchievement(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleAddAchievement}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Achievement
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                <Plus className="h-4 w-4 mr-2" />
                Add Work Experience
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
