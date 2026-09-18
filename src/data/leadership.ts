export interface Leader {
  id: string;
  name: string;
  role: string;
  category: "Board of Trustees" | "Executive Academic Leadership" | "Founding Leadership";
  qualification?: string;
  message?: {
    introduction: string;
    vision: string;
    mainBody: string;
    closing: string;
  };
  highlightQuote?: string;
}

export const leadershipData: Leader[] = [
  {
    id: "chairman",
    name: "Sh. Narayanbhau Agrawal",
    role: "Hon'ble Chairman",
    category: "Board of Trustees",
    highlightQuote: "Our mission has always been to bring world-class computer and management education to the doorstep of Chalisgaon's ambitious youth.",
    message: {
      introduction: "It gives me immense pride to welcome you to Smt. S. M. Agrawal Institute of Management (AIM), an institution founded with the sacred dream of empowering our regional youth with quality higher education in computer technology and business administration.",
      vision: "When Smt. Sitabai Mangilal Agrawal Charitable Trust established this institute in 2001, our aspiration was clear: talented students from Chalisgaon and surrounding rural areas should not have to leave their homes or sacrifice their aspirations due to lack of local modern educational infrastructure. Today, AIM stands tall as a beacon of academic credibility, student mentorship, and technological training.",
      mainBody: "Over the last two decades, our institute has continually updated its classrooms, computerized laboratories, and library resources to stay at par with university standards and industry expectations. Through our affiliation with Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon, we deliver recognized degrees that open doors to multinational corporations, research institutions, and entrepreneurial ventures.",
      closing: "I extend my warmest blessings to our dedicated faculty, staff, alumni, and especially our incoming students. May your journey at AIM be filled with curiosity, perseverance, and triumph."
    }
  },
  {
    id: "director",
    name: "Dr. Rahul Kulkarni",
    role: "Director",
    category: "Executive Academic Leadership",
    qualification: "Ph.D., M.M.S., B.E.",
    highlightQuote: "At AIM, we synthesize intellectual rigor with practical application, nurturing ethically grounded and industry-ready professionals.",
    message: {
      introduction: "Welcome to AIM Chalisgaon. In an era revolutionized by artificial intelligence, cloud architectures, and data-driven corporate strategies, higher education must transcend rote memorization. Our core responsibility is to build adaptable, creative problem solvers.",
      vision: "Our academic pedagogy balances the university syllabus with intensive laboratory practicals, soft-skill bootcamps, industrial visits, and project-based learning. In alignment with the National Education Policy (NEP 2020), our programs encourage multidisciplinary perspectives, analytical rigor, and hands-on competence.",
      mainBody: "We take tremendous pride in our supportive faculty, state-of-the-art computer networks, and dynamic placement cell. Beyond textbooks, our students actively compete and win accolades in university research conventions like Avishkar, cultural youth festivals, and technical hackathons. Every student who enters our gates is provided individualized mentorship to discover their innate potential.",
      closing: "I invite every aspiring tech enthusiast and business leader to join the AIM family and step confidently toward a luminous future."
    }
  },
  {
    id: "vice-chairman",
    name: "Sh. Rameshbhau Agrawal",
    role: "Hon'ble Vice Chairman",
    category: "Board of Trustees",
    highlightQuote: "Building sustainable educational infrastructure that nurtures character and professional competence."
  },
  {
    id: "secretary",
    name: "Sh. Sushilbhau Agrawal",
    role: "Hon'ble Secretary",
    category: "Board of Trustees",
    highlightQuote: "Ensuring transparent governance and continuous modernization of facilities for every learner."
  },
  {
    id: "joint-secretary",
    name: "Sh. Yogesh Agrawal",
    role: "Hon'ble Joint Secretary",
    category: "Board of Trustees",
    highlightQuote: "Expanding student welfare initiatives and community outreach throughout the Jalgaon region."
  },
  {
    id: "dy-director",
    name: "Prof. Piyush S. Agrawal",
    role: "HOD & Deputy Director",
    category: "Executive Academic Leadership",
    qualification: "M.C.A., M.B.A.",
    highlightQuote: "Fostering academic excellence and hands-on laboratory mastery in computer applications."
  },
  {
    id: "ic-director",
    name: "Prof. Dr. Shrikant S. Bhandari",
    role: "Senior Academician & Director I/C",
    category: "Executive Academic Leadership",
    qualification: "Ph.D., M.Com., M.B.A.",
    highlightQuote: "Guiding institutional research and qualitative pedagogical enrichment."
  },
  {
    id: "founder-director",
    name: "Prof. M. V. Bildikar",
    role: "Founder Director",
    category: "Founding Leadership",
    highlightQuote: "Pioneered the institutional foundations of management and computer education in Chalisgaon."
  },
  {
    id: "ex-director",
    name: "Prof. A. B. Deogirkar",
    role: "Ex-Director",
    category: "Founding Leadership",
    highlightQuote: "Contributed significantly to academic growth and early university affiliations."
  }
];
