import React from 'react';
import { Quote, ArrowRight, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { ActivePage } from '../types';
import { leadershipData } from '../data/leadership';

interface HomeLeadershipPreviewProps {
  setActivePage: (page: ActivePage) => void;
}

export const HomeLeadershipPreview: React.FC<HomeLeadershipPreviewProps> = ({ setActivePage }) => {
  const chairman = leadershipData.find(l => l.id === 'chairman');
  const director = leadershipData.find(l => l.id === 'director');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Executive Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight font-display">
            Leadership with Vision & Integrity
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Guided by experienced trustees and accomplished academicians committed to student transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Chairman Card */}
          {chairman && (
            <div className="bg-[#FBFBFA] rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 transition-all">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* Visual Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-2xl bg-[#0F2137] text-amber-400 flex items-center justify-center font-display text-2xl font-black border border-amber-500/30 shrink-0">
                      NA
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {chairman.name}
                      </h3>
                      <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                        {chairman.role} • Trust Management
                      </div>
                      <div className="text-xs text-slate-500">
                        Smt. Sitabai Mangilal Agrawal Charitable Trust
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-amber-300 shrink-0" />
                </div>

                <div className="relative border-l-2 border-amber-500 pl-4 py-1 italic text-slate-700 text-sm font-medium">
                  "{chairman.highlightQuote}"
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chairman.message?.introduction} {chairman.message?.vision.slice(0, 140)}...
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Trustee Message
                </span>
                <button
                  onClick={() => {
                    setActivePage('chairman');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2137] hover:text-amber-600 transition-colors"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Director Card */}
          {director && (
            <div className="bg-[#FBFBFA] rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 transition-all">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* Visual Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-display text-2xl font-black border border-amber-400/30 shrink-0">
                      RK
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {director.name}
                      </h3>
                      <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                        {director.role} • Academic Head
                      </div>
                      <div className="text-xs text-slate-500">
                        {director.qualification}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-amber-300 shrink-0" />
                </div>

                <div className="relative border-l-2 border-amber-500 pl-4 py-1 italic text-slate-700 text-sm font-medium">
                  "{director.highlightQuote}"
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {director.message?.introduction} {director.message?.vision.slice(0, 140)}...
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Director's Desk
                </span>
                <button
                  onClick={() => {
                    setActivePage('director');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2137] hover:text-amber-600 transition-colors"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
