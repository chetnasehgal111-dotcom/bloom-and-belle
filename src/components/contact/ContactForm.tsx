"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    subject: initialSubject,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setServerError(data.error || "Unable to send your inquiry. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again or reach us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="p-8 sm:p-10 bg-brand-ivory-cream border border-brand-gold/40 text-center space-y-4 shadow-subtle"
      >
        <div className="w-14 h-14 rounded-full bg-brand-emerald/10 text-brand-gold flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl text-brand-emerald">
          Thank You, {formData.name}!
        </h3>
        <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light max-w-md mx-auto leading-relaxed">
          Your message has been received by the Bloom &amp; Belle team. Our styling concierge will respond to <strong>{formData.email}</strong> within 24 business hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                category: "General Inquiry",
                subject: "",
                message: "",
              });
            }}
            className="text-xs text-brand-emerald underline hover:text-brand-gold font-medium uppercase tracking-wider"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-brand-gold/30 p-6 sm:p-10 shadow-subtle space-y-5"
    >
      {serverError && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Priya Sharma"
            className={`w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border font-light focus:outline-none transition-colors ${
              errors.name
                ? "border-red-400 focus:border-red-500"
                : "border-brand-gold/30 focus:border-brand-gold"
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="priya@example.com"
            className={`w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border font-light focus:outline-none transition-colors ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-brand-gold/30 focus:border-brand-gold"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone & Inquiry Type Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
          >
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 00000"
            className="w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border border-brand-gold/30 focus:border-brand-gold font-light focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
          >
            Inquiry Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border border-brand-gold/30 focus:border-brand-gold font-light focus:outline-none transition-colors"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Availability">Product Availability &amp; Sizing</option>
            <option value="Styling Consultation">Personal Styling Consultation</option>
            <option value="Order & Shipping">Shipping &amp; Delivery Question</option>
            <option value="Wholesale / Press">Wholesale, Collab &amp; Press</option>
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Sizing inquiry for Niloufar Kurti"
          className="w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border border-brand-gold/30 focus:border-brand-gold font-light focus:outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-sans tracking-wider uppercase text-brand-emerald font-medium mb-1.5"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about the outfit, size, or questions you have..."
          className={`w-full px-3.5 py-2.5 text-xs bg-brand-ivory/50 border font-light focus:outline-none transition-colors ${
            errors.message
              ? "border-red-400 focus:border-red-500"
              : "border-brand-gold/30 focus:border-brand-gold"
          }`}
        />
        {errors.message && (
          <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Privacy Notice */}
      <p className="text-[11px] text-brand-charcoal/60 font-light">
        We respect your privacy. Your information is used strictly to assist with your styling and order inquiries according to our{" "}
        <a href="/privacy-policy" className="text-brand-emerald underline">
          Privacy Policy
        </a>.
      </p>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={submitting}
        size="lg"
        className="w-full sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2 text-brand-gold" />
            <span>Submit Inquiry</span>
          </>
        )}
      </Button>
    </form>
  );
}
