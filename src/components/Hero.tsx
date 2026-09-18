import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  MapPin, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { ActivePage } from '../types';
import { siteData } from '../data/site';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage, onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A192F] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Background Architectural Geometry (Clean, non-slop geometric lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content & Authority) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs text-amber-300 font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Admissions Open 2025-26</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Affiliated to KBCNMU Jalgaon</span>
            </div>

            {/* Main Headline with High Visual Contrast */}
            <div className="space-y-3">
              <p className="text-amber-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">
                Smt. Sitabai Mangilal Agrawal Charitable Trust Presents
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.15]">
                Shape Your Future With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  AIM Chalisgaon
                </span>
              </h1>
            </div>

            {/* Clear, Factual Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-white font-semibold">Smt. S. M. Agrawal Institute of Management</strong> is Chalisgaon's established hub for modern higher education in computer applications and business management. Delivering university-recognized <span className="text-amber-300 font-medium">BCA (4-Year NEP 2020)</span>, <span className="text-amber-300 font-medium">BBA</span>, and <span className="text-amber-300 font-medium">MMS</span> programs with advanced computer laboratories and dedicated student mentorship since 2001.
            </p>

            {/* Key Verified Institutional Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">UGC 2(f) Recognized</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Govt. of Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/60 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">MahaDBT Scholarships</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('academics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Explore Programs</span>
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Identity Card & Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              {/* Header of the Card */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-base leading-tight font-display">
                      AIM Chalisgaon
                    </h2>
                    <p className="text-xs text-amber-400 font-medium">
                      Centre Code: 140026
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full">
                  Est. 2001
                </span>
              </div>

              {/* Core Offerings List */}
              <div className="py-5 space-y-3.5">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Flagship Degree Programs
                </div>

                {/* BCA Cardlet */}
                <div 
                  onClick={() => setActivePage('program-bca')}
                  className="cursor-pointer p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      BCA (Computer Applications)
                    </span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">
                      NEP 2020
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Python, Web Tech, Database Architecture, Cloud Computing
                  </p>
                </div>

                {/* BBA Cardlet */}
                <div 
                  onClick={() => setActivePage('program-bba')}
                  className="cursor-pointer p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      BBA (Business Administration)
                    </span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">
                      Analytics Minor
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Financial Management, Marketing Strategy, Human Resources
                  </p>
                </div>

                {/* MMS Cardlet */}
                <div 
                  onClick={() => setActivePage('program-mms')}
                  className="cursor-pointer p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                      MMS (Master of Management Studies)
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                      Postgraduate
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Enterprise IT Management, Systems Consulting & Decision Science
                  </p>
                </div>
              </div>

              {/* Campus Address Snippet at Bottom of Card */}
              <div className="pt-3 border-t border-slate-700/80 flex items-start gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Ghat Road, Next to Market Yard, Aurangabad Road, Chalisgaon (Jalgaon)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
