import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { QuickActionBar } from './components/QuickActionBar';
import { HomeAboutPreview } from './components/HomeAboutPreview';
import { HomeProgramsPreview } from './components/HomeProgramsPreview';
import { HomeWhyAim } from './components/HomeWhyAim';
import { HomeGlanceStats } from './components/HomeGlanceStats';
import { HomeLeadershipPreview } from './components/HomeLeadershipPreview';
import { HomeFacilitiesPreview } from './components/HomeFacilitiesPreview';
import { HomeNoticesPreview } from './components/HomeNoticesPreview';
import { AboutView } from './components/AboutView';
import { LeadershipView } from './components/LeadershipView';
import { AcademicsView } from './components/AcademicsView';
import { ProgramDetailView } from './components/ProgramDetailView';
import { AdmissionsView } from './components/AdmissionsView';
import { FacultyView } from './components/FacultyView';
import { CampusLifeView } from './components/CampusLifeView';
import { NoticesView } from './components/NoticesView';
import { DownloadsView } from './components/DownloadsView';
import { AlumniView } from './components/AlumniView';
import { ContactView } from './components/ContactView';
import { NotFoundView } from './components/NotFoundView';
import { AdmissionEnquiryModal } from './components/AdmissionEnquiryModal';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProgram, setEnquiryProgram] = useState<string | undefined>(undefined);

  // Sync hash routing with window history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home', 'about', 'chairman', 'director', 'academics',
        'program-bca', 'program-bba', 'program-mms', 'program-dcm', 'program-dbm',
        'admissions', 'faculty', 'campus-life',
        'resources-notices', 'resources-downloads', 'alumni', 'contact'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (hash) {
        setActivePage('not-found');
      }
    };

    // On mount check hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEnquiry = (programName?: string) => {
    if (programName) setEnquiryProgram(programName);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      {/* Universal Sticky Header */}
      <Header
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenEnquiry={() => openEnquiry()}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero
              setActivePage={handleNavigate}
              onOpenEnquiry={() => openEnquiry()}
            />
            <QuickActionBar
              setActivePage={handleNavigate}
              onOpenEnquiry={() => openEnquiry()}
            />
            <HomeAboutPreview
              setActivePage={handleNavigate}
            />
            <HomeProgramsPreview
              setActivePage={handleNavigate}
              onOpenEnquiry={() => openEnquiry()}
            />
            <HomeWhyAim
              setActivePage={handleNavigate}
            />
            <HomeGlanceStats />
            <HomeLeadershipPreview
              setActivePage={handleNavigate}
            />
            <HomeFacilitiesPreview
              setActivePage={handleNavigate}
            />
            <HomeNoticesPreview
              setActivePage={handleNavigate}
            />
          </>
        )}

        {activePage === 'about' && (
          <AboutView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'chairman' && (
          <LeadershipView
            initialRole="chairman"
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'director' && (
          <LeadershipView
            initialRole="director"
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'academics' && (
          <AcademicsView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage.startsWith('program-') && (
          <ProgramDetailView
            programId={activePage.replace('program-', '')}
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'admissions' && (
          <AdmissionsView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'faculty' && (
          <FacultyView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'campus-life' && (
          <CampusLifeView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'resources-notices' && (
          <NoticesView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'resources-downloads' && (
          <DownloadsView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'alumni' && (
          <AlumniView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}

        {activePage === 'not-found' && (
          <NotFoundView
            setActivePage={handleNavigate}
            onOpenEnquiry={() => openEnquiry()}
          />
        )}
      </main>

      {/* Universal Institutional Footer */}
      <Footer
        setActivePage={handleNavigate}
        onOpenEnquiry={() => openEnquiry()}
      />

      {/* High-Conversion Admission Enquiry Modal */}
      <AdmissionEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProgram={enquiryProgram}
      />
    </div>
  );
}
