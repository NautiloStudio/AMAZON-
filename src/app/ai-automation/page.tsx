import type { Metadata } from "next";
import LandingPage, { type LandingContent } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/landing-pages";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "AI Automation for US Amazon Sellers | Nautilo Studio";
const description =
  "AI automation helps US Amazon sellers save time on listings, inventory and reports. See what to automate and what to keep human. Get a free listing review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/ai-automation` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/ai-automation`,
    siteName: "Nautilo Studio",
    type: "article",
  },
};

const page: LandingContent = {
  slug: "ai-automation",
  breadcrumb: "AI automation",
  question: "How can AI automation help Amazon sellers?",
  answer:
    "AI automation takes over repetitive work like drafting listing content, watching inventory and summarizing reports. Amazon now offers tools for this, including its free Seller Assistant, which can monitor your account and act with your approval. You still make the decisions, so AI saves you time without replacing your judgment.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "White robotic arm placing a parcel at the end of a neat row",
    tile: "bg-graphite",
  },
  updated: "2026-11-05",
  sections: [
    {
      id: "what-to-automate",
      heading: "Which Amazon tasks can AI automate?",
      body: (
        <ul>
          <li>
            <strong>Listing content.</strong> AI suggests titles, attributes and descriptions. You
            check the facts and the brand voice.
          </li>
          <li>
            <strong>Inventory and account health.</strong> AI flags slow-moving stock and account
            issues. You decide what to fix.
          </li>
          <li>
            <strong>Ad concepts.</strong> AI generates ad ideas for your products. You choose what
            runs and set the budget.
          </li>
          <li>
            <strong>Reporting.</strong> AI turns sales and traffic reports into short summaries. You
            decide what the changes mean.
          </li>
        </ul>
      ),
    },
    {
      id: "amazon-tools",
      heading: "What AI tools does Amazon already offer?",
      body: (
        <ul>
          <li>
            <strong>
              <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
                Seller Assistant
              </a>
              .
            </strong>{" "}
            Free for sellers in the US store. It monitors your account and can act with your
            permission.
          </li>
          <li>
            <strong>
              <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
                Workflows
              </a>
              .
            </strong>{" "}
            Custom automations that keep running. You choose between recommendations and actions.
          </li>
          <li>
            <strong>
              <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
                Enhance My Listing
              </a>
              .
            </strong>{" "}
            Suggests listing improvements you can edit or decline. Check whether your account has
            access.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-human",
      heading: "What should stay in human hands?",
      body: (
        <ul>
          <li>
            <strong>Product claims.</strong> Anything about safety, materials or results needs a
            person to check it.
          </li>
          <li>
            <strong>Your brand.</strong> Your voice and what makes your product different.
          </li>
          <li>
            <strong>Money decisions.</strong> Pricing, ad budgets and overall strategy.
          </li>
          <li>
            <strong>Final approval.</strong> Any change to a live listing or campaign.
          </li>
        </ul>
      ),
    },
    {
      id: "how-to-start",
      heading: "How do you start with AI automation?",
      body: (
        <ol>
          <li>Pick one task you repeat every week.</li>
          <li>Let AI recommend, and review what it suggests before anything changes.</li>
          <li>Give it more to do only once you trust the results.</li>
        </ol>
      ),
    },
  ],
  faqs: [
    {
      question: "Is Amazon’s Seller Assistant free?",
      answer: "Yes. Amazon says Seller Assistant is free and available to all sellers in the US store.",
    },
    {
      question: "Can AI write my whole Amazon listing?",
      answer:
        "AI can draft most of it, but you should still check the result. Amazon’s Enhance My Listing lets sellers review, customize or decline each suggestion.",
    },
    {
      question: "Will AI change my account without asking?",
      answer:
        "Amazon says sellers review and approve Seller Assistant’s actions before they’re carried out, and every action is logged.",
    },
    {
      question: "Can Nautilo Studio help me set this up?",
      answer:
        "Yes. AI automation is one of our services. Send us a listing for a free review, or talk to us about the tasks you want to automate.",
    },
  ],
};

export default function AiAutomationPage() {
  return <LandingPage page={page} />;
}
