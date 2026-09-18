import React, { useState } from 'react';
import { 
  Laptop, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ChevronDown,
  Layers,
  ChevronRight,
  Download,
  Home
} from 'lucide-react';
import { ActivePage } from '../types';
import { programsData, Program } from '../data/programs';

interface ProgramDetailViewProps {
  programId: string;
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({
  programId,
  setActivePage,
  onOpenEnquiry
}) => {
  const program = programsData.find(p => p.id === programId) || programsData[0];
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'careers' | 'eligibility'>('overview');

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'bca':
        return Laptop;
      case 'bba':
        return Briefcase;
      case 'mms':
        return GraduationCap;
      default:
        return Layers;
    }
  };

  const Icon = getProgramIcon(program.id);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Aligned Program Hero Header */}
      <div className="relative bg-[#0A192F] text-white border-b border-slate-800/80 overflow-hidden py-10 sm:py-12 lg:py-14">
        {/* Background radial pattern & ambient glow identical to global system */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3.5">
            <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setActivePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-400"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <button
                  onClick={() => {
                    setActivePage('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors text-slate-400"
                >
                  Academics
                </button>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span className="text-amber-300 font-medium">{program.shortName}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {/* Badges / Eyebrow */}
              <div className="flex items-center flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{program.level} Degree</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-500/15 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span>{program.affiliation}</span>
                </span>
                {program.id === 'bca' && (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span>NEP 2020 4-Yr Framework</span>
                  </span>
                )}
              </div>

              {/* Standardized Clamp H1 */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold font-display text-white tracking-tight leading-[1.2]">
                {program.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {program.description}
              </p>

              {/* Snapshot Meta */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Duration: <strong className="text-white">{program.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Affiliation: <strong className="text-white">KBCNMU Jalgaon</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Admissions: <strong className="text-amber-300">2025-26 Active</strong></span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 pt-4 flex-wrap">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
                >
                  <span>Apply for {program.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setActivePage('resources-downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3 rounded-xl border border-slate-700 transition-all text-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Syllabus (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Card Snapshot */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Quick Eligibility
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {program.eligibility}
                </p>
                <div className="pt-3 border-t border-slate-700 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Program Code:</span>
                    <span className="font-mono font-bold text-amber-300">{program.shortName}-KBCNMU</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Degree Awarded:</span>
                    <span className="font-bold text-white">University Degree</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Scholarship Support:</span>
                    <span className="font-bold text-emerald-400">MahaDBT Eligible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Navigation Tabs & Content - Starts cleanly after Hero with Positive Flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8">
        <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Program Overview
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'curriculum'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Curriculum & Subjects
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'careers'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Career Opportunities
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'eligibility'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Eligibility & Admission
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            {/* Section 1: Detailed Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                  Academic Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
                  About the {program.name}
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {program.description}
              </p>

              {/* Highlights Matrix */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-4 font-display">
                  Key Educational Objectives & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Laboratory & Infrastructure Support */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                  Campus Facilities
                </span>
                <h3 className="text-2xl font-bold text-[#0F2137] font-display">
                  Infrastructure & Practical Training Facilities
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Students enrolled in {program.shortName} gain direct access to AIM's dedicated computer laboratories, high-speed leased-line internet, subscribed digital technical libraries, and seminar hall.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:text-left">
                  <div className="font-bold text-slate-900 text-sm">Air-Cooled IT Labs</div>
                  <div className="text-xs text-slate-500 mt-1">High-spec Intel Core systems with dual operating systems.</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:text-left">
                  <div className="font-bold text-slate-900 text-sm">University Book Bank</div>
                  <div className="text-xs text-slate-500 mt-1">Free textbook lending scheme for semester curriculum support.</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:text-left">
                  <div className="font-bold text-slate-900 text-sm">Project Mentorship</div>
                  <div className="text-xs text-slate-500 mt-1">One-on-one faculty guidance for final-year dissertations.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Curriculum */}
        {activeTab === 'curriculum' && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                    Syllabus Structure
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
                    Course Curriculum & Core Subjects
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setActivePage('resources-downloads');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3.5 py-2 rounded-xl transition-colors self-start"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download University Syllabus PDF</span>
                </button>
              </div>

              <div className="space-y-6 pt-4">
                {program.curriculumHighlights.map((group, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        {idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 font-display">
                        {group.yearOrSemester}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {group.subjects.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Careers */}
        {activeTab === 'careers' && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                  Employment Pathways
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
                  Career Prospects for {program.shortName} Graduates
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Graduating with a verified degree from AIM affiliated with KBCNMU opens dynamic career avenues across IT corporations, multinational banking enterprises, consulting firms, and public sector organizations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {program.careerOpportunities.map((career, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-3">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm font-display mb-1">
                      {career}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Industry role demanding analytical problem-solving and foundational competence.
                    </p>
                  </div>
                ))}
              </div>

              {/* Higher Education Pathways */}
              <div className="p-6 rounded-2xl bg-[#0F2137] text-white mt-6 space-y-2">
                <h3 className="text-base font-bold font-display text-amber-300">
                  Higher Education & Competitive Examination Pathways
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Graduates are fully eligible for national postgraduate admissions (MCA, MBA, MMS, M.Sc IT, Data Science) as well as UPSC, MPSC, Banking (IBPS), Railway, and Staff Selection Commission (SSC) exams.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Eligibility */}
        {activeTab === 'eligibility' && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                  Admission Criteria
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2137] font-display">
                  Eligibility & Admission Guidelines
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                  University Prescribed Requirements:
                </div>
                {program.eligibility.map((crit, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                      {crit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Required Documents Checklist
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>10th (SSC) Marksheet & Certificate</span>
                  </li>
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>12th (HSC) Marksheet</span>
                  </li>
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>School / Junior College Leaving Certificate (T.C.)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Caste & Validity Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Income Certificate (for MahaDBT scholarship)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Domicile & Nationality Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow transition-colors text-sm"
                >
                  Submit Admission Enquiry for {program.shortName}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Programs Navigation Strip */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-display mb-4">
            Explore Other Programs at AIM
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {programsData.filter(p => p.id !== program.id).slice(0, 3).map(p => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePage(`program-${p.id}` as ActivePage);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">{p.level}</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {p.name}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
