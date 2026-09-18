import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Train, 
  Car, 
  Building2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ActivePage, ContactFormState } from '../types';
import { siteData } from '../data/site';
import { PageBanner } from './PageBanner';

interface ContactViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenEnquiry: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActivePage, onOpenEnquiry }) => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Academic Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Standardized Page Banner */}
      <PageBanner
        title="Contact AIM Chalisgaon"
        eyebrow="Visit or Get in Touch"
        eyebrowIcon={<MapPin className="w-3.5 h-3.5" />}
        description="We welcome prospective students, parents, researchers, and alumni to visit our campus or connect with our administrative desk."
        breadcrumbs={[{ label: 'Contact Campus' }]}
        onNavigate={setActivePage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 space-y-12">
        {/* Quick Contact Cards - Unified Component Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Campus Location
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ghat Road, Next to Market Yard, Aurangabad Road (Dhule Road Link), Chalisgaon, Dist. Jalgaon, Maharashtra – 424101
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Landmark: Next to Market Yard
            </div>
          </div>

          {/* Card 2: Phones */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Official Helplines
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Admissions Desk:</span>
                  <a href="tel:+917770081314" className="hover:text-amber-600 font-bold text-slate-900">+91 7770081314</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Office Desk:</span>
                  <a href="tel:+917350076444" className="hover:text-amber-600 font-bold text-slate-900">+91 7350076444</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Office Landline:</span>
                  <a href="tel:02589222169" className="hover:text-amber-600 font-bold text-slate-900">02589-222169</a>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Lines active during working hours
            </div>
          </div>

          {/* Card 3: Timings & Emails */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/60">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Working Hours & Emails
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div>
                  <div className="font-semibold text-slate-700">Office Timings:</div>
                  <div className="text-slate-900 font-medium">Mon – Sat: 10:00 AM – 5:30 PM</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-700">Director's Desk:</div>
                  <a href="mailto:aim.director@gmail.com" className="hover:text-amber-600 text-amber-700 font-semibold break-all">aim.director@gmail.com</a>
                </div>
                <div>
                  <div className="font-semibold text-slate-700">Office Desk:</div>
                  <a href="mailto:aim.office@rediffmail.com" className="hover:text-amber-600 text-slate-700 break-all">aim.office@rediffmail.com</a>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Sunday & University Holidays: Closed
            </div>
          </div>
        </div>

        {/* Form and Directions 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                Inquiry Desk
              </span>
              <h2 className="text-2xl font-bold text-[#0F2137] font-display">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500">
                Reach out to the college administration with questions regarding admissions, verification, or university credentials.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 font-display">Message Sent</h3>
                <p className="text-xs text-emerald-800">
                  Thank you, {formState.name}. Your query has been forwarded to the college office. We will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Candidate or Parent Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 bg-white"
                    >
                      <option value="General Academic Enquiry">General Academic Enquiry</option>
                      <option value="Admission Procedure & Fees">Admission Procedure & Fees</option>
                      <option value="Scholarships (MahaDBT)">Scholarships (MahaDBT)</option>
                      <option value="Alumni Reconnection">Alumni Reconnection</option>
                      <option value="Verification & Transcript">Verification & Transcript</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Write your query in detail..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 bg-[#0F2137] hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Transit & Commute Guide */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                Travel Directions
              </span>
              <h3 className="text-xl font-bold text-[#0F2137] font-display">
                Reaching Chalisgaon Campus
              </h3>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Train className="w-4 h-4 text-amber-600" />
                  <span>Via Chalisgaon Railway Junction</span>
                </div>
                <p className="leading-relaxed">
                  Chalisgaon is a major Central Railway junction connected to Mumbai, Bhusawal, Pune, and Nagpur. The campus is located just 2.5 km from the railway station (approx. 7–10 minutes by auto-rickshaw).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-amber-600" />
                  <span>Via Road & State Highway</span>
                </div>
                <p className="leading-relaxed">
                  Situated prominently on Ghat Road, next to the Chalisgaon Agricultural Produce Market Yard (Market Yard), with direct links to Aurangabad Road and Dhule Road. Regular MSRTC state transport buses connect Chalisgaon with Jalgaon, Dhule, Pachora, and Aurangabad.
                </p>
              </div>
            </div>

            {/* Map Preview / Location Box */}
            <div className="p-5 rounded-2xl bg-[#0F2137] text-white space-y-3">
              <div className="font-bold text-amber-400 text-sm font-display">
                Location on Google Maps
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Search "Smt. S. M. Agrawal Institute of Management Chalisgaon" or "AIM College Chalisgaon" on Google Maps for turn-by-turn navigation.
              </p>
              <a
                href="https://maps.google.com/?q=Smt+S+M+Agrawal+Institute+of+Management+Chalisgaon"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
