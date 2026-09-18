import React, { useState } from 'react';
import { Users, GraduationCap, Briefcase, Award, CheckCircle2, Sparkles, Send, History } from 'lucide-react';
import { ActivePage, AlumniRegistrationState } from '../types';
import { alumniData } from '../data/alumni';
import { PageBanner } from './PageBanner';

interface AlumniViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const AlumniView: React.FC<AlumniViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [formData, setFormData] = useState<AlumniRegistrationState>({
    fullName: '',
    degree: 'BCA (Bachelor of Computer Applications)',
    passoutYear: '2022',
    currentCompany: '',
    currentDesignation: '',
    email: '',
    mobile: '',
    city: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Alumni Association & Legacy"
        eyebrow="AIM Alumni Network"
        eyebrowIcon={<GraduationCap className="w-3.5 h-3.5" />}
        description="Connecting generations of AIM graduates who completed university qualifications in Computer Applications and Management."
        breadcrumbs={[{ label: 'Alumni Network' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-12">
        {/* Transparency Banner */}
        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <History className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Historical Record & Verification Notice:</strong> The career pathways shown below represent historical batch records and verified institutional profiles. All registered alumni are encouraged to submit updated contact and career achievements via the registration desk below to keep the alumni network directory active.
          </div>
        </div>

        {/* Alumni Spotlight Profiles */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              Historical Batch Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
              Alumni Career Trajectories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniData.map((alumnus) => (
              <div
                key={alumnus.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F2137] text-amber-400 font-display font-black text-lg flex items-center justify-center border border-amber-500/30">
                        {alumnus.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base font-display">
                          {alumnus.name}
                        </h3>
                        <div className="text-xs text-amber-700 font-semibold">
                          {alumnus.degree}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                      <span>{alumnus.currentRole}</span>
                    </div>
                    <div className="text-slate-500">{alumnus.organization}</div>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{alumnus.testimonialExcerpt}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Batch of {alumnus.graduationYear}</span>
                  <span className="text-amber-700 font-semibold">Verified Alumnus</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Registration Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              Stay Connected
            </span>
            <h2 className="text-2xl font-bold text-[#0F2137] font-display">
              AIM Alumni Registration Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Are you an AIM alumnus? Register your details to participate in guest lectures, mentorship drives, and annual alumni reunions.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900 font-display">Registration Submitted!</h3>
              <p className="text-xs text-emerald-800">
                Welcome back to the AIM alumni fold, {formData.fullName}. We look forward to your participation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Program Completed *
                  </label>
                  <select
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="BCA (Bachelor of Computer Applications)">BCA</option>
                    <option value="BBA (Bachelor of Business Administration)">BBA</option>
                    <option value="MMS (Master of Management Studies)">MMS</option>
                    <option value="DCM (Diploma in Computer Management)">DCM</option>
                    <option value="DBM (Diploma in Business Management)">DBM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                    placeholder="e.g. Infosys, TCS, HDFC, Self-Employed"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current Designation
                  </label>
                  <input
                    type="text"
                    value={formData.currentDesignation}
                    onChange={(e) => setFormData({ ...formData, currentDesignation: e.target.value })}
                    placeholder="e.g. Software Developer, Manager"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alumnus@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#0F2137] hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
              >
                <span>Register with Alumni Association</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
