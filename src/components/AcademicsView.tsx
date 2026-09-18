import React from 'react';
import { 
  Laptop, 
  Briefcase, 
  GraduationCap, 
  ArrowRight, 
  Clock, 
  Award, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { ActivePage } from '../types';
import { programsData } from '../data/programs';
import { PageBanner } from './PageBanner';

interface AcademicsViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Academic Programs & Disciplines"
        eyebrow="University Programs • NEP 2020 Framework"
        eyebrowIcon={<BookOpen className="w-3.5 h-3.5" />}
        description="Carefully designed curriculums permanently affiliated with Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU), Jalgaon."
        breadcrumbs={[{ label: 'Academics' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-12">
        {/* NEP 2020 Explanatory Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase">
              National Education Policy (NEP 2020)
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F2137] font-display">
              Flexible 4-Year Undergraduate Honors Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              AIM has implemented KBCNMU's revised NEP 2020 guidelines for the BCA and BBA degrees, featuring progressive credit banks, multi-entry & multi-exit options, industry internships, and minor specializations in Business Analytics and Cloud Computing.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('resources-downloads');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#0F2137] hover:bg-slate-800 text-amber-300 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors whitespace-nowrap shrink-0"
          >
            Download Credit Matrix PDF
          </button>
        </div>

        {/* Programs Listing */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-[#0F2137] font-display">
            Undergraduate & Postgraduate Degree Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((prog) => {
              const targetPage = `program-${prog.id}` as ActivePage;
              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-amber-400 shadow-sm flex flex-col justify-between transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {prog.level}
                      </span>
                      <span className="text-xs font-semibold text-amber-700 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {prog.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                        {prog.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                        {prog.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                        Program Highlights:
                      </div>
                      {prog.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActivePage(targetPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2137] group-hover:text-amber-600 transition-colors"
                    >
                      <span>Full Curriculum & Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenEnquiry}
                      className="text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-lg transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
