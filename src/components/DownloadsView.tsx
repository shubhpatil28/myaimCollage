import React, { useState } from 'react';
import { Download, FileText, Calendar, Filter, FileCheck, Sparkles, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types';
import { downloadsData, DownloadItem } from '../data/downloads';
import { PageBanner } from './PageBanner';

interface DownloadsViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const DownloadsView: React.FC<DownloadsViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadSuccessModal, setDownloadSuccessModal] = useState<string | null>(null);

  const categories = ['All', 'Admission', 'Syllabus', 'Forms', 'Examination', 'Bulletins'];

  const filtered = selectedCategory === 'All'
    ? downloadsData
    : downloadsData.filter(d => d.category === selectedCategory);

  const handleDownload = (item: DownloadItem) => {
    // Generate a clean text/blob download representing the official syllabus summary or guide
    const fileContent = `=====================================================
SMT. S. M. AGRAWAL INSTITUTE OF MANAGEMENT (AIM), CHALISGAON
KBC North Maharashtra University Permanent Affiliation (Centre Code: 140026)
=====================================================

DOCUMENT: ${item.title}
CATEGORY: ${item.category}
SESSION: ${item.date}
SPECIFICATION: ${item.description}

INSTITUTIONAL ADDRESS:
Ghat Road, Next to Market Yard, Aurangabad Road,
Chalisgaon, Dist. Jalgaon, Maharashtra - 424101
Phone: +91 7770081314 / +91 7350076444
Email: aim.director@gmail.com
Website: http://www.myaimcollege.in/

For official stamp-attested hard copies and university syllabus handbooks, 
please visit the AIM administrative office counter.
=====================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}_AIM_Chalisgaon.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccessModal(item.title);
    setTimeout(() => setDownloadSuccessModal(null), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Syllabus, Forms & Downloads"
        eyebrow="Document Repository"
        eyebrowIcon={<Download className="w-3.5 h-3.5" />}
        description="Official university curriculum frameworks, NEP 2020 syllabi, admission checklists, and institutional prospectuses."
        breadcrumbs={[
          { label: 'Resources' },
          { label: 'Downloads & Syllabus' }
        ]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-8">
        {/* Category Filters */}
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

        {/* Floating Download Toast */}
        {downloadSuccessModal && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-between gap-3 text-xs text-emerald-800 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>Downloaded reference dossier for: <strong>{downloadSuccessModal}</strong></span>
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold">Official Doc Generated</span>
          </div>
        )}

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-amber-400 shadow-sm transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span className="text-slate-600 font-bold bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.fileFormat}
                    </span>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {item.title}
                </h2>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleDownload(item)}
                  className="bg-[#0F2137] hover:bg-slate-800 text-amber-300 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>

                <button
                  onClick={onOpenEnquiry}
                  className="text-xs text-slate-600 hover:text-amber-700 font-semibold"
                >
                  Request Printed Copy →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
