import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { ActivePage } from '../types';

export interface BreadcrumbItem {
  label: string;
  page?: ActivePage;
}

interface PageBannerProps {
  title: string;
  eyebrow: string;
  eyebrowIcon?: React.ReactNode;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  onNavigate?: (page: ActivePage) => void;
  children?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  eyebrow,
  eyebrowIcon,
  description,
  breadcrumbs = [],
  onNavigate,
  children
}) => {
  return (
    <div className="relative bg-[#0A192F] text-white border-b border-slate-800/80 overflow-hidden min-h-[250px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center py-10 sm:py-12 lg:py-14">
      {/* Consistent background radial pattern & subtle ambient glow */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Global Standard Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3.5">
            <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <button
                  onClick={() => onNavigate ? onNavigate('home') : null}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-400"
                  aria-label="Navigate to Home"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
              </li>

              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    {crumb.page && !isLast && onNavigate ? (
                      <button
                        onClick={() => onNavigate(crumb.page!)}
                        className="hover:text-amber-300 transition-colors text-slate-400"
                      >
                        {crumb.label}
                      </button>
                    ) : (
                      <span className={isLast ? "text-amber-300 font-medium" : "text-slate-400"}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Small Amber Eyebrow */}
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {eyebrowIcon}
            <span>{eyebrow}</span>
          </div>
        </div>

        {/* Main Title - Responsive Clamp Typography */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold font-display text-white tracking-tight leading-[1.2] max-w-4xl mb-3.5">
          {title}
        </h1>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {description}
        </p>

        {/* Optional Extra Elements (CTAs, Badges, etc.) */}
        {children && (
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
