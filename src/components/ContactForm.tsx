"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";

type Status = "idle" | "sending" | "sent" | "error";

const subscribeNever = () => () => {};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  // False until React has hydrated, so the form can never submit natively.
  const ready = useSyncExternalStore(subscribeNever, () => true, () => false);

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

  if (status === "sent") {
    return (
      <div role="status" className="self-center rounded-2xl bg-white/5 p-8">
        <p className="font-display text-2xl font-semibold text-cyan">Thanks, we have your message.</p>
        <p className="mt-3 text-offwhite/80">We will reply to the email address you gave us.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl bg-white/8 px-4 py-3.5 text-offwhite ring-1 ring-white/25 transition-shadow duration-150 placeholder:text-offwhite/60 focus:outline-none focus:ring-2 focus:ring-cyan";
  const label = "mb-2 block text-sm font-medium text-offwhite";

  return (
    <form method="post" onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Your challenge
        </label>
        <p id="message-help" className="mb-2 text-sm text-offwhite/80">
          For example: shoppers visit but don&rsquo;t buy, or you don&rsquo;t know what to fix first.
        </p>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          aria-describedby="message-help"
          placeholder="What do you sell, and what would you like to improve?"
          className={field}
        />
      </div>
      <button
        type="submit"
        disabled={!ready || status === "sending"}
        className="w-full rounded-full bg-cyan px-6 py-4 font-display font-semibold text-graphite transition-transform duration-150 ease-out active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-apricot">
          We could not send your message. Try again, or email us at nautilostd@gmail.com.
        </p>
      )}
      <p className="text-sm text-offwhite/75">
        We only use your details to reply to you. Read our{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-cyan">
          privacy note
        </Link>
        .
      </p>
    </form>
  );
}
