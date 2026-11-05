import type { Metadata } from "next";
import Link from "next/link";
import LandingPage, { type LandingContent } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/landing-pages";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const title = "Amazon SEO: How to Rank Higher in Amazon Search";
const description =
  "Amazon SEO in plain English: what decides where your product ranks in Amazon search, and the steps US sellers can take to rank higher.";

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
    "Amazon shows the products that best match a shopper’s search and that shoppers are most likely to buy. To rank higher, put the words shoppers actually type into your title, bullet points and backend search terms, then make the listing convincing enough that visitors buy. The sales that follow, together with good listing quality and account health, move the product further up over time.",
  description,
  author: { name: "Filippo Verace", role: "Nautilo Studio" },
  updated: "2026-11-05",
  readMinutes: 6,
  sections: [
    {
      id: "what-is-amazon-seo",
      heading: "What is Amazon SEO?",
      body: (
        <>
          <p>
            Amazon SEO is the work of improving where your products appear when shoppers search in
            the Amazon store. It is not the same as Google SEO. Almost every search on Amazon is
            made by someone ready to buy, so ranking is tied closely to sales.
          </p>
          <p>
            Amazon’s own seller guide says search looks at keywords, titles and descriptions,
            photos and price, and that{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              listing quality and account health can contribute to search rankings
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "how-ranking-works",
      heading: "How does Amazon decide where your product ranks?",
      body: (
        <>
          <p>
            Amazon does not publish its full ranking formula. Its seller guidance points to two
            questions: is this product <strong>relevant</strong> to the search, and do shoppers{" "}
            <strong>choose it</strong>?
          </p>
          <ul>
            <li>
              <strong>Relevance.</strong> The search words appear in your title, bullet points,
              description and backend search terms.
            </li>
            <li>
              <strong>Conversion.</strong> Shoppers who see the listing click on it and buy. Images,
              price, reviews and winning the Featured Offer all play a part.
            </li>
            <li>
              <strong>Sales history.</strong> Products that sell steadily tend to hold their
              position. Best Sellers Rank shows how well a product sells within its category.
            </li>
            <li>
              <strong>Listing quality and account health.</strong> Complete listings that follow
              Amazon’s rules are on safer ground than listings that break them.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "How do you find the keywords shoppers use?",
      body: (
        <>
          <p>Start from what shoppers type, not from what you call the product internally.</p>
          <ol>
            <li>
              <strong>Amazon’s search bar.</strong> Type your main product word and note the
              suggestions Amazon completes for you.
            </li>
            <li>
              <strong>Product Opportunity Explorer.</strong> A free Seller Central tool that shows
              top search terms and search volume trends for a product niche.
            </li>
            <li>
              <strong>Brand Analytics.</strong> If your brand is in Brand Registry, the Top Search
              Terms and Search Query Performance dashboards show which searches lead to clicks and
              sales.
            </li>
            <li>
              <strong>Your Sponsored Products search term report.</strong> It lists the real
              searches that led shoppers to your ads, including ones that converted.
            </li>
          </ol>
          <p>
            Sort what you find into one main keyword, a handful of secondary keywords and a list of
            synonyms or alternate names. Each group goes in a different place in the listing.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Where should your keywords go?",
      body: (
        <>
          <h3>Title</h3>
          <p>
            Lead with what the product is, then the brand and the details shoppers filter by, such
            as size, material or colour. Amazon’s guide says{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              the title limit is 200 characters and recommends no more than 60
            </a>
            . Amazon’s{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              title requirements
            </a>{" "}
            also say a title must not use the same word more than twice.
          </p>
          <h3>Bullet points</h3>
          <p>
            Give each bullet one benefit, start it with a short label and back it up with a fact.
            Use your secondary keywords here where they read naturally.
          </p>
          <h3>Description and A+ content</h3>
          <p>
            Cover materials, dimensions, care and what is in the box. If your brand is registered,
            A+ content lets you show this with images and comparison charts.
          </p>
          <h3>Backend search terms</h3>
          <p>
            Shoppers never see this field, but Amazon’s guide says backend keywords can still help a
            product rank for specific searches. Use it for synonyms, alternate names and common
            misspellings, in lowercase and separated by spaces. Don’t repeat words already in your
            title, and don’t add brand names or ASINs. Amazon caps the field’s length, so check the
            current limit in its{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              search terms guidance
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "turn-visits-into-sales",
      heading: "How do you turn visits into sales?",
      body: (
        <>
          <p>
            Ranking brings shoppers to your listing. The listing then has to convince them, and the
            sales it makes help it rank again.
          </p>
          <ul>
            <li>
              <strong>Images.</strong> A main image on a plain white background, then several angles,
              the product in use and its size.
            </li>
            <li>
              <strong>Price.</strong> Check what similar products cost. A competitive price helps
              you win the Featured Offer next to the Add to Cart button.
            </li>
            <li>
              <strong>Reviews.</strong> Amazon Vine lets eligible brands get early, honest reviews
              on new products.
            </li>
            <li>
              <strong>Testing.</strong> With Brand Registry, Manage Your Experiments lets you test
              two titles, images or descriptions against each other.
            </li>
          </ul>
          <p>
            Want to see this on a real draft?{" "}
            <Link href="/#case-study">Look at our before-and-after listing</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "What are the most common Amazon SEO mistakes?",
      body: (
        <ul>
          <li>
            <strong>Keyword stuffing.</strong> A title packed with repeated keywords is hard to
            read and can break Amazon’s title rules.
          </li>
          <li>
            <strong>Competitor brand names.</strong> Using another brand’s name in your listing or
            search terms is against Amazon’s rules.
          </li>
          <li>
            <strong>Forgetting mobile.</strong> Long titles get cut off on phones, so the most
            important words need to come first.
          </li>
          <li>
            <strong>Changing everything at once.</strong> If you rewrite the title, images and price
            on the same day, you can’t tell which change helped.
          </li>
          <li>
            <strong>Not measuring.</strong> Write down your sessions, conversion rate and ranking
            for your main keyword before you start, so you can compare after.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "Is Amazon SEO different from Google SEO?",
      answer:
        "Yes. Google ranks pages that answer a question; Amazon ranks products that shoppers are likely to buy. Keywords matter on both, but on Amazon your conversion rate and sales history matter much more.",
    },
    {
      question: "How long does Amazon SEO take to work?",
      answer:
        "Amazon picks up listing changes fairly quickly, but ranking follows sales, so judge a change over several weeks rather than a few days. Change one thing at a time so you know what worked.",
    },
    {
      question: "Do backend search terms still matter?",
      answer:
        "Yes. Amazon’s own seller guide says backend keywords can still help a product rank for specific searches. Use them for synonyms and alternate names that don’t fit in the title.",
    },
    {
      question: "Do I need to pay for ads to rank on Amazon?",
      answer:
        "No, but it helps. Amazon says Sponsored Products ads can help offers rise through search results, and the sales they bring add to your product’s sales history.",
    },
    {
      question: "Can Nautilo Studio check my listing?",
      answer:
        "Yes. Send us a link to one Amazon listing through the free review form on this page and we’ll email you what we would improve first.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (Sell on Amazon blog)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
      date: "September 3, 2025",
    },
    {
      publisher: "Amazon Seller Central",
      title: "Product title requirements and guidelines",
      url: TITLE_RULES,
    },
    {
      publisher: "Amazon Seller Central",
      title: "Use search terms effectively",
      url: SEARCH_TERMS_HELP,
    },
  ],
};

export default function AmazonSeoPage() {
  return <LandingPage page={page} />;
}
