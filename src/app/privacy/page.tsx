import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy note | Nautilo Studio",
  description: "What Nautilo Studio does with the details you send through the contact form.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm font-medium text-royal underline underline-offset-4">
        Back to the homepage
      </Link>
      <h1 className="mt-8 font-display text-4xl font-bold tracking-tight">Privacy note</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
        <p>
          Nautilo Studio is a student project at TBS Education Barcelona, run by Carlo Ambrosini,
          Maria Giraldo, Veronika Matkovska and Filippo Verace.
        </p>
        <p>
          When you use our contact form we collect your name, your email address and your message.
          We use them only to reply to you.
        </p>
        <p>
          Your message is stored in our Supabase database, hosted in the European Union. This site
          sets no advertising cookies.
        </p>
        <p>
          To see or delete your details, write to{" "}
          <a href="mailto:nautilostd@gmail.com" className="text-royal underline underline-offset-4">
            nautilostd@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
