export interface Facility {
  id: string;
  title: string;
  category: "Infrastructure" | "Academics" | "Student Support" | "Recreation";
  shortDescription: string;
  description: string;
  features: string[];
  specs?: string;
  iconName: string;
  imageHint: string;
}

export const facilitiesData: Facility[] = [
  {
    id: "computer-lab",
    title: "High-Tech Computer Laboratories",
    category: "Infrastructure",
    shortDescription: "Modern networked workstations configured for software engineering, web development, and database practicals.",
    description: "AIM Chalisgaon houses dedicated air-conditioned computer laboratories equipped with contemporary hardware, high-speed leased-line broadband internet connectivity, and licensed as well as open-source development environments (Java, Python, C++, MySQL, Oracle, Android Studio).",
    features: [
      "High-speed dedicated optical fiber internet with LAN cabling",
      "Configured development tools for C, C++, Java, Python, and Web stacks",
      "Centralized server architecture with uninterrupted UPS power backup",
      "Specialized software suites for Business Analytics and Tally Accounting"
    ],
    specs: "80+ Workstations with Gigabit LAN & Dedicated Backup",
    iconName: "Monitor",
    imageHint: "Computer Lab"
  },
  {
    id: "library",
    title: "Central Academic Library & Reading Hall",
    category: "Academics",
    shortDescription: "A comprehensive repository of textbooks, national/international management journals, and digital periodicals.",
    description: "Our library serves as the intellectual hub of the institute, providing a peaceful reading hall, thousands of textbooks mapped to the KBCNMU curriculum, reference encyclopedias, subscribed business periodicals, and access to university digital repository databases.",
    features: [
      "Extensive collection of Computer Applications & Management titles",
      "National and International peer-reviewed research journals",
      "Spacious quiet reading hall for students and research scholars",
      "E-library terminal zone for online paper retrieval and e-books"
    ],
    specs: "Thousands of volumes + Daily National Dailies & Business Periodicals",
    iconName: "BookOpen",
    imageHint: "Library & Reading Hall"
  },
  {
    id: "seminar-hall",
    title: "Audio-Visual Seminar & Conference Hall",
    category: "Infrastructure",
    shortDescription: "A modern conference hall with digital projection, acoustic sound systems, and high-resolution displays.",
    description: "The institute's seminar hall is designed for academic symposiums, guest speaker interactions, corporate workshops, and student presentation sessions. It features multimedia projectors, public address systems, and flexible seating.",
    features: [
      "High-definition ceiling-mounted projection and digital display system",
      "Multi-channel acoustic audio setup with collar and cordless microphones",
      "Air-conditioned amphitheater-style conference seating",
      "Ideal venue for technical symposiums, mock interviews, and university workshops"
    ],
    specs: "Acoustically treated multi-functional conference facility",
    iconName: "Presentation",
    imageHint: "Seminar & Conference Hall"
  },
  {
    id: "placement-cell",
    title: "Training & Placement Cell (T&P)",
    category: "Student Support",
    shortDescription: "Dedicated guidance for campus recruitments, resume building, interview simulations, and corporate internships.",
    description: "The Training & Placement Cell bridges the gap between academic learning and corporate expectations. The cell organizes soft skills bootcamps, group discussion practice, aptitude preparation, and industrial visits across regional IT hubs.",
    features: [
      "Regular soft-skills, communication, and business etiquette workshops",
      "Aptitude test preparation for banking, IT services, and corporate roles",
      "Assistance with live final-year industrial projects and summer internships",
      "Campus interview drives and off-campus recruitment referral support"
    ],
    specs: "Active student career counseling and corporate outreach cell",
    iconName: "Briefcase",
    imageHint: "Placement & Training Hub"
  },
  {
    id: "sports-cultural",
    title: "Sports, Gymkhana & Cultural Pavilion",
    category: "Recreation",
    shortDescription: "Facilities supporting holistic physical development, indoor games, and university youth festival competitions.",
    description: "AIM encourages students to pursue all-round development. Students actively represent the institute in KBCNMU inter-collegiate sports tournaments (Cricket, Badminton, Chess, Table Tennis, Athletics) and annual cultural festivals.",
    features: [
      "Indoor sports equipment: Table Tennis, Carrom, Chess boards",
      "Outdoor sports grounds for Cricket, Volleyball, and Badminton",
      "Annual cultural gathering and youth talent showcase stages",
      "University Youth Festival and Avishkar research delegation preparation"
    ],
    specs: "Indoor & Outdoor sports amenities with dedicated student coordinators",
    iconName: "Trophy",
    imageHint: "Sports & Cultural Pavilion"
  },
  {
    id: "canteen-amenities",
    title: "Student Canteen & Campus Amenities",
    category: "Student Support",
    shortDescription: "Hygienic refreshment center, pure RO drinking water plants, and green landscaped campus surroundings.",
    description: "The campus provides clean and nutritious food options at the cafeteria, chilled RO drinking water facilities on all floors, hygienic washrooms, bike and vehicle parking sheds, and 24/7 CCTV surveillance.",
    features: [
      "Hygienic campus canteen offering fresh refreshments and meals",
      "Multiple RO water purifier stations with regular testing",
      "Complete CCTV camera surveillance for campus safety",
      "Separate common rooms for female and male students"
    ],
    specs: "Safe, inclusive, and monitored campus grounds",
    iconName: "Coffee",
    imageHint: "Student Amenities & Canteen"
  }
];
