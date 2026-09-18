import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Mail, AlertCircle, Loader2 } from 'lucide-react';
import { AdmissionEnquiryState } from '../types';

interface AdmissionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const AdmissionEnquiryModal: React.FC<AdmissionEnquiryModalProps> = ({ 
  isOpen, 
  onClose,
  defaultProgram = 'BCA (Bachelor of Computer Applications)'
}) => {
  const [formData, setFormData] = useState<AdmissionEnquiryState>({
    fullName: '',
    mobile: '',
    email: '',
    program: defaultProgram,
    previousQualification: '12th (HSC) Passed / Appearing',
    city: 'Chalisgaon',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionEnquiryState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof AdmissionEnquiryState, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.program) errs.program = 'Please select a program';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional client-side submission with instant response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      program: defaultProgram,
      previousQualification: '12th (HSC) Passed / Appearing',
      city: 'Chalisgaon',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F2137] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Academic Year 2025-26 Admissions</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Admission & Program Enquiry
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Smt. S. M. Agrawal Institute of Management (AIM), Chalisgaon
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 max-h-[78vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Enquiry Recorded Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your enquiry for <span className="text-amber-700 font-semibold">{formData.program}</span> has been noted. Our admission desk will reach out to you shortly.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Direct Admission Office Contact:
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>+91 7770081314 / +91 7350076444</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>aim.director@gmail.com</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Office Hours: Monday – Saturday, 10:00 AM – 5:30 PM (Ghat Road, Chalisgaon)
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#0F2137] text-amber-300 hover:text-white font-bold rounded-xl text-sm transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Candidate Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Ramesh Patil"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-amber-500'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile and Email in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit Mobile (e.g. 9823000000)"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.mobile ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Program Interested In *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 bg-white"
                >
                  <option value="BCA (Bachelor of Computer Applications)">
                    BCA - Bachelor of Computer Applications (4-Yr NEP 2020)
                  </option>
                  <option value="BBA (Bachelor of Business Administration)">
                    BBA - Bachelor of Business Administration (3-Yr)
                  </option>
                  <option value="MMS (Master of Management Studies)">
                    MMS - Master of Management Studies (Computer Management - 2-Yr)
                  </option>
                  <option value="DCM (Diploma in Computer Management)">
                    DCM - Diploma in Computer Management (1-Yr)
                  </option>
                  <option value="DBM (Diploma in Business Management)">
                    DBM - Diploma in Business Management (1-Yr)
                  </option>
                </select>
              </div>

              {/* Qualification and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current / Past Qualification
                  </label>
                  <select
                    value={formData.previousQualification}
                    onChange={(e) => setFormData({ ...formData, previousQualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="12th (HSC) Passed / Appearing">12th (HSC) Passed / Appearing</option>
                    <option value="12th Science">12th Science Stream</option>
                    <option value="12th Commerce">12th Commerce Stream</option>
                    <option value="12th Arts">12th Arts Stream</option>
                    <option value="Diploma Holder (MSBTE/Govt)">3-Yr Technical Diploma</option>
                    <option value="Graduate (Any Stream)">Bachelor's Degree Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Town / City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Chalisgaon, Jalgaon, Dhule"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Questions / Specific Enquiry (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask regarding syllabus, scholarship eligibility, admission documents, or timing..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Admission Enquiry</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Your details are kept confidential and used solely for AIM Chalisgaon admissions communication.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
