"use client";

import { useCV } from '@/components/providers/cv-provider';
import { formatDate } from '@/lib/utils';
import { Phone, Mail, Globe, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export const ProfessionalTemplate = () => {
  const { cvData, selectedColor, selectedFont } = useCV();
  const { personalInfo, summary, workExperience, education, skills, projects, certifications, languages } = cvData;

  return (
    <div className={`cv-template professional ${selectedFont} ${selectedColor} text-[#333] a4-page`}>
      <div className={`h-24 bg-${selectedColor}-700 flex items-center px-8 text-white`}>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {personalInfo.title && (
            <h2 className="text-xl opacity-90 mt-1">{personalInfo.title}</h2>
          )}
        </div>
        {personalInfo.profileImage && (
          <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-white">
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6 px-8 py-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              {personalInfo.phone && (
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.email && (
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-start gap-2">
                  <Globe className="h-4 w-4 mt-0.5" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              {(personalInfo.address || personalInfo.city || personalInfo.country) && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
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
                <div className="flex items-start gap-2">
                  <Linkedin className="h-4 w-4 mt-0.5" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.github && (
                <div className="flex items-start gap-2">
                  <Github className="h-4 w-4 mt-0.5" />
                  <span>{personalInfo.github}</span>
                </div>
              )}
            </div>
          </motion.section>

          {/* Skills */}
          {skills.length > 0 && skills[0].name && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-600">
                        {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`bg-${selectedColor}-600 h-1.5 rounded-full`} 
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
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
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Languages
              </h3>
              <div className="space-y-1">
                {languages.map((language) => (
                  <div key={language.id} className="flex justify-between text-sm">
                    <span>{language.name}</span>
                    <span className="text-gray-600">{language.proficiency}</span>
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
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
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
                    <div className="text-xs text-gray-600">
                      {cert.issuer}, {formatDate(cert.date)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          {summary && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Professional Summary
              </h3>
              <p className="text-sm">{summary}</p>
            </motion.section>
          )}

          {/* Work Experience */}
          {workExperience.length > 0 && workExperience[0].company && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Work Experience
              </h3>
              <div className="space-y-5">
                {workExperience.map((job) => (
                  <div key={job.id} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold text-base">{job.position}</h4>
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
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold text-base">{edu.degree}</h4>
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

          {/* Projects */}
          {projects.length > 0 && projects[0].title && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold text-${selectedColor}-700 pb-1 border-b border-gray-200`}>
                Projects
              </h3>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.id} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-gray-400 before:rounded-full">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold text-base">
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
        </div>
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