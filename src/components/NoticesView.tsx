import React, { useState } from 'react';
import { BellRing, Calendar, FileText, Search, Download, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types';
import { noticesData, Notice } from '../data/notices';
import { PageBanner } from './PageBanner';

interface NoticesViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const NoticesView: React.FC<NoticesViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admissions', 'Examination', 'Academic', 'Events', 'General'];

  const filteredNotices = noticesData.filter(notice => {
    const matchesCat = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Notices, Circulars & Announcements"
        eyebrow="Official Information Board"
        eyebrowIcon={<BellRing className="w-3.5 h-3.5" />}
        description="Official notifications regarding admissions, university examinations, semester schedules, and student welfare circulars."
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Notices & Circulars' }
        ]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-8">
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0F2137] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Notices Cards List */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500 text-sm">
              No circulars found matching the specified query. Try selecting 'All' categories.
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      notice.category === 'Admissions'
                        ? 'bg-amber-100 text-amber-800'
                        : notice.category === 'Examination'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {notice.category}
                    </span>
                    {notice.isUrgent && (
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        Urgent
                      </span>
                    )}
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {notice.date}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {notice.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={onOpenEnquiry}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0F2137] font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>Office Details</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
