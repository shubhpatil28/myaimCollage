export type ActivePage =
  | 'home'
  | 'about'
  | 'chairman'
  | 'director'
  | 'academics'
  | 'program-bca'
  | 'program-bba'
  | 'program-mms'
  | 'program-dcm'
  | 'program-dbm'
  | 'admissions'
  | 'faculty'
  | 'campus-life'
  | 'resources-notices'
  | 'resources-downloads'
  | 'alumni'
  | 'contact'
  | 'not-found';

export interface AdmissionEnquiryState {
  fullName: string;
  mobile: string;
  email: string;
  program: string;
  previousQualification: string;
  city: string;
  message: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AlumniRegistrationState {
  fullName: string;
  degree: string;
  passoutYear: string;
  currentCompany: string;
  currentDesignation: string;
  email: string;
  mobile: string;
  city: string;
}
