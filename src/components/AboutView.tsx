import React from 'react';
import { 
  Building2, 
  Award, 
  Target, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  Calendar,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { ActivePage } from '../types';
import { siteData } from '../data/site';
import { PageBanner } from './PageBanner';

interface AboutViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="About Smt. S. M. Agrawal Institute of Management"
        eyebrow="Institutional Heritage Since 2001"
        eyebrowIcon={<Building2 className="w-3.5 h-3.5" />}
        description="Empowering students of Chalisgaon and North Maharashtra with career-defining education in Computer Applications and Management Sciences."
        breadcrumbs={[{ label: 'About AIM' }]}
        onNavigate={setActivePage}
      />

      {/* Main Content Container - Starts cleanly with positive document flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-12">
        {/* Quick Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Founded In</div>
              <div className="text-lg font-extrabold text-[#0F2137]">Year 2001</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Affiliation</div>
              <div className="text-lg font-extrabold text-[#0F2137]">KBCNMU Jalgaon</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Regulatory Status</div>
              <div className="text-lg font-extrabold text-[#0F2137]">UGC 2(f) & DTE Approved</div>
            </div>
          </div>
        </div>

        {/* The Institutional Genesis */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-12 space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              History & Founding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137] font-display">
              Genesis of AIM Chalisgaon
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At the turn of the millennium, as the software and IT-enabled services sectors transformed India's economic landscape, the need for high-quality, regionally accessible technical and business education in North Maharashtra became paramount.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In response, <strong>Smt. Sitabai Mangilal Agrawal Charitable Trust</strong> established the <strong>Smt. S. M. Agrawal Institute of Management (AIM)</strong> in the year 2001 at Chalisgaon. From its inception, AIM was conceived as a center of professional learning where students from urban and rural backgrounds could acquire practical technological expertise without relocating to distant metropolises.
            </p>
          </div>

          {/* Sponsoring Trust Profile */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              Smt. Sitabai Mangilal Agrawal Charitable Trust, Chalisgaon
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The Trust is widely recognized for its deep philanthropic commitment to the educational, social, and economic upliftment of North Maharashtra. Guided by values of integrity, service, and accessibility, the Trust provides modern campus infrastructure, continuous pedagogical modernization, and student support programs including facilitation of state scholarships.
            </p>
          </div>

          {/* Vision & Mission Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Vision */}
            <div className="p-7 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Our Institutional Vision
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                "To be a premier institute of excellence in computer applications and management education, cultivating intellectually competent, socially responsible, and ethically upright leaders who drive sustainable progress."
              </p>
            </div>

            {/* Mission */}
            <div className="p-7 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Our Mission Statements
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Deliver rigorous curricula aligned with current technological and industry advancements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Provide state-of-the-art laboratory infrastructure for software design, coding, and data analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Foster entrepreneurial mindset, critical thinking, and professional business ethics among learners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>Bridge the academia-industry divide through active placement preparation, workshops, and guest lectures.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regulatory Accreditations & Approvals */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-12 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
              Statutory Recognition
            </span>
            <h2 className="text-2xl font-bold text-[#0F2137] font-display">
              Affiliations & Statutory Approvals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">
                KBC North Maharashtra University
              </div>
              <div className="text-xs text-amber-700 font-semibold mb-2">
                University Centre Code: 140026
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Permanently affiliated for BCA, BBA, and MMS degree programs. Examination, evaluation, and degree conferral governed under university ordinances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">
                Government of Maharashtra (DTE)
              </div>
              <div className="text-xs text-amber-700 font-semibold mb-2">
                Higher & Technical Education Dept.
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Formally sanctioned institute by the Directorate of Technical Education (DTE), Mumbai, ensuring eligibility for state social welfare scholarships.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">
                University Grants Commission (UGC)
              </div>
              <div className="text-xs text-amber-700 font-semibold mb-2">
                Section 2(f) & 12(B) Status
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Recognized under UGC Act, guaranteeing institutional validity across national educational registries and government career examinations.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Navigation Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div 
            onClick={() => setActivePage('chairman')}
            className="cursor-pointer bg-white p-7 rounded-2xl border border-slate-200 hover:border-amber-500 shadow-sm transition-all group flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Leadership Message</div>
              <div className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                Sh. Narayanbhau Agrawal
              </div>
              <div className="text-xs text-slate-500">Chairman, Smt. S. M. Agrawal Trust</div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
          </div>

          <div 
            onClick={() => setActivePage('director')}
            className="cursor-pointer bg-white p-7 rounded-2xl border border-slate-200 hover:border-amber-500 shadow-sm transition-all group flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Academic Leadership</div>
              <div className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                Dr. Rahul Kulkarni
              </div>
              <div className="text-xs text-slate-500">Director, AIM Chalisgaon</div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};
