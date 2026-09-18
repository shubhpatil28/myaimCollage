export interface Notice {
  id: string;
  title: string;
  date: string;
  category: "Admissions" | "Examination" | "Academic" | "Events" | "General";
  description: string;
  fileUrl?: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const noticesData: Notice[] = [
  {
    id: "not-01",
    title: "Admissions Open for Academic Year 2025-26: BCA, BBA & MMS Programs",
    date: "June 2025",
    category: "Admissions",
    description: "Online and offline enquiry registrations are now active for First Year BCA (under NEP 2020 4-year framework), BBA, and MMS courses. Eligible HSC / 10+2 and graduate candidates can submit enquiries or visit the administrative office.",
    isUrgent: true,
    isNew: true
  },
  {
    id: "not-02",
    title: "KBC North Maharashtra University Semester Examination Form Filling Schedule",
    date: "May 2025",
    category: "Examination",
    description: "Students appearing for upcoming university end-semester theory and practical examinations must submit their exam examination forms along with fee receipts at the college office counter.",
    isNew: true
  },
  {
    id: "not-03",
    title: "Implementation of National Education Policy (NEP 2020) Structure for BCA & BBA",
    date: "April 2025",
    category: "Academic",
    description: "Information circular regarding the revised NEP 2020 credit framework, multiple exit-entry options, and minor specializations in Business Analytics as mandated by KBCNMU Jalgaon.",
    isNew: false
  },
  {
    id: "not-04",
    title: "Government Scholarship & Free-ship Application Notice (MahaDBT Portal)",
    date: "March 2025",
    category: "General",
    description: "Eligible students belonging to SC, ST, VJNT, OBC, SBC, and EBC categories must register and renew their scholarship applications on the official MahaDBT portal before the university cutoff deadline.",
    isNew: false
  },
  {
    id: "not-05",
    title: "Annual Technical Project Presentation & University Avishkar Orientation",
    date: "February 2025",
    category: "Events",
    description: "Orientation session organized by the Research Cell for students presenting software solutions and management research papers at the regional Avishkar Research Convention.",
    isNew: false
  },
  {
    id: "not-06",
    title: "Campus Placement Drive & Resume Crafting Workshop by T&P Cell",
    date: "January 2025",
    category: "Events",
    description: "A two-day intensive workshop on technical interview techniques, group discussions, and aptitude tests for final year BCA and MMS graduating students.",
    isNew: false
  }
];
