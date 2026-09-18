import React from 'react';
import { BellRing, Calendar, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';
import { noticesData } from '../data/notices';

interface HomeNoticesPreviewProps {
  setActivePage: (page: ActivePage) => void;
}

export const HomeNoticesPreview: React.FC<HomeNoticesPreviewProps> = ({ setActivePage }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <BellRing className="w-4 h-4 text-amber-500" />
              Circulars & Announcements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight font-display">
              Latest College & University Notices
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Stay updated with university examination schedules, admission dates, and academic circulars.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('resources-notices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2137] hover:text-amber-600 transition-colors self-start md:self-auto group"
          >
            <span>View All Circulars</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticesData.slice(0, 3).map((notice) => (
            <div
              key={notice.id}
              className="bg-[#FBFBFA] rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    notice.category === 'Admissions'
                      ? 'bg-amber-100 text-amber-800'
                      : notice.category === 'Examination'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {notice.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{notice.date}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug font-display line-clamp-2">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {notice.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Official Release</span>
                <button
                  onClick={() => {
                    setActivePage('resources-notices');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-bold text-[#0F2137] hover:text-amber-600 transition-colors flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Notice</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
