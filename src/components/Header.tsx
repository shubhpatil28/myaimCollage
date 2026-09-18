import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  BookOpen, 
  FileText, 
  Users, 
  MapPin, 
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ActivePage } from '../types';
import { siteData } from '../data/site';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activePage, 
  setActivePage,
  onOpenEnquiry 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setAcademicsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification & Utility Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Affiliation & Recognition Badges */}
          <div className="flex items-center flex-wrap gap-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded text-[11px]">
              <Award className="w-3 h-3" />
              Affiliated to KBCNMU, Jalgaon
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-slate-300 font-medium text-[11px]">
              Recognized by Govt. of Maharashtra & UGC 2(f)
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-amber-200 text-[11px] font-mono">
              Code: 140026
            </span>
          </div>

          {/* Right: Direct Contacts & Admissions Ticker */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a 
              href="tel:+917770081314" 
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 7770081314</span>
            </a>
            <a 
              href="mailto:aim.director@gmail.com" 
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors text-[11px]"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>aim.director@gmail.com</span>
            </a>
            <button
              onClick={() => navigate('admissions')}
              className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-medium bg-amber-500/20 px-2 py-0.5 rounded transition-colors text-[11px]"
            >
              <Sparkles className="w-3 h-3" />
              <span>Admissions 2025-26 Open</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Fixed, Stable 76px Desktop Height */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b ${
        isScrolled ? 'border-slate-200/90 shadow-sm' : 'border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] lg:h-[76px] flex items-center justify-between">
          {/* Brand Logo & Institutional Seal */}
          <button 
            onClick={() => navigate('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Go to AIM Chalisgaon Homepage"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0F2137] flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform duration-200 border border-amber-500/30">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-[#0F2137] tracking-tight font-display leading-none">
                  AIM
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                  Est. 2001
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 tracking-tight leading-tight line-clamp-1">
                Smt. S. M. Agrawal Institute of Management
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                Chalisgaon (Dist. Jalgaon) • KBCNMU Affiliated
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => navigate('home')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'home'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('about')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  ['about', 'chairman', 'director'].includes(activePage)
                    ? 'text-[#0F2137] bg-slate-100'
                    : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
                }`}
              >
                About
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => navigate('about')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors flex items-start gap-2.5"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-800">About AIM & Trust</div>
                      <div className="text-xs text-slate-500">History, vision, and affiliations</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigate('chairman')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors flex items-start gap-2.5"
                  >
                    <Award className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-800">Chairman's Message</div>
                      <div className="text-xs text-slate-500">Sh. Narayanbhau Agrawal</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigate('director')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors flex items-start gap-2.5"
                  >
                    <Users className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-800">Director's Message</div>
                      <div className="text-xs text-slate-500">Dr. Rahul Kulkarni</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAcademicsDropdownOpen(true)}
              onMouseLeave={() => setAcademicsDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('academics')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activePage.startsWith('program-') || activePage === 'academics'
                    ? 'text-[#0F2137] bg-slate-100'
                    : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
                }`}
              >
                Academics
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              </button>

              {academicsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-4 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Degree Programs (NEP 2020)
                  </div>
                  <button
                    onClick={() => navigate('program-bca')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-start justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-800">BCA (Computer Applications)</div>
                      <div className="text-xs text-slate-500">3-4 Yrs • NEP 2020 Framework</div>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded">UG</span>
                  </button>
                  <button
                    onClick={() => navigate('program-bba')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-start justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-800">BBA (Business Administration)</div>
                      <div className="text-xs text-slate-500">3 Yrs • Business Analytics Minor</div>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded">UG</span>
                  </button>
                  <button
                    onClick={() => navigate('program-mms')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-start justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-800">MMS (Computer Management)</div>
                      <div className="text-xs text-slate-500">2 Yrs Postgraduate Master Degree</div>
                    </div>
                    <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-1.5 py-0.5 rounded">PG</span>
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>
                  <div className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Diploma Courses
                  </div>
                  <button
                    onClick={() => navigate('program-dcm')}
                    className="w-full text-left px-4 py-1.5 text-sm hover:bg-slate-50 transition-colors text-slate-700 hover:text-[#0F2137]"
                  >
                    DCM (Diploma in Computer Management)
                  </button>
                  <button
                    onClick={() => navigate('program-dbm')}
                    className="w-full text-left px-4 py-1.5 text-sm hover:bg-slate-50 transition-colors text-slate-700 hover:text-[#0F2137]"
                  >
                    DBM (Diploma in Business Management)
                  </button>
                </div>
              )}
            </div>

            {/* Admissions */}
            <button
              onClick={() => navigate('admissions')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'admissions'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Admissions
            </button>

            {/* Campus Life */}
            <button
              onClick={() => navigate('campus-life')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'campus-life'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Campus Life
            </button>

            {/* Faculty */}
            <button
              onClick={() => navigate('faculty')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'faculty'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Faculty
            </button>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('resources-notices')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  ['resources-notices', 'resources-downloads'].includes(activePage)
                    ? 'text-[#0F2137] bg-slate-100'
                    : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
                }`}
              >
                Resources
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => navigate('resources-notices')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 text-slate-700"
                  >
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>Official Notices & Circulars</span>
                  </button>
                  <button
                    onClick={() => navigate('resources-downloads')}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors flex items-center gap-2 text-slate-700"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>Syllabus & Downloads</span>
                  </button>
                </div>
              )}
            </div>

            {/* Alumni */}
            <button
              onClick={() => navigate('alumni')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'alumni'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Alumni
            </button>

            {/* Contact */}
            <button
              onClick={() => navigate('contact')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'contact'
                  ? 'text-[#0F2137] bg-slate-100'
                  : 'text-slate-600 hover:text-[#0F2137] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Primary Call To Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden rounded-lg bg-[#0F2137] text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-all duration-200 border border-amber-400/40"
            >
              <span className="relative z-10 flex items-center gap-1.5 text-amber-300 group-hover:text-white">
                <Sparkles className="w-3.5 h-3.5" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => navigate('home')}
              className={`w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${
                activePage === 'home' ? 'text-amber-600 bg-amber-50' : 'text-slate-700'
              }`}
            >
              Home
            </button>

            {/* Mobile About Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                About The Institute
              </div>
              <button
                onClick={() => navigate('about')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>About AIM & Trust</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigate('chairman')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>Chairman's Message</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigate('director')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>Director's Message</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Academics Accordion */}
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                Academic Programs
              </div>
              <button
                onClick={() => navigate('academics')}
                className="w-full text-left px-3 py-1.5 text-sm font-semibold text-slate-800 hover:text-amber-600"
              >
                All Programs Overview
              </button>
              <button
                onClick={() => navigate('program-bca')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>BCA (Computer Applications - NEP)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigate('program-bba')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>BBA (Business Administration)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigate('program-mms')}
                className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:text-amber-600 flex items-center justify-between"
              >
                <span>MMS (Computer Management - PG)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => navigate('program-dcm')}
                className="w-full text-left px-3 py-1 text-xs text-slate-600 hover:text-amber-600"
              >
                • DCM (Diploma in Computer Management)
              </button>
              <button
                onClick={() => navigate('program-dbm')}
                className="w-full text-left px-3 py-1 text-xs text-slate-600 hover:text-amber-600"
              >
                • DBM (Diploma in Business Management)
              </button>
            </div>

            {/* Direct Mobile Links */}
            <div className="border-t border-slate-100 pt-2 space-y-1">
              <button
                onClick={() => navigate('admissions')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600 flex items-center justify-between"
              >
                <span>Admissions 2025-26</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Active</span>
              </button>
              <button
                onClick={() => navigate('campus-life')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Campus Life & Facilities
              </button>
              <button
                onClick={() => navigate('faculty')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Faculty Directory
              </button>
              <button
                onClick={() => navigate('resources-notices')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Notices & Announcements
              </button>
              <button
                onClick={() => navigate('resources-downloads')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Syllabus & Downloads
              </button>
              <button
                onClick={() => navigate('alumni')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Alumni Network
              </button>
              <button
                onClick={() => navigate('contact')}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-amber-600"
              >
                Contact Campus
              </button>
            </div>

            {/* Mobile Enquiry CTA */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-[#0F2137] text-amber-300 font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
