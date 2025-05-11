"use client";

import { useCV } from '@/components/providers/cv-provider';
import { formatDate } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export const MinimalTemplate = () => {
  const { cvData, selectedColor, selectedFont } = useCV();
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages } = cvData;

  return (
    <div className={`cv-template minimal ${selectedFont} ${selectedColor} text-[#333] a4-page`}>
      <div className="p-10 relative">
        {/* Header - Minimal style */}
        <header className="mb-10">
          {(personalInfo.firstName || personalInfo.lastName) && (
            <h1 className={`text-3xl font-normal text-${selectedColor}-800 mb-1`}>
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
          )}
          {personalInfo.title && (
            <h2 className="text-lg text-gray-600 mb-4">{personalInfo.title}</h2>
          )}
          
          <div className="flex flex-wrap text-sm space-x-5">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
            {(personalInfo.city && personalInfo.country) && (
              <span>{personalInfo.city}, {personalInfo.country}</span>
            )}
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && <span>{personalInfo.github}</span>}
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Summary */}
          {summary && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm leading-relaxed">{summary}</p>
            </motion.section>
          )}

          {/* Work Experience */}
          {workExperience.length > 0 && workExperience[0].company && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                Experience
              </h3>
              <div className="space-y-6">
                {workExperience.map((job) => (
                  <div key={job.id}>
                    <div className="flex flex-wrap justify-between mb-1">
                      <h4 className="font-medium text-base">{job.position}</h4>
                      <span className="text-sm text-gray-600">
                        {formatDate(job.startDate)} &ndash; {job.current ? 'Present' : formatDate(job.endDate)}
                      </span>
                    </div>
                    <div className="text-sm mb-2">
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
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-wrap justify-between mb-1">
                      <h4 className="font-medium text-base">{edu.degree}</h4>
                      <span className="text-sm text-gray-600">
                        {formatDate(edu.startDate)} &ndash; {formatDate(edu.endDate)}
                      </span>
                    </div>
                    <div className="text-sm mb-2">
                      {edu.institution}
                      {edu.location && `, ${edu.location}`}
                    </div>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills */}
          {skills.length > 0 && skills[0].name && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                Skills
              </h3>
              <div className="flex flex-wrap gap-x-12 gap-y-1">
                {skills.map((skill) => (
                  <div key={skill.id} className="text-sm">
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                Projects
              </h3>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex flex-wrap justify-between mb-1">
                      <h4 className="font-medium text-base">
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

          <div className="grid grid-cols-2 gap-8">
            {/* Certifications */}
            {certifications.length > 0 && certifications[0].name && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <div className="text-sm font-medium">
                        {cert.name}
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`ml-2 text-xs text-${selectedColor}-600 hover:underline`}
                          >
                            Verify
                          </a>
                        )}
                      </div>
                      <div className="text-xs">
                        {cert.issuer}, {formatDate(cert.date)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Languages */}
            {languages.length > 0 && languages[0].name && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <h3 className={`text-base uppercase tracking-wider mb-4 text-${selectedColor}-800 font-medium`}>
                  Languages
                </h3>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <div key={language.id} className="flex justify-between">
                      <span className="text-sm">{language.name}</span>
                      <span className="text-sm text-gray-600">{language.proficiency}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
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