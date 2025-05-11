"use client";

import { useCV } from '@/components/providers/cv-provider';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Globe, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export const ModernTemplate = () => {
  const { cvData, selectedColor, selectedFont } = useCV();
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages } = cvData;

  const hasContactInfo = personalInfo.phone || personalInfo.email || personalInfo.website || 
                         personalInfo.address || personalInfo.linkedin || personalInfo.github;

  return (
    <div className={`cv-template modern ${selectedFont} ${selectedColor} text-[#333] a4-page`}>
      <div className="p-8 relative">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start gap-6">
            {personalInfo.profileImage && (
              <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-gray-200">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className={`text-3xl font-bold text-${selectedColor}-600`}>
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              {personalInfo.title && (
                <h2 className="text-xl text-gray-600 mt-1">{personalInfo.title}</h2>
              )}
              {hasContactInfo && (
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {personalInfo.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  )}
                  {personalInfo.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>{personalInfo.email}</span>
                    </div>
                  )}
                  {personalInfo.website && (
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <span>{personalInfo.website}</span>
                    </div>
                  )}
                  {(personalInfo.address || personalInfo.city || personalInfo.country) && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {[
                          personalInfo.address,
                          personalInfo.city,
                          personalInfo.country,
                        ]
                          .filter(Boolean)
                          .join(', ')}
                      </span>
                    </div>
                  )}
                  {personalInfo.linkedin && (
                    <div className="flex items-center gap-1">
                      <Linkedin className="h-4 w-4" />
                      <span>{personalInfo.linkedin}</span>
                    </div>
                  )}
                  {personalInfo.github && (
                    <div className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      <span>{personalInfo.github}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Summary */}
          {summary && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className={`text-lg font-semibold mb-2 pb-1 border-b-2 border-${selectedColor}-500`}>
                Professional Summary
              </h3>
              <p className="text-sm">{summary}</p>
            </motion.section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Work Experience */}
              {workExperience.length > 0 && workExperience[0].company && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    {workExperience.map((job, index) => (
                      <div key={job.id}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{job.position}</h4>
                            <div className="text-sm">
                              {job.company}
                              {job.location && `, ${job.location}`}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatDate(job.startDate)} &ndash; {job.current ? 'Present' : formatDate(job.endDate)}
                          </div>
                        </div>
                        {job.description && <p className="text-sm mt-2">{job.description}</p>}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Education */}
              {education.length > 0 && education[0].institution && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={edu.id}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{edu.degree}</h4>
                            <div className="text-sm">
                              {edu.institution}
                              {edu.location && `, ${edu.location}`}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatDate(edu.startDate)} &ndash; {formatDate(edu.endDate)}
                          </div>
                        </div>
                        {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Projects */}
              {projects.length > 0 && projects[0].title && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Projects
                  </h3>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div key={project.id}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">
                              {project.title}
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={`ml-2 text-sm text-${selectedColor}-600 hover:underline`}
                                >
                                  Link
                                </a>
                              )}
                            </h4>
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatDate(project.startDate)} &ndash; {formatDate(project.endDate)}
                          </div>
                        </div>
                        {project.description && <p className="text-sm mt-2">{project.description}</p>}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            <div className="space-y-6">
              {/* Skills */}
              {skills.length > 0 && skills[0].name && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill.id} variant="outline" className="bg-gray-100">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Certifications */}
              {certifications.length > 0 && certifications[0].name && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    {certifications.map((cert) => (
                      <li key={cert.id}>
                        <div className="font-medium">
                          {cert.name}
                          {cert.link && (
                            <a 
                              href={cert.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`ml-2 text-sm text-${selectedColor}-600 hover:underline`}
                            >
                              Verify
                            </a>
                          )}
                        </div>
                        <div className="text-sm">
                          {cert.issuer}, {formatDate(cert.date)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Languages */}
              {languages.length > 0 && languages[0].name && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className={`text-lg font-semibold mb-3 pb-1 border-b-2 border-${selectedColor}-500`}>
                    Languages
                  </h3>
                  <ul className="space-y-1">
                    {languages.map((language) => (
                      <li key={language.id} className="flex justify-between">
                        <span>{language.name}</span>
                        <span className="text-gray-600">{language.proficiency}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .a4-page {
          width: 100%;
          height: 100%;
          background: white;
          position: relative;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .inter {
          font-family: 'Inter', sans-serif;
        }

        .poppins {
          font-family: 'Poppins', sans-serif;
        }

        .roboto {
          font-family: 'Roboto', sans-serif;
        }

        .opensans {
          font-family: 'Open Sans', sans-serif;
        }

        .montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media print {
          .a4-page {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
          }
        }
      `}</style>
    </div>
  );
};