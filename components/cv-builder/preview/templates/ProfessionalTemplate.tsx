import { CVData } from "@/lib/types";
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, ExternalLink } from "lucide-react";

export default function ProfessionalTemplate({ cvData }: { cvData: CVData }) {
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
    <div className="max-w-[850px] mx-auto bg-white text-black border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
            <h2 className="text-xl text-gray-600 mt-1">{personalInfo.jobTitle || "Your Job Title"}</h2>
          </div>
          <div className="flex flex-col items-start gap-1 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-600" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.website.replace(/^https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-gray-600" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '')}
                </a>
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-gray-600" />
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '')}
                </a>
              </div>
            )}
          </div>
        </div>
        
        {personalInfo.summary && (
          <div className="mt-4">
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 p-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold pb-2 border-b border-gray-200 mb-4">Work Experience</h3>
              <div className="space-y-5">
                {workExperience.map((job) => (
                  <div key={job.id} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-bold">{job.position}</h4>
                        <h5 className="text-gray-600">{job.company}, {job.location}</h5>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                          {job.startDate} - {job.current ? "Present" : job.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{job.description}</p>
                    {job.achievements && job.achievements.length > 0 && (
                      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                        {job.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-bold pb-2 border-b border-gray-200 mb-4">Education</h3>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-bold">{edu.degree} in {edu.field}</h4>
                        <h5 className="text-gray-600">{edu.institution}, {edu.location}</h5>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                          {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                        </span>
                      </div>
                    </div>
                    {edu.gpa && <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>}
                    {edu.description && <p className="text-sm text-gray-700">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h3 className="text-lg font-bold pb-2 border-b border-gray-200 mb-4">Projects</h3>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <h4 className="font-bold">{project.name}</h4>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                          {project.startDate} - {project.current ? "Present" : project.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
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
        <div className="space-y-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h3 className="text-lg font-bold pb-2 border-b border-gray-200 mb-4">Skills</h3>
              <div className="space-y-4">
                {Object.entries(groupedSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-600 mb-2">{category}</h4>
                    <div className="space-y-2">
                      {skills.map((skill) => (
                        <div key={skill.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{skill.name}</span>
                            <span className="text-gray-600">{getLevelText(skill.level)}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full"
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

function getLevelText(level: number) {
  switch (level) {
    case 1: return "Beginner";
    case 2: return "Basic";
    case 3: return "Intermediate";
    case 4: return "Advanced";
    case 5: return "Expert";
    default: return "Intermediate";
  }
}