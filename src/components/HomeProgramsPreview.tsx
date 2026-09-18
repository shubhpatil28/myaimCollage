import React, { useState } from 'react';
import { 
  Laptop, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import { ActivePage } from '../types';
import { programsData } from '../data/programs';

interface HomeProgramsPreviewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const HomeProgramsPreview: React.FC<HomeProgramsPreviewProps> = ({ 
  setActivePage,
  onOpenEnquiry
}) => {
  const [filterLevel, setFilterLevel] = useState<'All' | 'Undergraduate' | 'Postgraduate' | 'Diploma'>('All');

  const filtered = filterLevel === 'All' 
    ? programsData 
    : programsData.filter(p => p.level === filterLevel);

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

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Academic Horizons at AIM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight font-display">
              Programs Built for Real-World Competence
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Approved by Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU) with modern NEP 2020 frameworks.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Undergraduate', 'Postgraduate', 'Diploma'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  filterLevel === lvl
                    ? 'bg-white text-[#0F2137] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prog) => {
            const Icon = getProgramIcon(prog.id);
            const targetPage = `program-${prog.id}` as ActivePage;

            return (
              <div
                key={prog.id}
                className="bg-[#FBFBFA] rounded-2xl border border-slate-200/90 hover:border-amber-400/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-xl group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2137] text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                        {prog.level}
                      </span>
                      {prog.id === 'bca' && (
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                          NEP 2020
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                      {prog.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  {/* Key Highlights / Curriculum points */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Core Specializations:
                    </div>
                    {prog.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setActivePage(targetPage);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2137] group-hover:text-amber-600 transition-colors"
                  >
                    <span>View Curriculum & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenEnquiry}
                    className="text-[11px] font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F2137] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm">Need help choosing between BCA and BBA?</div>
              <div className="text-xs text-slate-400">Speak with our academic counselors at the Chalisgaon campus office.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors whitespace-nowrap"
            >
              Get Guidance
            </button>
            <button
              onClick={() => {
                setActivePage('admissions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-amber-300 font-semibold text-xs transition-colors whitespace-nowrap"
            >
              Admission Steps →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
