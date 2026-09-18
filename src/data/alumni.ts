export interface AlumniProfile {
  id: string;
  name: string;
  degree: string;
  graduationYear: string;
  currentRole: string;
  organization: string;
  testimonialExcerpt: string;
}

export const alumniData: AlumniProfile[] = [
  {
    id: "alm-1",
    name: "Sachin Patil",
    degree: "BCA (Bachelor of Computer Applications)",
    graduationYear: "Alumnus",
    currentRole: "Senior Software Engineer",
    organization: "Leading IT Solutions Enterprise",
    testimonialExcerpt: "The rigorous programming lab sessions and personalized faculty guidance at AIM laid the bedrock for my software development career."
  },
  {
    id: "alm-2",
    name: "Pooja Agrawal",
    degree: "BBA (Bachelor of Business Administration)",
    graduationYear: "Alumna",
    currentRole: "Financial Analyst",
    organization: "Corporate Banking & Financial Services",
    testimonialExcerpt: "AIM gave me practical understanding of accounting, finance, and corporate communication that helped me clear interviews confidently."
  },
  {
    id: "alm-3",
    name: "Gaurav Sonawane",
    degree: "MMS (Computer Management)",
    graduationYear: "Alumnus",
    currentRole: "IT Systems Consultant",
    organization: "Enterprise ERP & Cloud Advisory",
    testimonialExcerpt: "The MMS program bridged technical system design with executive business administration. Grateful to the teachers and leadership at AIM."
  }
];
