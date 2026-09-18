export interface DownloadItem {
  id: string;
  title: string;
  category: "Admission" | "Academic" | "Examination" | "Forms" | "Syllabus" | "Bulletins";
  date: string;
  fileFormat: "PDF" | "DOCX";
  fileSize: string;
  downloadUrl: string;
  description: string;
}

export const downloadsData: DownloadItem[] = [
  {
    id: "dl-1",
    title: "AIM Institutional Information Brochure & Academic Prospectus",
    category: "Admission",
    date: "Academic Year 2025-26",
    fileFormat: "PDF",
    fileSize: "2.8 MB",
    downloadUrl: "#",
    description: "Detailed guide detailing program eligibility, fee regulations, code of conduct, campus facilities, and KBCNMU academic rules."
  },
  {
    id: "dl-2",
    title: "BCA Revised NEP 2020 Complete Syllabus & Credit Matrix",
    category: "Syllabus",
    date: "Effective 2024-25 onwards",
    fileFormat: "PDF",
    fileSize: "1.9 MB",
    downloadUrl: "#",
    description: "Full curriculum structure covering theory, laboratory practicals, internal assessments, and project guidelines for the 4-year NEP 2020 BCA degree."
  },
  {
    id: "dl-3",
    title: "BBA Curriculum & Specialization Electives Framework",
    category: "Syllabus",
    date: "Approved by KBCNMU",
    fileFormat: "PDF",
    fileSize: "1.4 MB",
    downloadUrl: "#",
    description: "Syllabus for Bachelor of Business Administration including Financial Management, Marketing, Human Resource Management, and Business Analytics."
  },
  {
    id: "dl-4",
    title: "MMS (Computer Management) Postgraduate Syllabus",
    category: "Syllabus",
    date: "University Approved",
    fileFormat: "PDF",
    fileSize: "1.6 MB",
    downloadUrl: "#",
    description: "Comprehensive 2-year Master of Management Studies syllabus with ERP, advanced database systems, and industry dissertation requirements."
  },
  {
    id: "dl-5",
    title: "Student Admission Enquiry & Application Form",
    category: "Forms",
    date: "Current Session",
    fileFormat: "PDF",
    fileSize: "450 KB",
    downloadUrl: "#",
    description: "Printable admission form for institutional physical verification and document submission at the AIM Chalisgaon office."
  },
  {
    id: "dl-6",
    title: "Required Documents Checklist for First Year Admission",
    category: "Admission",
    date: "Admissions Verification",
    fileFormat: "PDF",
    fileSize: "320 KB",
    downloadUrl: "#",
    description: "Complete list of original certificates and attested photocopies required for enrollment, scholarship claim, and eligibility verification."
  },
  {
    id: "dl-7",
    title: "Anti-Ragging Undertaking & College Discipline Guidelines",
    category: "Bulletins",
    date: "Mandatory Circular",
    fileFormat: "PDF",
    fileSize: "280 KB",
    downloadUrl: "#",
    description: "Mandatory compliance guidelines as per UGC regulations and Maharashtra Prohibition of Ragging Act."
  },
  {
    id: "dl-8",
    title: "KBCNMU University Examination Guidelines & Hall Ticket Instructions",
    category: "Examination",
    date: "Semester Protocol",
    fileFormat: "PDF",
    fileSize: "610 KB",
    downloadUrl: "#",
    description: "Instructions regarding examination seating plans, question paper patterns, credit evaluations, and grade improvement."
  }
];
