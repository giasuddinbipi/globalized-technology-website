"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const subject = encodeURIComponent(`Website enquiry from ${String(data.get("name") || "visitor")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-950";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Name *
          <input className={fieldClass} type="text" name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Business email *
          <input className={fieldClass} type="email" name="email" required autoComplete="email" placeholder="name@company.com" />
        </label>
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Company
          <input className={fieldClass} type="text" name="company" autoComplete="organization" placeholder="Company name" />
        </label>
        <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Phone
          <input className={fieldClass} type="tel" name="phone" autoComplete="tel" placeholder="Phone number" />
        </label>
        <label className="text-sm font-semibold text-slate-800 sm:col-span-2 dark:text-slate-200">
          Service needed
          <select className={fieldClass} name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Web development</option>
            <option>App development</option>
            <option>Web or email hosting</option>
            <option>VPS or server solution</option>
            <option>VPN or network solution</option>
            <option>ISP service</option>
            <option>IT consultation or support</option>
            <option>Business subscriptions</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-800 sm:col-span-2 dark:text-slate-200">
          Project details *
          <textarea className={fieldClass} name="message" required rows={6} placeholder="Describe your requirements, expected users, timeline, and any current system." />
        </label>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
        <Send className="size-4" />
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        {status === "success" && "Thank you. Your enquiry has been sent."}
        {status === "error" && "The form could not be sent. Please email or call us directly."}
        {status === "idle" && !endpoint && "This starter currently opens your email application. Add a form endpoint in .env.local for direct submission."}
      </p>
    </form>
  );
}
