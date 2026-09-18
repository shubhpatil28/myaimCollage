import React, { useState } from 'react';
import { 
  UserCheck, 
  FileText, 
  CheckCircle2, 
  Download, 
  Phone, 
  Mail, 
  AlertCircle, 
  Sparkles, 
  HelpCircle,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { ActivePage, AdmissionEnquiryState } from '../types';
import { faqsData } from '../data/faqs';
import { PageBanner } from './PageBanner';

interface AdmissionsViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [formData, setFormData] = useState<AdmissionEnquiryState>({
    fullName: '',
    mobile: '',
    email: '',
    program: 'BCA (Bachelor of Computer Applications)',
    previousQualification: '12th (HSC) Passed / Appearing',
    city: 'Chalisgaon',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setFormSubmitted(true);
  };

  const steps = [
    {
      num: "01",
      title: "Enquiry & Academic Counseling",
      desc: "Fill the admission enquiry form online or visit our campus counseling desk on Ghat Road, Chalisgaon to discuss course suitability and career goals."
    },
    {
      num: "02",
      title: "Document Verification",
      desc: "Submit your original academic certificates and attested copies (SSC, HSC, Leaving Certificate, Caste & Validity if applicable) for administrative verification."
    },
    {
      num: "03",
      title: "University Form & Fee Payment",
      desc: "Complete the official KBCNMU registration form. Pay the scheduled academic installment with receipts and collect confirmation."
    },
    {
      num: "04",
      title: "Scholarship & Induction",
      desc: "Eligible category students submit MahaDBT scholarship claim forms with college guidance. Attend the orientation and start classes."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Admissions & Enrollment Guide"
        eyebrow="Academic Year 2025-26 Admissions Active"
        eyebrowIcon={<UserCheck className="w-3.5 h-3.5" />}
        description="Transparent, student-friendly admission procedures for BCA, BBA, MMS, and Post-HSC diploma courses at AIM Chalisgaon."
        breadcrumbs={[{ label: 'Admissions' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-12">
        {/* Step-by-Step Admission Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
              How to Secure Admission at AIM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <div className="font-mono text-3xl font-black text-amber-500/40 mb-2">
                  {st.num}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 font-display">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Form & Document Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Enquiry Box */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                Direct Submission
              </span>
              <h2 className="text-2xl font-bold text-[#0F2137] font-display">
                Register Your Admission Enquiry
              </h2>
              <p className="text-xs text-slate-500">
                Submit this form to schedule a counseling slot or receive fee structures and syllabus copies.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 font-display">Enquiry Submitted!</h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our admissions counselor will contact you at <strong>{formData.mobile}</strong>.
                </p>
                <div className="text-xs text-slate-600 pt-2 border-t border-emerald-200">
                  You may also visit our office directly: Mon–Sat 10:00 AM – 5:30 PM.
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter student full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit Mobile"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Program Applied For
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 bg-white"
                    >
                      <option value="BCA (Bachelor of Computer Applications)">BCA (4-Year NEP 2020)</option>
                      <option value="BBA (Bachelor of Business Administration)">BBA (3-Year Degree)</option>
                      <option value="MMS (Master of Management Studies)">MMS (2-Year PG Degree)</option>
                      <option value="DCM (Diploma in Computer Management)">DCM (1-Year Diploma)</option>
                      <option value="DBM (Diploma in Business Management)">DBM (1-Year Diploma)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / Native Town
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Chalisgaon, Dhule, Pachora"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Questions / Queries (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Fee structure, transport, MahaDBT scholarship..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Enquiry</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Required Documents Checklist */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                Checklist
              </span>
              <h3 className="text-xl font-bold text-[#0F2137] font-display">
                Mandatory Admission Documents
              </h3>
              <p className="text-xs text-slate-500">
                Please bring original documents and two sets of self-attested photocopies during office verification.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">10th (SSC) Marksheet & Certificate</strong>
                  <span>Proof of date of birth and secondary credentials.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">12th (HSC) Marksheet</strong>
                  <span>Original statement of marks from Maharashtra State Board or equivalent.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">College / School Leaving Certificate (T.C.)</strong>
                  <span>Original Transfer Certificate from previous junior college / school.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Caste & Validity Certificates</strong>
                  <span>Compulsory for SC, ST, VJNT, OBC, SBC students claiming quota/scholarship.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Income & Domicile Certificate</strong>
                  <span>Issued by competent state revenue authority for scholarship entitlement.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Passport Size Photographs & Aadhaar Card</strong>
                  <span>4 recent color photos and photocopy of Aadhaar Card.</span>
                </div>
              </div>
            </div>

            {/* Printable Checklist download */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('resources-downloads');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-amber-600" />
                <span>Download Printable Checklist (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scholarships Section */}
        <div className="bg-[#0F2137] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">
              Financial Welfare & Govt. Schemes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Scholarships & Free-Ship Schemes (MahaDBT)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              AIM Chalisgaon is an approved institution under the Government of Maharashtra Directorate of Technical Education (DTE). All admitted students belonging to reserved categories or economically weaker sections are entitled to state social welfare scholarship benefits through the official MahaDBT portal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
              <div className="font-bold text-amber-400 mb-1">SC / ST Categories</div>
              <div className="text-slate-300">Govt. of India Post-Matric Scholarship & Free-ship with fee waiver.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
              <div className="font-bold text-amber-400 mb-1">OBC / SBC / VJNT</div>
              <div className="text-slate-300">Post-Matric scholarship scheme under VJNT, OBC and SBC Welfare Dept.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
              <div className="font-bold text-amber-400 mb-1">EBC / SEBC</div>
              <div className="text-slate-300">Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti scheme.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
              <div className="font-bold text-amber-400 mb-1">Minority Scholarships</div>
              <div className="text-slate-300">State and Central Minority scholarships for eligible pursuing students.</div>
            </div>
          </div>
        </div>

        {/* Admissions FAQ Accordion */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              Common Questions
            </span>
            <h2 className="text-2xl font-bold text-[#0F2137] font-display">
              Frequently Asked Questions Regarding Admissions
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 bg-slate-50/70 hover:bg-slate-50 flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-slate-900 text-sm font-display">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
