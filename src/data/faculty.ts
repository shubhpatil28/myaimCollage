export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: "Computer Applications" | "Management Studies" | "Academic Administration";
  qualification: string;
  experience?: string;
  specialization: string;
  email?: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Rahul Kulkarni",
    designation: "Director & Professor",
    department: "Management Studies",
    qualification: "Ph.D., M.M.S., B.E.",
    experience: "20+ Years Academic & Administrative Experience",
    specialization: "Strategic IT Management, Enterprise Systems, Systems Architecture",
    email: "aim.director@gmail.com"
  },
  {
    id: "fac-2",
    name: "Prof. Dr. Shrikant S. Bhandari",
    designation: "Professor & Senior Academician",
    department: "Management Studies",
    qualification: "Ph.D., M.Com., M.B.A.",
    experience: "22+ Years Teaching & Research Experience",
    specialization: "Financial Accounting, Corporate Law, Business Economics",
    email: "aim.office@rediffmail.com"
  },
  {
    id: "fac-3",
    name: "Prof. Piyush S. Agrawal",
    designation: "Associate Professor & HOD (Computer Applications)",
    department: "Computer Applications",
    qualification: "M.C.A., M.B.A., SET Qualified",
    experience: "18+ Years IT Education Experience",
    specialization: "Object-Oriented Programming, Python, Database Systems, Web Engineering",
    email: "aim.office@rediffmail.com"
  },
  {
    id: "fac-4",
    name: "Prof. A. B. Deogirkar",
    designation: "Senior Faculty Advisor",
    department: "Management Studies",
    qualification: "M.Com., M.Phil.",
    experience: "25+ Years Experience",
    specialization: "Business Administration, Organizational Behavior, Marketing Management"
  },
  {
    id: "fac-5",
    name: "Prof. M. V. Bildikar",
    designation: "Founding Academic Consultant",
    department: "Computer Applications",
    qualification: "M.Sc. (Comp. Sci.), D.C.M.",
    experience: "Founding Academician",
    specialization: "Foundations of Computing, Software Methodologies, Algorithmic Analysis"
  },
  {
    id: "fac-6",
    name: "Prof. S. R. Patil",
    designation: "Assistant Professor",
    department: "Computer Applications",
    qualification: "M.C.A., B.Sc. (Comp. Sci.)",
    experience: "10+ Years Experience",
    specialization: "Web Technologies, Java Programming, Data Structures & Operating Systems"
  },
  {
    id: "fac-7",
    name: "Prof. N. K. Sharma",
    designation: "Assistant Professor",
    department: "Management Studies",
    qualification: "M.B.A. (Finance), B.Com.",
    experience: "8+ Years Experience",
    specialization: "Financial Management, Banking & Insurance, Business Analytics"
  },
  {
    id: "fac-8",
    name: "Prof. P. V. Deshmukh",
    designation: "Assistant Professor",
    department: "Computer Applications",
    qualification: "M.Sc. (Information Technology)",
    experience: "7+ Years Experience",
    specialization: "Database Management (SQL/NoSQL), Cloud Computing, Computer Networks"
  },
  {
    id: "fac-9",
    name: "Prof. V. M. Mahajan",
    designation: "Assistant Professor",
    department: "Management Studies",
    qualification: "M.B.A. (HR & Marketing)",
    experience: "9+ Years Experience",
    specialization: "Human Resource Management, Business Communication, Consumer Behavior"
  }
];
