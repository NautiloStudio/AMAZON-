"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const { error } = await getSupabase()
        .from("leads")
        .insert({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        });
      if (error) throw error;
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-offwhite placeholder:text-offwhite/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-offwhite/80">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-offwhite/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
          placeholder="you@yourbrand.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-offwhite/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={field}
          placeholder="Tell us about your Amazon store and what you want to improve."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-cyan px-6 py-3.5 font-display font-semibold text-graphite transition hover:bg-apricot disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && (
          <span className="text-cyan">Thanks! We will get back to you soon.</span>
        )}
        {status === "error" && (
          <span className="text-apricot">
            Something went wrong. Please try again or email us at nautilostd@gmail.com.
          </span>
        )}
      </p>
    </form>
  );
}
