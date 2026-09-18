import React from 'react';
import { 
  UserCheck, 
  BookOpen, 
  BellRing, 
  FileDown, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { ActivePage } from '../types';

interface QuickActionBarProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ 
  setActivePage, 
  onOpenEnquiry 
}) => {
  const actions = [
    {
      label: "Admissions 2025-26",
      subtitle: "Eligibility & Procedure",
      icon: UserCheck,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      action: () => {
        setActivePage('admissions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: "Academic Programs",
      subtitle: "BCA, BBA, MMS",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      action: () => {
        setActivePage('academics');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: "Official Notices",
      subtitle: "Circulars & Exams",
      icon: BellRing,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      action: () => {
        setActivePage('resources-notices');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: "Downloads & Syllabus",
      subtitle: "NEP 2020 PDFs",
      icon: FileDown,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      action: () => {
        setActivePage('resources-downloads');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      label: "Campus Contact",
      subtitle: "Ghat Road, Chalisgaon",
      icon: MapPin,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      action: () => {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {actions.map((act, index) => {
          const Icon = act.icon;
          return (
            <button
              key={index}
              onClick={act.action}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all text-left group border border-transparent hover:border-slate-200"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${act.color} group-hover:scale-105 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-800 text-xs sm:text-sm truncate group-hover:text-amber-600 transition-colors flex items-center gap-1">
                  <span>{act.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  {act.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
