import React, { useState } from 'react';
import { Quote, Award, GraduationCap, Building2, ChevronRight, Mail, Phone, Calendar } from 'lucide-react';
import { ActivePage } from '../types';
import { leadershipData } from '../data/leadership';
import { PageBanner } from './PageBanner';

interface LeadershipViewProps {
  initialRole?: 'chairman' | 'director';
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const LeadershipView: React.FC<LeadershipViewProps> = ({
  initialRole = 'chairman',
  setActivePage,
  onOpenEnquiry
}) => {
  const [selectedLeaderId, setSelectedLeaderId] = useState<'chairman' | 'director'>(initialRole);

  const leader = leadershipData.find(l => l.id === selectedLeaderId) || leadershipData[0];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title={selectedLeaderId === 'chairman' ? "Chairman's Address & Vision" : "Director's Address & Strategic Message"}
        eyebrow="Institutional Leadership & Governance"
        eyebrowIcon={<Award className="w-3.5 h-3.5" />}
        description="Insights, educational philosophy, and strategic commitments from the stewards of Smt. S. M. Agrawal Institute of Management."
        breadcrumbs={[
          { label: 'About AIM', page: 'about' },
          { label: selectedLeaderId === 'chairman' ? "Chairman's Message" : "Director's Message" }
        ]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-8">
        {/* Leader Toggle Tabs */}
        <div className="flex items-center gap-3 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md">
          <button
            onClick={() => setSelectedLeaderId('chairman')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
              selectedLeaderId === 'chairman'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Chairman Sh. Narayanbhau Agrawal
          </button>
          <button
            onClick={() => setSelectedLeaderId('director')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
              selectedLeaderId === 'director'
                ? 'bg-[#0F2137] text-white shadow'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Director Dr. Rahul Kulkarni
          </button>
        </div>

        {/* Profile Card & Detailed Discourse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Leader Snapshot */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-6">
            <div className="text-center space-y-4">
              <div className="w-28 h-28 mx-auto rounded-3xl bg-[#0F2137] text-amber-400 flex items-center justify-center font-display text-4xl font-black border-2 border-amber-500/40 shadow-md">
                {selectedLeaderId === 'chairman' ? 'NA' : 'RK'}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display">
                  {leader.name}
                </h2>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-0.5">
                  {leader.role}
                </p>
                {leader.qualification && (
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {leader.qualification}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Smt. Sitabai Mangilal Agrawal Charitable Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Serving Chalisgaon Community Since 2001</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>aim.director@gmail.com</span>
              </div>
            </div>

            {/* Quote Pill */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs italic text-slate-800 leading-relaxed">
              "{leader.highlightQuote}"
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-[#0F2137] hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-xs transition-colors text-center shadow"
              >
                Connect with Admission Desk
              </button>
            </div>
          </div>

          {/* Right Column: Structured Narrative Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            {/* Opening Quote Banner */}
            <div className="relative border-l-4 border-amber-500 pl-6 py-2 bg-slate-50/60 rounded-r-2xl">
              <Quote className="w-8 h-8 text-amber-400/80 mb-2" />
              <p className="text-base sm:text-lg font-semibold text-slate-800 italic leading-relaxed font-display">
                "{leader.highlightQuote}"
              </p>
            </div>

            {/* Section 1: Introduction */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0F2137] font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Introductory Address
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {leader.message?.introduction}
              </p>
            </div>

            {/* Section 2: Institutional Vision */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0F2137] font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Educational Philosophy & Student Focus
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {leader.message?.vision}
              </p>
            </div>

            {/* Section 3: Core Message & Commitments */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#0F2137] font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Commitment to Academic Quality & Ethics
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {leader.message?.mainBody}
              </p>
            </div>

            {/* Section 4: Closing & Signature */}
            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <p className="text-sm sm:text-base text-slate-700 italic">
                "{leader.message?.closing}"
              </p>
              <div className="pt-4">
                <div className="font-extrabold text-slate-900 font-display text-base">
                  {leader.name}
                </div>
                <div className="text-xs text-amber-700 font-semibold uppercase tracking-wider">
                  {leader.role}, Smt. S. M. Agrawal Institute of Management
                </div>
                <div className="text-xs text-slate-500">
                  Chalisgaon, Dist. Jalgaon (Maharashtra)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
