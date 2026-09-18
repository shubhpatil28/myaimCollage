import React from 'react';
import { Calendar, Award, BookOpen, MapPin, Building, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/site';

export const HomeGlanceStats: React.FC = () => {
  const highlights = [
    {
      title: "Year 2001",
      subtitle: "Academic Foundation",
      description: "Established by Smt. Sitabai Mangilal Agrawal Charitable Trust.",
      icon: Calendar
    },
    {
      title: "KBCNMU Affiliated",
      subtitle: "Permanently Affiliated",
      description: "Centre Code: 140026, Kavayitri Bahinabai Chaudhari North Maharashtra University.",
      icon: Award
    },
    {
      title: "UGC 2(f) Recognized",
      subtitle: "Central Regulatory Status",
      description: "Recognized by University Grants Commission & Govt. of Maharashtra (DTE).",
      icon: ShieldCheck
    },
    {
      title: "Chalisgaon Hub",
      subtitle: "Strategic Location",
      description: "Located at Ghat Road next to Market Yard near Aurangabad Road.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
            Institutional Identity
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137] tracking-tight font-display">
            AIM at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-amber-400/80 transition-all text-center sm:text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 mx-auto sm:mx-0 border border-amber-200/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl font-bold text-[#0F2137] font-display mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
