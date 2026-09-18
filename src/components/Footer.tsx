import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import { ActivePage } from '../types';
import { siteData } from '../data/site';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenEnquiry }) => {
  const navigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800 relative z-10">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-slate-800/80 bg-[#0F2137]/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-semibold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Admissions 2025-26 Desk Active
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready to embark on your tech or management career at AIM?
            </h3>
            <p className="text-sm text-slate-300">
              Get personalized academic guidance, fee details, and university scholarship counseling.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              onClick={onOpenEnquiry}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <span>Instant Admission Enquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+917770081314"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-xl border border-white/10 transition-all text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight font-display">
                  AIM
                </span>
                <span className="text-xs font-semibold text-amber-400 block -mt-1">
                  Chalisgaon (Jalgaon)
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              <strong className="text-white">Smt. S. M. Agrawal Institute of Management</strong>, established in 2001 under the visionary leadership of Smt. Sitabai Mangilal Agrawal Charitable Trust.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Affiliated to KBCNMU, Jalgaon</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. of Maharashtra & DTE Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UGC 2(f) & 12(B) Recognized</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-display flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-500 rounded-sm"></span>
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('program-bca')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>BCA (Bachelor of Computer Applications)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('program-bba')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>BBA (Business Administration)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('program-mms')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>MMS (Master of Management Studies - CM)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('program-dcm')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>DCM (Diploma in Computer Management)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('program-dbm')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>DBM (Diploma in Business Management)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Portals & Student Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-display flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-500 rounded-sm"></span>
              Student & Portal Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('admissions')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Admissions & Document Checklist</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('resources-notices')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Official University & College Notices</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('resources-downloads')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Syllabus (NEP 2020) & Documents</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('faculty')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Teaching Faculty Directory</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('campus-life')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Laboratories & Infrastructure</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('alumni')}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Alumni Association & Network</span>
                </button>
              </li>
              <li>
                <a
                  href="https://mahadbt.maharashtra.gov.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>MahaDBT Scholarship Portal</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-display flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-500 rounded-sm"></span>
              Campus Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Ghat Road, Next to Market Yard, Aurangabad Road, Chalisgaon, Dist. Jalgaon, Maharashtra – 424101
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:+917770081314" className="block hover:text-white transition-colors">
                    +91 7770081314 (Registrar / Admission)
                  </a>
                  <a href="tel:+917350076444" className="block hover:text-white transition-colors">
                    +91 7350076444 (Office Desk)
                  </a>
                  <a href="tel:02589222169" className="block hover:text-white transition-colors">
                    02589-222169 (Landline)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="mailto:aim.director@gmail.com" className="block hover:text-white transition-colors">
                    aim.director@gmail.com
                  </a>
                  <a href="mailto:aim.office@rediffmail.com" className="block hover:text-white transition-colors">
                    aim.office@rediffmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 5:30 PM (Sunday Closed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Smt. S. M. Agrawal Institute of Management (AIM), Chalisgaon. All Rights Reserved.
            <span className="block sm:inline sm:ml-2 text-slate-400">
              Administered by Smt. Sitabai Mangilal Agrawal Charitable Trust.
            </span>
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="hover:text-amber-400 transition-colors"
            >
              Reach Campus
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
