import React, { useState } from 'react';
import { 
  Monitor, 
  BookOpen, 
  Presentation, 
  Briefcase, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Building,
  Users,
  Compass
} from 'lucide-react';
import { ActivePage } from '../types';
import { facilitiesData } from '../data/facilities';
import { PageBanner } from './PageBanner';

interface CampusLifeViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const CampusLifeView: React.FC<CampusLifeViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Laboratory', 'Library', 'Auditorium', 'Career', 'Recreation'];

  const filtered = selectedCategory === 'All'
    ? facilitiesData
    : facilitiesData.filter(f => f.category === selectedCategory);

  const iconMap: Record<string, React.ElementType> = {
    Monitor,
    BookOpen,
    Presentation,
    Briefcase,
    Trophy
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Campus Life & Learning Spaces"
        eyebrow="Campus Infrastructure & Culture"
        eyebrowIcon={<Building className="w-3.5 h-3.5" />}
        description="Modern computing laboratories, extensive reference libraries, seminar auditoriums, and co-curricular vibrancy at AIM Chalisgaon."
        breadcrumbs={[{ label: 'Campus Life' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-10">
        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0F2137] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid with enhanced visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((fac, idx) => {
            const Icon = iconMap[fac.iconName] || Monitor;
            const isFeatured = idx === 0 && selectedCategory === 'All';
            return (
              <div
                key={fac.id}
                className={`bg-white rounded-3xl p-7 border shadow-sm flex flex-col justify-between transition-all group ${
                  isFeatured 
                    ? 'border-amber-400/80 ring-1 ring-amber-400/20 md:col-span-2 lg:col-span-2' 
                    : 'border-slate-200/90 hover:border-amber-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                          Flagship Lab
                        </span>
                      )}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {fac.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900 font-display">
                      {fac.title}
                    </h2>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <div className={isFeatured ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : "space-y-1.5"}>
                      {fac.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Specs: {fac.specs}</span>
                  <button
                    onClick={onOpenEnquiry}
                    className="text-amber-700 font-bold hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Campus Visit</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extracurricular & Cultural Life Showcase */}
        <div className="bg-[#0F2137] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">
              Beyond the Classroom
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Cultural & Sports Activities (Youth Festival & Avishkar)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              AIM actively encourages student participation in university youth festivals ('Yuvarang'), inter-collegiate sports tournaments, coding hackathons, management games, and the prestigious regional Avishkar Research Convention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="font-bold text-amber-400 text-sm">Avishkar Research Cell</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mentoring students to submit empirical business studies and functional software prototypes at university research conventions.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="font-bold text-amber-400 text-sm">Cultural & Arts Forum</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Organizing annual gathering celebrations, technical debate competitions, drama, and youth empowerment days.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="font-bold text-amber-400 text-sm">Sports & Fitness Arena</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active cricket, chess, volleyball, and badminton tournament contingents participating in KBCNMU inter-collegiate meets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
