"use client";

import { useCV } from '@/components/providers/cv-provider';
import { formatDate } from '@/lib/utils';
import { Phone, Mail, Globe, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export const ClassicTemplate = () => {
  const { cvData, selectedColor, selectedFont } = useCV();
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages } = cvData;

  const hasContactInfo = personalInfo.phone || personalInfo.email || personalInfo.website || 
                         personalInfo.address || personalInfo.linkedin || personalInfo.github;

  return (
    <div className={`cv-template classic ${selectedFont} ${selectedColor} text-[#333] a4-page`}>
      <div className="p-8 relative">
        {/* Header - Classic centered style */}
        <header className="text-center mb-8 pb-4 border-b-2 border-gray-300">
          <h1 className={`text-4xl font-bold text-${selectedColor}-700 mb-2`}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {personalInfo.title && (
            <h2 className="text-xl text-gray-600 mb-3">{personalInfo.title}</h2>
          )}
          {hasContactInfo && (
            <div className="flex flex-wrap justify-center gap-4 text-sm">
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
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Summary */}
          {summary && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                Professional Summary
              </h3>
              <div className="border-t border-gray-300 pt-2">
                <p className="text-sm">{summary}</p>
              </div>
            </motion.section>
          )}

          {/* Work Experience */}
          {workExperience.length > 0 && workExperience[0].company && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                Work Experience
              </h3>
              <div className="border-t border-gray-300 pt-2 space-y-4">
                {workExperience.map((job) => (
                  <div key={job.id} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">{job.position}</h4>
                      <span className="text-sm text-gray-600">
                        {formatDate(job.startDate)} &ndash; {job.current ? 'Present' : formatDate(job.endDate)}
                      </span>
                    </div>
                    <div className="text-sm font-medium mb-1">
                      {job.company}
                      {job.location && `, ${job.location}`}
                    </div>
                    {job.description && <p className="text-sm">{job.description}</p>}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education */}
          {education.length > 0 && education[0].institution && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                Education
              </h3>
              <div className="border-t border-gray-300 pt-2 space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-gray-600">
                        {formatDate(edu.startDate)} &ndash; {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <div className="text-sm font-medium mb-1">
                      {edu.institution}
                      {edu.location && `, ${edu.location}`}
                    </div>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          <div className="grid grid-cols-2 gap-6">
            {/* Skills */}
            {skills.length > 0 && skills[0].name && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                  Skills
                </h3>
                <div className="border-t border-gray-300 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {skills.map((skill) => (
                      <li key={skill.id}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )}

            {/* Languages */}
            {languages.length > 0 && languages[0].name && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                  Languages
                </h3>
                <div className="border-t border-gray-300 pt-2">
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {languages.map((language) => (
                      <li key={language.id}>
                        {language.name} - {language.proficiency}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )}
          </div>

          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                Projects
              </h3>
              <div className="border-t border-gray-300 pt-2 space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">
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
                      <span className="text-sm text-gray-600">
                        {formatDate(project.startDate)} &ndash; {formatDate(project.endDate)}
                      </span>
                    </div>
                    {project.description && <p className="text-sm">{project.description}</p>}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && certifications[0].name && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className={`text-lg font-bold uppercase tracking-wider mb-2 text-${selectedColor}-700`}>
                Certifications
              </h3>
              <div className="border-t border-gray-300 pt-2 space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="mb-2">
                    <div className="flex justify-between">
                      <h4 className="font-medium">
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
                      </h4>
                      <span className="text-sm text-gray-600">{formatDate(cert.date)}</span>
                    </div>
                    <div className="text-sm">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
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