import React from 'react';
import { 
  Monitor, 
  BookOpen, 
  Presentation, 
  Briefcase, 
  Trophy, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ActivePage } from '../types';
import { facilitiesData } from '../data/facilities';

interface HomeFacilitiesPreviewProps {
  setActivePage: (page: ActivePage) => void;
}

export const HomeFacilitiesPreview: React.FC<HomeFacilitiesPreviewProps> = ({ setActivePage }) => {
  const iconMap: Record<string, React.ElementType> = {
    Monitor,
    BookOpen,
    Presentation,
    Briefcase,
    Trophy
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Infrastructure & Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight font-display">
              Environment Built for Focus & Exploration
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Purpose-built spaces ensuring students spend more time learning, programming, and collaborating.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('campus-life');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2137] hover:text-amber-600 transition-colors self-start md:self-auto group"
          >
            <span>Explore All Facilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.slice(0, 3).map((fac) => {
            const Icon = iconMap[fac.iconName] || Monitor;
            return (
              <div
                key={fac.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {fac.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {fac.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {fac.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400">{fac.specs}</span>
                  <button
                    onClick={() => {
                      setActivePage('campus-life');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-bold text-amber-700 hover:text-amber-800"
                  >
                    View Specs →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
