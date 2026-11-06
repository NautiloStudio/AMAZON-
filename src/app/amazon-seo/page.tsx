import type { Metadata } from "next";
import Link from "next/link";
import LandingPage, { type LandingContent } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/landing-pages";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const title = "Amazon SEO for US Sellers: Rank Higher | Nautilo Studio";
const description =
  "Amazon SEO for US sellers: what decides where your product ranks, where your keywords belong and the mistakes to avoid. Get a free listing review today.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/amazon-seo` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/amazon-seo`,
    siteName: "Nautilo Studio",
    type: "article",
  },
};

const page: LandingContent = {
  slug: "amazon-seo",
  breadcrumb: "Amazon SEO",
  question: "How do you rank higher in Amazon search results?",
  answer:
    "Amazon shows the products that best match a search and that shoppers are most likely to buy. Put the words shoppers type into your title, bullets and backend search terms, then make the listing convincing enough to sell. Those sales, with good listing quality, push the product higher over time.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Magnifying glass leaning against a small parcel",
    tile: "bg-cyan",
  },
  updated: "2026-11-06",
  facts: [
    { value: 200, suffix: " chars", label: "Title limit in Amazon’s SEO guide" },
    { value: 60, suffix: " chars", label: "Title length Amazon recommends" },
    { value: 2, suffix: "×", label: "Most times a word may appear in a title" },
    { value: 4, label: "Places to find real search terms" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "How does Amazon decide where you rank?",
      body: (
        <ul>
          <li>
            <strong>Relevance.</strong> The search words appear in your title, bullets, description
            and backend search terms.
          </li>
          <li>
            <strong>Conversion.</strong> Shoppers click and buy. Images, price, reviews and the
            Featured Offer all play a part.
          </li>
          <li>
            <strong>Sales history.</strong> Products that sell steadily tend to keep their position.
          </li>
          <li>
            <strong>Listing quality.</strong> Amazon says{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              listing quality and account health can contribute to rankings
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "How do you find the keywords shoppers use?",
      body: (
        <ul>
          <li>
            <strong>Amazon’s search bar.</strong> Type your product word and note what Amazon
            suggests.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> A free Seller Central tool with top
            search terms for a niche.
          </li>
          <li>
            <strong>Brand Analytics.</strong> For Brand Registry brands: which searches lead to
            clicks and sales.
          </li>
          <li>
            <strong>Search term report.</strong> The real searches that led shoppers to your
            Sponsored Products ads.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Where should your keywords go?",
      body: (
        <ul>
          <li>
            <strong>Title.</strong> What the product is first. Amazon’s guide gives{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              a 200-character limit and recommends 60 or fewer
            </a>
            , and its{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              title rules
            </a>{" "}
            allow a word at most twice.
          </li>
          <li>
            <strong>Bullet points.</strong> One benefit each, with your secondary keywords where they
            read naturally.
          </li>
          <li>
            <strong>Description and A+ content.</strong> Materials, size, care and what’s in the box.
          </li>
          <li>
            <strong>Backend search terms.</strong> Synonyms and misspellings, with no repeats, brand
            names or ASINs. Check the{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              current length limit
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "common-mistakes",
      heading: "What are the most common mistakes?",
      body: (
        <>
          <ul>
            <li>
              <strong>Keyword stuffing.</strong> Hard to read, and it can break Amazon’s title rules.
            </li>
            <li>
              <strong>Competitor brand names.</strong> Using them in your listing or search terms is
              against Amazon’s rules.
            </li>
            <li>
              <strong>Forgetting phones.</strong> Long titles get cut off, so the key words go first.
            </li>
            <li>
              <strong>Changing everything at once.</strong> Then you can’t tell which change helped.
            </li>
          </ul>
          <p>
            Ranking brings shoppers in. Our{" "}
            <Link href="/listing-optimization">listing optimization guide</Link> covers turning
            those visits into sales.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Is Amazon SEO different from Google SEO?",
      answer:
        "Yes. Google ranks pages that answer a question, while Amazon ranks products shoppers are likely to buy. On Amazon, conversion and sales history matter much more.",
    },
    {
      question: "How long does Amazon SEO take to work?",
      answer:
        "Ranking follows sales, so judge a change over several weeks rather than a few days, and change one thing at a time.",
    },
    {
      question: "Do I need to pay for ads to rank on Amazon?",
      answer:
        "No, but they can help. Amazon says Sponsored Products ads can help offers rise through search results, and their sales add to your product’s history.",
    },
    {
      question: "Can Nautilo Studio check my listing?",
      answer:
        "Yes. Send us one Amazon listing through the free review form on this page and we’ll email you what we would improve first.",
    },
  ],
};

export default function AmazonSeoPage() {
  return <LandingPage page={page} />;
}
