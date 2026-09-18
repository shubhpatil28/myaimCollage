import React from 'react';
import { GraduationCap, ArrowLeft, Home, BookOpen, Phone, HelpCircle } from 'lucide-react';
import { ActivePage } from '../types';

interface NotFoundViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
          <GraduationCap className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">
            Error 404 • Page Not Found
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137] font-display">
            Looking for Institutional Information?
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you requested does not exist or has been relocated within the AIM 2.0 portal. Please use the options below to navigate to the official university-affiliated sections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0F2137] text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => {
              setActivePage('academics');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Browse Academics</span>
          </button>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span>Need direct assistance?</span>
          <a
            href="tel:+917770081314"
            className="text-amber-600 font-semibold hover:underline flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 7770081314</span>
          </a>
          <span>•</span>
          <button
            onClick={onOpenEnquiry}
            className="text-amber-600 font-semibold hover:underline"
          >
            Admission Desk
          </button>
        </div>
      </div>
    </div>
  );
};
