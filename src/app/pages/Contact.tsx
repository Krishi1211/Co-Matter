import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    jobTitle: '',
    subject: '',
    segmentInterest: [] as string[],
    message: '',
    stayInTouch: false,
    privacyAcknowledged: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Co▪Matter Platform Inquiry');
    const body = encodeURIComponent(
      `First Name: ${formData.firstName}\n` +
      `Last Name: ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Country: ${formData.country}\n` +
      `Job Title: ${formData.jobTitle}\n` +
      `Subject: ${formData.subject}\n` +
      `Segment Interest: ${formData.segmentInterest.join(', ')}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Stay in touch: ${formData.stayInTouch ? 'Yes' : 'No'}`
    );
    
    window.location.href = `mailto:juiwang@ucdavis.edu?subject=${subject}&body=${body}`;
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      segmentInterest: prev.segmentInterest.includes(value)
        ? prev.segmentInterest.filter(v => v !== value)
        : [...prev.segmentInterest, value]
    }));
  };

  return (
    <div style={{ backgroundColor: '#f0efe5', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#394732' }}>
            Send a Message to Our Team
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We're standing by to answer your questions. Use the form below and we'll route your request to the appropriate team member.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2" style={{ borderColor: '#D8CCB0' }}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                FIRST NAME*
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                style={{ fontFamily: 'EB Garamond' }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                LAST NAME*
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                style={{ fontFamily: 'EB Garamond' }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              EMAIL*
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
              style={{ fontFamily: 'EB Garamond' }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                COMPANY*
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                style={{ fontFamily: 'EB Garamond' }}
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                COUNTRY*
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors appearance-none"
                style={{ fontFamily: 'EB Garamond', backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
              >
                <option value="">Select a country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                JOB TITLE*
              </label>
              <input
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                style={{ fontFamily: 'EB Garamond' }}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                SUBJECT*
              </label>
              <select
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors appearance-none"
                style={{ fontFamily: 'EB Garamond', backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnership Opportunity">Partnership Opportunity</option>
                <option value="Platform Access Request">Platform Access Request</option>
                <option value="Research Collaboration">Research Collaboration</option>
                <option value="Data Contribution">Data Contribution</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Segment Interest */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-stone-700 mb-3">
              SEGMENT INTEREST*
            </label>
            <div className="space-y-2">
              {[
                'Agricultural Processing (Rice, Almond, Walnut)',
                'Material Science & Composites',
                'Sustainable Packaging',
                'Biofuel & Biochar',
                'Research & Academia',
                'Investment & Venture Capital',
                'Policy & Regulation',
              ].map((interest) => (
                <label key={interest} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.segmentInterest.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                    className="w-5 h-5 rounded border-2 border-stone-300 text-stone-700 focus:ring-2 focus:ring-stone-400"
                    style={{ accentColor: '#8F662E' }}
                  />
                  <span className="text-stone-700" style={{ fontFamily: 'EB Garamond' }}>
                    {interest}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              HOW CAN WE HELP YOU?*
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              maxLength={2000}
              className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-stone-400 focus:outline-none transition-colors resize-none"
              style={{ fontFamily: 'EB Garamond' }}
              placeholder="Please describe your inquiry..."
            />
            <div className="text-sm text-stone-500 mt-1">
              Limit to 2000 characters ({formData.message.length}/2000)
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.stayInTouch}
                onChange={(e) => setFormData({ ...formData, stayInTouch: e.target.checked })}
                className="w-5 h-5 rounded border-2 border-stone-300 mt-1 focus:ring-2 focus:ring-stone-400"
                style={{ accentColor: '#8F662E' }}
              />
              <span className="text-sm text-stone-700" style={{ fontFamily: 'EB Garamond' }}>
                Yes, I'd like to stay in touch. Please send me Co▪Matter promotional insights and news.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.privacyAcknowledged}
                onChange={(e) => setFormData({ ...formData, privacyAcknowledged: e.target.checked })}
                className="w-5 h-5 rounded border-2 border-stone-300 mt-1 focus:ring-2 focus:ring-stone-400"
                style={{ accentColor: '#8F662E' }}
              />
              <span className="text-sm text-stone-700" style={{ fontFamily: 'EB Garamond' }}>
                Yes, I have read and acknowledge the Co▪Matter Privacy Statement*
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
            style={{ backgroundColor: '#8F662E' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
          >
            SUBMIT
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-stone-600">
            By submitting this form, your information will be sent to{' '}
            <a 
              href="mailto:juiwang@ucdavis.edu" 
              className="font-semibold hover:underline"
              style={{ color: '#8F662E' }}
            >
              juiwang@ucdavis.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}