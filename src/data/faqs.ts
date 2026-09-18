export interface FAQ {
  question: string;
  answer: string;
  category: "Admissions" | "Academics" | "Scholarships" | "Facilities" | "Affiliation";
}

export const faqsData: FAQ[] = [
  {
    question: "Which university is AIM Chalisgaon affiliated with?",
    answer: "Smt. S. M. Agrawal Institute of Management is permanently affiliated to Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon (KBCNMU). The institute is recognized by the Government of Maharashtra, Directorate of Technical Education (DTE), and University Grants Commission (UGC) under Section 2(f) & 12(B).",
    category: "Affiliation"
  },
  {
    question: "What undergraduate and postgraduate degrees are offered at AIM?",
    answer: "AIM offers the Bachelor of Computer Applications (BCA) — updated as a 4-Year Honours degree under NEP 2020, Bachelor of Business Administration (BBA) with Business Analytics, Master of Management Studies (MMS in Computer Management), Diploma in Computer Management (DCM), and Diploma in Business Management (DBM).",
    category: "Academics"
  },
  {
    question: "What is the eligibility criteria for BCA admission?",
    answer: "Candidates must have passed 10+2 (HSC) in Science, Commerce, or Arts from Maharashtra State Board or any recognized equivalent board with English as a compulsory subject, OR a 3-year MSBTE recognized technical diploma.",
    category: "Admissions"
  },
  {
    question: "Are government scholarships applicable for students studying at AIM?",
    answer: "Yes, eligible candidates from reserved categories (SC, ST, VJNT, OBC, SBC) and economically weaker sections (EBC / SEBC) can avail Government of Maharashtra scholarship benefits through the official MahaDBT scholarship portal in accordance with state social welfare norms.",
    category: "Scholarships"
  },
  {
    question: "Where is the AIM campus located in Chalisgaon?",
    answer: "The institute is conveniently situated on Ghat Road, Next to Market Yard, near Aurangabad Road (and Dhule Road Campus link), Chalisgaon, Dist. Jalgaon - 424101. It is easily accessible by public and private transport from all areas in and around Chalisgaon.",
    category: "Facilities"
  },
  {
    question: "What documents are required during the admission process?",
    answer: "Key documents include: 10th (SSC) Marksheet & Certificate, 12th (HSC) Marksheet, College Leaving / Transfer Certificate (T.C.), Caste Certificate & Caste Validity (for reserved categories), Non-Creamy Layer Certificate (where applicable), Income Certificate, Domicile/Nationality Certificate, and recent passport-sized photographs.",
    category: "Admissions"
  },
  {
    question: "How does AIM support students with placements and training?",
    answer: "The college maintains an active Training & Placement Cell that conducts regular technical workshops, soft skills training, mock interviews, programming hackathons, and industrial field visits to prepare students for both campus placements and off-campus recruitment drives.",
    category: "Facilities"
  }
];
