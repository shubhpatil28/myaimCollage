export interface Program {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  level: "Undergraduate" | "Postgraduate" | "Diploma";
  duration: string;
  affiliation: string;
  intake?: string;
  tagline: string;
  description: string;
  highlights: string[];
  eligibility: string[];
  careerOpportunities: string[];
  curriculumHighlights: {
    yearOrSemester: string;
    subjects: string[];
  }[];
  facilitiesUsed: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const programsData: Program[] = [
  {
    id: "bca",
    slug: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    level: "Undergraduate",
    duration: "3 Years / 4 Years Honours (Aligned with NEP 2020)",
    affiliation: "KBC North Maharashtra University, Jalgaon",
    tagline: "Master modern software engineering, web technologies, and computational systems.",
    description: "The Bachelor of Computer Applications (BCA) at Smt. S. M. Agrawal Institute of Management is designed to prepare students for lucrative careers in the IT and software industries. Updated as per the National Education Policy (NEP) 2020, the curriculum integrates foundational computer science principles with contemporary technologies including Python, Cloud Computing, Database Architecture, and Web Development.",
    highlights: [
      "Aligned with National Education Policy (NEP 2020) framework",
      "Hands-on programming laboratory sessions for every major subject",
      "Comprehensive exposure to Full-Stack Web Development, Java, and Python",
      "Industry-standard database management systems (MySQL, Oracle, NoSQL)",
      "Dedicated mini-projects and final semester live software capstone",
      "Participation in university research competitions (Avishkar) and hackathons"
    ],
    eligibility: [
      "Passed Higher Secondary Certificate (10+2 / HSC) examination from Maharashtra State Board or equivalent in Science, Commerce, or Arts stream with English as a subject.",
      "OR Passed 3-year Diploma Course recognized by the Maharashtra State Board of Technical Education (MSBTE) or equivalent.",
      "Admissions follow KBCNMU centralized registration and institute-level merit guidelines."
    ],
    careerOpportunities: [
      "Software Developer & Application Programmer",
      "Full-Stack Web Developer",
      "Database Administrator (DBA)",
      "System Analyst & Cloud Operations Associate",
      "IT Support Specialist & Technical Consultant",
      "Higher Studies: MCA, M.Sc. Computer Science, MMS (CM)"
    ],
    curriculumHighlights: [
      {
        yearOrSemester: "First Year (Foundation & Problem Solving)",
        subjects: [
          "Computer Fundamentals & Architecture",
          "Problem Solving through C Programming",
          "Web Design Fundamentals (HTML5, CSS3, JavaScript)",
          "Mathematical Foundations & Statistics for Computing",
          "Practical Labs in C and Web Design"
        ]
      },
      {
        yearOrSemester: "Second Year (Core Engineering & Databases)",
        subjects: [
          "Object-Oriented Programming with C++ / Core Java",
          "Data Structures and Algorithms",
          "Relational Database Management Systems (RDBMS & SQL)",
          "Software Engineering & Agile Methodologies",
          "Operating Systems & Computer Networks"
        ]
      },
      {
        yearOrSemester: "Third Year (Advanced Tech & Enterprise Dev)",
        subjects: [
          "Python Programming for Data Science",
          "Advanced Java & Enterprise Frameworks",
          "Cloud Computing & Cybersecurity Basics",
          "E-Commerce & Digital Innovations",
          "Capstone Industry Project & Technical Seminar"
        ]
      },
      {
        yearOrSemester: "Fourth Year (Honours / Research - NEP 2020 Pathway)",
        subjects: [
          "Artificial Intelligence & Machine Learning Foundations",
          "Research Methodology & Technical Paper Writing",
          "Full Semester Industry Internship / Research Project"
        ]
      }
    ],
    facilitiesUsed: [
      "High-Performance Computing Lab with High-Speed Leased Line",
      "Software Testing & Web Engineering Workstations",
      "Central Library Computing & E-Journal Station",
      "Audio-Visual Seminar Hall for Technical Presentations"
    ],
    faqs: [
      {
        question: "Is Maths mandatory at 10+2 level for BCA admission?",
        answer: "Students from Science, Commerce, and Arts streams with English are eligible as per KBC North Maharashtra University guidelines. Mathematical bridge concepts are taught in the first semester to ensure all students excel."
      },
      {
        question: "Does AIM provide practical coding laboratories?",
        answer: "Yes, AIM Chalisgaon maintains dedicated modern computer labs equipped with programming compilers, development IDEs, database servers, and continuous high-speed broadband."
      },
      {
        question: "Is this degree recognized for government exams and higher studies?",
        answer: "Yes, the BCA degree is awarded directly by Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon, recognized by the UGC and Government of Maharashtra, qualifying students for MCA, MBA, UPSC, MPSC, banking, and defense exams."
      }
    ]
  },
  {
    id: "bba",
    slug: "bba",
    name: "Bachelor of Business Administration (BBA)",
    shortName: "BBA",
    level: "Undergraduate",
    duration: "3 Years",
    affiliation: "KBC North Maharashtra University, Jalgaon",
    tagline: "Build foundational acumen in management, business analytics, and executive leadership.",
    description: "The Bachelor of Business Administration (BBA) program at AIM Chalisgaon provides a rigorous foundation in corporate management, financial strategy, modern marketing, and human resource development. The program includes minors in Business Analytics and E-Commerce, empowering students to lead with data-driven strategic clarity in today's competitive corporate landscape.",
    highlights: [
      "Specialized majors in Financial Management, Marketing, and Human Resources",
      "Integrated minor in Business Analytics & Digital Enterprise Operations",
      "Interactive pedagogy: Case study method, role playing, and business simulations",
      "Field visits to regional industries, banking institutions, and logistics centers",
      "Corporate communication and soft-skill mastery sessions"
    ],
    eligibility: [
      "Passed 10+2 (HSC) in any stream (Commerce, Science, or Arts) with English from Maharashtra State Board or any recognized central/state board.",
      "OR Any equivalent 3-year post-SSC diploma recognized by MSBTE/Government."
    ],
    careerOpportunities: [
      "Business Development Executive",
      "Financial Analyst & Banking Executive",
      "Digital Marketing & Brand Associate",
      "Human Resource Coordinator",
      "Supply Chain & Operations Supervisor",
      "Entrepreneur & Business Venture Founder",
      "Higher Studies: MBA, MMS, PGDM"
    ],
    curriculumHighlights: [
      {
        yearOrSemester: "First Year (Management Foundations)",
        subjects: [
          "Principles of Management & Organizational Behavior",
          "Business Communication & Professional Etiquette",
          "Financial Accounting & Costing Principles",
          "Micro & Macro Business Economics",
          "IT for Business Managers"
        ]
      },
      {
        yearOrSemester: "Second Year (Functional Specialization)",
        subjects: [
          "Marketing Management & Consumer Insights",
          "Corporate Human Resource Management",
          "Business Law & Regulatory Frameworks",
          "Financial Management & Capital Budgeting",
          "Introduction to Business Analytics & Spreadsheet Modeling"
        ]
      },
      {
        yearOrSemester: "Third Year (Strategic Mastery & Specialization)",
        subjects: [
          "Strategic Management & Corporate Policy",
          "Elective Major (Advanced Finance / Marketing / HR)",
          "E-Commerce & Digital Marketing Operations",
          "Entrepreneurship Development & Business Plan Formulation",
          "Comprehensive Project Work & Viva Voce"
        ]
      }
    ],
    facilitiesUsed: [
      "Smart Interactive Seminar Hall for Case Presentations",
      "Management Reference Library with Harvard & Indian Case Studies",
      "Language & Communication Lab",
      "Placement Cell Training Center"
    ],
    faqs: [
      {
        question: "Can Arts or Science students join BBA at AIM?",
        answer: "Yes, candidates from any 10+2 academic stream (Commerce, Science, Arts) are eligible to enroll in BBA at AIM Chalisgaon."
      },
      {
        question: "What specializations are available in the BBA program?",
        answer: "Students can choose electives in Financial Management, Marketing Management, and Human Resource Management, complemented with contemporary exposure to Business Analytics."
      }
    ]
  },
  {
    id: "mms",
    slug: "mms",
    name: "Master of Management Studies (MMS - Computer Management)",
    shortName: "MMS (CM)",
    level: "Postgraduate",
    duration: "2 Years",
    affiliation: "KBC North Maharashtra University, Jalgaon",
    tagline: "Bridge the strategic intersection between executive management and advanced computer technologies.",
    description: "The Master of Management Studies (MMS) specializing in Computer Management is an advanced postgraduate degree crafted for graduates aiming to operate at the junction of technology implementation and enterprise administration. The program equips future leaders with decision-making power in software project management, enterprise resource planning (ERP), data analytics, and organizational strategy.",
    highlights: [
      "Rigorous blend of executive management principles and cutting-edge IT systems",
      "Focus on Enterprise Resource Planning (ERP), Data Analytics, and Systems Architecture",
      "In-depth research projects and corporate problem-solving workshops",
      "Preparation for leadership roles in software houses, consulting firms, and public sectors"
    ],
    eligibility: [
      "Bachelor's Degree in any discipline (BCA, BBA, B.Sc, B.Com, B.A., B.E./B.Tech) from a recognized University with minimum qualifying marks as prescribed by KBCNMU / Govt. of Maharashtra.",
      "Admissions are governed as per the norms of Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon."
    ],
    careerOpportunities: [
      "IT Project Manager & Delivery Lead",
      "ERP / Enterprise Systems Consultant",
      "Business Intelligence & Data Analyst",
      "Information Systems Auditor",
      "Operations & Systems Director",
      "Academician & Doctoral Researcher (Ph.D. pathway)"
    ],
    curriculumHighlights: [
      {
        yearOrSemester: "Semester I & II (Core Enterprise Technologies)",
        subjects: [
          "Management Principles & Organizational Systems",
          "Enterprise Database Architecture & Management",
          "Advanced Software Engineering & Systems Analysis",
          "Corporate Financial Management & Accounting Systems",
          "Quantitative Techniques & Decision Sciences"
        ]
      },
      {
        yearOrSemester: "Semester III & IV (Strategic IT & Capstone)",
        subjects: [
          "Enterprise Resource Planning (ERP) Systems",
          "Strategic IT Management & Information Security",
          "Business Intelligence & Data Warehousing",
          "Knowledge Management & Technology Innovation",
          "Master's Dissertation / Industry Internship Project"
        ]
      }
    ],
    facilitiesUsed: [
      "Advanced Computer Laboratory with Specialized Database Software",
      "Central Research Library & UGC E-Resource Access",
      "High-Speed Broadband Internet Access",
      "Dedicated Training & Placement Cell"
    ],
    faqs: [
      {
        question: "Who should pursue MMS in Computer Management?",
        answer: "Graduates in computer applications, science, commerce, or engineering who want to enter corporate management and IT consulting roles with leadership capabilities."
      },
      {
        question: "Does AIM assist in postgraduate project placements?",
        answer: "Yes, AIM's Training and Placement cell guides students with live industry project allocations, resume development, and campus recruitment opportunities."
      }
    ]
  },
  {
    id: "dcm",
    slug: "dcm",
    name: "Diploma in Computer Management (DCM)",
    shortName: "DCM",
    level: "Diploma",
    duration: "1 Year",
    affiliation: "KBC North Maharashtra University, Jalgaon",
    tagline: "Accelerated practical immersion into commercial computing and workplace office technologies.",
    description: "A specialized one-year professional diploma program structured to equip students and working professionals with job-ready technical computer competence, accounting software literacy, and office automation skills.",
    highlights: [
      "100% focused on practical, applied computer literacy and business software",
      "Short duration of 1 year ideal for rapid employment readiness",
      "Comprehensive training in Tally, database entry, MS Office Suite, and basic web tools"
    ],
    eligibility: [
      "Passed Higher Secondary Certificate (10+2 / HSC) or equivalent from a recognized board, OR graduation."
    ],
    careerOpportunities: [
      "Computer Operator & Data Entry Executive",
      "Office Automation & IT Assistant",
      "Commercial Accounts Assistant"
    ],
    curriculumHighlights: [
      {
        yearOrSemester: "Annual Diploma Structure",
        subjects: [
          "Information Technology & Operating Systems",
          "Office Productivity Tools (Word, Excel, PowerPoint, Access)",
          "Database Management Basics & Commercial Programming",
          "Financial Accounting Systems with Tally",
          "Practical Computer Laboratory Examinations"
        ]
      }
    ],
    facilitiesUsed: [
      "Computer Laboratory Workstations",
      "College Reading Hall and Library"
    ],
    faqs: [
      {
        question: "Can I enroll in DCM alongside regular degree studies or a job?",
        answer: "The 1-year diploma is designed to accommodate foundational skill building and provides university-certified credentials upon completion."
      }
    ]
  },
  {
    id: "dbm",
    slug: "dbm",
    name: "Diploma in Business Management (DBM)",
    shortName: "DBM",
    level: "Diploma",
    duration: "1 Year",
    affiliation: "KBC North Maharashtra University, Jalgaon",
    tagline: "Essential management principles for commercial enterprises and family businesses.",
    description: "A focused one-year diploma in business management intended for students, entrepreneurs, and aspiring managers seeking structured insights into marketing, accounting, administration, and organizational workflows.",
    highlights: [
      "Practical orientation towards small and medium enterprise (SME) management",
      "Concise 1-year curriculum covering sales, administration, and financial control",
      "Ideal credential for regional entrepreneurs and local business owners"
    ],
    eligibility: [
      "Passed Higher Secondary Certificate (10+2 / HSC) in any stream from a recognized board."
    ],
    careerOpportunities: [
      "Assistant Store / Branch Manager",
      "Sales Representative & Retail Supervisor",
      "Family Enterprise & Small Business Owner"
    ],
    curriculumHighlights: [
      {
        yearOrSemester: "Annual Diploma Structure",
        subjects: [
          "Principles of Modern Management",
          "Marketing & Sales Operations",
          "Bookkeeping & Financial Administration",
          "Business Communication & Customer Relations",
          "Project Report & Viva"
        ]
      }
    ],
    facilitiesUsed: [
      "Seminar Hall & Audio-Visual Classrooms",
      "Management Library"
    ],
    faqs: [
      {
        question: "What is the primary benefit of DBM?",
        answer: "It provides a swift, university-recognized certification in core management functions without requiring a 3-year commitment, ideal for immediate commercial application."
      }
    ]
  }
];
