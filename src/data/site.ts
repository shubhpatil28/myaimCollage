export interface InstitutionInfo {
  name: string;
  shortName: string;
  fullName: string;
  tagline: string;
  trustName: string;
  establishedYear: number;
  affiliatedTo: string;
  affiliationCode: string;
  recognitions: string[];
  address: {
    street: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
  };
  contact: {
    directorPhone: string;
    officePhones: string[];
    admissionsPhone: string;
    emails: string[];
    officeHours: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  quickLinks: {
    label: string;
    href: string;
  }[];
}

export const siteData: InstitutionInfo = {
  name: "AIM Chalisgaon",
  shortName: "AIM",
  fullName: "Smt. S. M. Agrawal Institute of Management",
  tagline: "Empowering Next-Generation Leaders in Technology & Management",
  trustName: "Smt. Sitabai Mangilal Agrawal Charitable Trust, Chalisgaon",
  establishedYear: 2001,
  affiliatedTo: "Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon (KBCNMU)",
  affiliationCode: "Centre / College Code: 140026",
  recognitions: [
    "Recognized by Government of Maharashtra",
    "Directorate of Technical Education (DTE), Mumbai",
    "University Grants Commission (UGC) under Section 2(f) & 12(B)",
    "Permanently Affiliated to KBC North Maharashtra University, Jalgaon"
  ],
  address: {
    street: "Ghat Road, Next to Market Yard, Aurangabad Road",
    landmark: "Near Market Yard / Dhule Road Campus Link",
    city: "Chalisgaon",
    district: "Jalgaon",
    state: "Maharashtra",
    pincode: "424101",
    country: "India"
  },
  contact: {
    directorPhone: "+91 9970299902",
    officePhones: ["+91 7770081314", "+91 7350076444", "02589-222169"],
    admissionsPhone: "+91 7770081314",
    emails: ["aim.director@gmail.com", "aim.office@rediffmail.com"],
    officeHours: "Monday to Saturday: 10:00 AM – 5:30 PM (Sunday Closed)"
  },
  stats: [
    {
      label: "Academic Legacy",
      value: "2001",
      description: "Established by Smt. Sitabai Mangilal Agrawal Charitable Trust"
    },
    {
      label: "University Affiliation",
      value: "KBCNMU",
      description: "Approved by Govt of Maharashtra & UGC 2(f)"
    },
    {
      label: "Core Programs",
      value: "BCA / BBA / MMS",
      description: "NEP 2020 Aligned High-Impact Curriculums"
    },
    {
      label: "Campus Location",
      value: "Chalisgaon",
      description: "Conveniently connected at Ghat Road near Market Yard"
    }
  ],
  quickLinks: [
    { label: "BCA (Computer Applications)", href: "program-bca" },
    { label: "BBA (Business Administration)", href: "program-bba" },
    { label: "MMS (Computer Management)", href: "program-mms" },
    { label: "Admission Procedure", href: "admissions" },
    { label: "Official Notices", href: "notices" },
    { label: "Syllabus Downloads", href: "downloads" }
  ]
};
