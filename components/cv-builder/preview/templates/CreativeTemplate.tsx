import { CVData } from "@/lib/types";
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, ExternalLink } from "lucide-react";

export default function CreativeTemplate({ cvData }: { cvData: CVData }) {
  const { personalInfo, workExperience, education, skills, projects } = cvData;
  
  // Group skills by category
  const groupedSkills: { [key: string]: typeof skills } = {};
  skills.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });
  
  return (
    <div className="max-w-[850px] mx-auto bg-white text-black overflow-hidden border border-gray-200 shadow-sm">
      {/* Header with Accent Bar */}
      <div className="relative bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="p-8 relative z-10">
          <h1 className="text-4xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
          <h2 className="text-xl mt-2 font-light opacity-90">{personalInfo.jobTitle || "Your Job Title"}</h2>
          
          {personalInfo.summary && (
            <div className="mt-4 max-w-2xl">
              <p className="leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.website.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '')}
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '')}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-5 text-blue-600">Work Experience</h3>
              <div className="space-y-6">
                {workExperience.map((job) => (
                  <div key={job.id} className="relative pl-6 border-l-2 border-teal-400">
                    <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-1.5"></div>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-bold text-lg">{job.position}</h4>
                        <h5 className="text-gray-600">{job.company}, {job.location}</h5>
                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {job.startDate} - {job.current ? "Present" : job.endDate}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700">{job.description}</p>
                      {job.achievements && job.achievements.length > 0 && (
                        <ul className="text-gray-700 list-disc list-inside space-y-1 pl-2">
                          {job.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-5 text-blue-600">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-teal-400">
                    <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-1.5"></div>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree} in {edu.field}</h4>
                        <h5 className="text-gray-600">{edu.institution}, {edu.location}</h5>
                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                          </span>
                        </div>
                      </div>
                      {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                      {edu.description && <p className="text-gray-700">{edu.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-5 text-blue-600">Projects</h3>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-3 p-5 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-bold text-lg">{project.name}</h4>
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {project.startDate} - {project.current ? "Present" : project.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-5 text-blue-600">Skills</h3>
              <div className="space-y-6">
                {Object.entries(groupedSkills).map(([category, skills]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="font-semibold text-gray-700 border-b border-gray-200 pb-1">{category}</h4>
                    <div className="space-y-4">
                      {skills.map((skill) => (
                        <div key={skill.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full"
                              style={{ width: `${(skill.level / 5) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}