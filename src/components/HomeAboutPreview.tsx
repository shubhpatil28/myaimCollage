import React from 'react';
import { 
  Building2, 
  Award, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { ActivePage } from '../types';
import { siteData } from '../data/site';

interface HomeAboutPreviewProps {
  setActivePage: (page: ActivePage) => void;
}

export const HomeAboutPreview: React.FC<HomeAboutPreviewProps> = ({ setActivePage }) => {
  return (
    <section className="py-20 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Presentation / Infographic Block */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Badge Container */}
              <div className="bg-[#0F2137] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>
                
                {/* Year Established Callout */}
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  Founded in Year 2001
                </div>

                <h3 className="text-4xl sm:text-5xl font-extrabold text-white font-display mb-2">
                  20+ Years
                </h3>
                <p className="text-amber-400 font-semibold text-sm mb-6">
                  Of Academic Distinction in Chalisgaon
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Managed by <strong className="text-white">Smt. Sitabai Mangilal Agrawal Charitable Trust</strong>, dedicated to delivering job-oriented computer application and management education to the regional student community.
                </p>

                {/* Micro Verified Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Affiliated with KBC North Maharashtra University</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>UGC Recognized under Section 2(f) & 12(B)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>State Government Approved (DTE Mumbai)</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-200 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">University Rankers</div>
                    <div className="text-[11px] text-slate-500">Consistent academic honors & youth festival awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                About Smt. S. M. Agrawal Institute of Management
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight font-display">
                Building Tomorrow's IT & Management Leaders Right in Chalisgaon
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              At AIM, higher education is built on the philosophy of practical mastery, ethical governance, and student-centric mentorship. Established in 2001 under the visionary guidance of the <strong>Smt. Sitabai Mangilal Agrawal Charitable Trust</strong>, the institute addresses the growing demand for skilled computer and management professionals across Maharashtra.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">
                  NEP 2020 Modern Curriculums
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Degree programs structured under KBCNMU guidelines incorporating latest IT & analytics minors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">
                  Experienced Mentorship
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Accomplished faculty with decades of university teaching, research, and industry experience.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">
                  State-of-the-Art Labs
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Networked high-performance workstations with continuous high-speed leased-line internet.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 font-display">
                  UGC 2(f) Credibility
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Legitimate recognized credentials granting full eligibility for state, national, and MNC careers.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2137] hover:text-amber-600 transition-colors group"
              >
                <span>Discover Institutional History, Trust & Governance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
