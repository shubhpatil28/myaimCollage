import React, { useState } from 'react';
import { Users, Mail, BookOpen, Award, GraduationCap, Sparkles, Filter } from 'lucide-react';
import { ActivePage } from '../types';
import { facultyData } from '../data/faculty';
import { PageBanner } from './PageBanner';

interface FacultyViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const FacultyView: React.FC<FacultyViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [selectedDept, setSelectedDept] = useState<'All' | 'Computer Applications' | 'Management Studies'>('All');

  const filtered = selectedDept === 'All'
    ? facultyData
    : facultyData.filter(f => f.department === selectedDept);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Faculty Directory & Mentorship"
        eyebrow="Academic Mentorship"
        eyebrowIcon={<GraduationCap className="w-3.5 h-3.5" />}
        description="Meet the experienced professors, researchers, and technical educators guiding students at Smt. S. M. Agrawal Institute of Management."
        breadcrumbs={[{ label: 'Faculty Directory' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-8">
        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg overflow-x-auto">
          {(['All', 'Computer Applications', 'Management Studies'] as const).map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-[#0F2137] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Notice of Authenticity */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Institutional Transparency Note:</strong> Faculty listings reflect university-approved teaching staff and departmental heads. Additional faculty bio-data and research publications for the ongoing academic year are continuously updated in compliance with university rosters.
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-amber-400 shadow-sm flex flex-col justify-between transition-all group h-full"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F2137] text-amber-400 flex items-center justify-center font-display text-lg font-black border border-amber-500/30">
                      {faculty.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-base font-display group-hover:text-amber-600 transition-colors">
                        {faculty.name}
                      </h2>
                      <div className="text-xs font-semibold text-amber-700">
                        {faculty.designation}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {faculty.department}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-700">Qualification: </span>
                    <span>{faculty.qualification}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Specialization: </span>
                    <span>{faculty.specialization}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                    Areas of Expertise:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {faculty.specialization.split(', ').map((spec, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                  {faculty.experience && (
                    <div className="text-[11px] text-slate-500 pt-1">
                      <span className="font-semibold text-slate-600">Experience:</span> {faculty.experience}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-[11px]">{faculty.department}</span>
                {faculty.email && (
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
