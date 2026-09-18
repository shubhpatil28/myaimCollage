import React from 'react';
import { 
  Laptop, 
  Users, 
  Award, 
  BookOpen, 
  Building2, 
  Trophy, 
  Briefcase,
  ShieldCheck
} from 'lucide-react';
import { ActivePage } from '../types';

interface HomeWhyAimProps {
  setActivePage: (page: ActivePage) => void;
}

export const HomeWhyAim: React.FC<HomeWhyAimProps> = ({ setActivePage }) => {
  const pillars = [
    {
      icon: Laptop,
      title: "Technology-Oriented Learning",
      description: "Dedicated computer laboratories configured with Python, Java, relational databases, and high-speed leased-line internet connectivity."
    },
    {
      icon: BookOpen,
      title: "NEP 2020 Aligned Academic Framework",
      description: "Curriculums mapped to national standards offering credit choice, multi-entry/exit options, and contemporary business analytics minors."
    },
    {
      icon: Users,
      title: "Dedicated Faculty Mentorship",
      description: "Seasoned professors and subject experts offering individualized attention, conceptual clarity, and project guidance."
    },
    {
      icon: Briefcase,
      title: "Career & Placement Guidance",
      description: "Active Training & Placement Cell providing soft skills, mock interview drills, CV preparation, and corporate industry interface."
    },
    {
      icon: Trophy,
      title: "Extracurricular & Research Spirit",
      description: "Active participation in KBCNMU youth festivals, sports tournaments, and university-level Avishkar research project conventions."
    },
    {
      icon: ShieldCheck,
      title: "Accredited University Affiliation",
      description: "Degrees awarded directly by Kavayitri Bahinabai Chaudhari North Maharashtra University, recognized by UGC 2(f) and Govt. of Maharashtra."
    }
  ];

  return (
    <section className="py-20 bg-[#0F2137] text-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">
            Institutional Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Why Aspiring Students Choose AIM Chalisgaon
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delivering quality technological and managerial education rooted in academic credibility, continuous student support, and regional accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-400/60 transition-all hover:-translate-y-1 duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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
