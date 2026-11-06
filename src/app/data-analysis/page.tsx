import type { Metadata } from "next";
import Link from "next/link";
import LandingPage, { type LandingContent } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/landing-pages";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const title = "Amazon Data Analysis: Which Numbers Matter | Nautilo Studio";
const description =
  "The Amazon numbers US sellers should track every week, what each one tells you and where to find it in Seller Central. Get a free listing review today.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/data-analysis` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/data-analysis`,
    siteName: "Nautilo Studio",
    type: "article",
  },
};

const page: LandingContent = {
  slug: "data-analysis",
  breadcrumb: "Data analysis",
  question: "Which Amazon numbers should sellers track?",
  answer:
    "Start with four numbers for each product: sessions, conversion rate, whether you hold the Featured Offer, and your advertising cost of sales (ACOS). Together they show whether a problem is about being found, being chosen or spending too much on ads. Check them every week, compare them with the week before, and change one thing at a time.",
  description,
  image: {
    src: "/img/service-data.jpg",
    alt: "Cardboard parcels stacked in rising columns like a bar chart",
    tile: "bg-royal",
  },
  updated: "2026-11-05",
  facts: [
    { value: 4, label: "Numbers to track for every product" },
    { value: 50, suffix: "%", label: "ACOS in Amazon’s example: $50 spent, $100 earned" },
    { value: 1, label: "Day a week for your routine" },
    { value: 1, label: "Problem to fix each week" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Which numbers matter most?",
      body: (
        <ul>
          <li>
            <strong>Sessions.</strong> How many shoppers visited your product page. It tells you
            whether people can find you.
          </li>
          <li>
            <strong>Conversion rate.</strong> The share of those visits that turned into an order.
            It tells you whether the listing convinces them.
          </li>
          <li>
            <strong>Featured Offer.</strong> The offer next to the Buy Now button. Amazon says
            price, availability and shipping play into{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              winning the Featured Offer
            </a>
            , which can lead to large increases in sales.
          </li>
          <li>
            <strong>ACOS.</strong> Ad spend divided by ad revenue. Amazon Ads says your{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS needs to be lower than your profit margin
            </a>{" "}
            for ads to stay profitable.
          </li>
        </ul>
      ),
    },
    {
      id: "what-they-mean",
      heading: "What do the numbers tell you?",
      body: (
        <ul>
          <li>
            <strong>Few sessions.</strong> Shoppers aren’t finding the product. Look at your
            keywords with our <Link href="/amazon-seo">Amazon SEO guide</Link>.
          </li>
          <li>
            <strong>Many sessions, low conversion.</strong> Shoppers arrive but don’t buy. Work on
            the listing with our{" "}
            <Link href="/listing-optimization">listing optimisation guide</Link>.
          </li>
          <li>
            <strong>Featured Offer lost.</strong> Check your price, stock and shipping against the
            other offers on the same product.
          </li>
          <li>
            <strong>ACOS above your margin.</strong> Ads are losing money. Pause the search terms
            that spend without selling before you raise any budget.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-find",
      heading: "Where do you find this data?",
      body: (
        <ul>
          <li>
            <strong>Business Reports.</strong> In Seller Central, under Reports. They show
            sessions, page views and sales for each product.
          </li>
          <li>
            <strong>Brand Analytics.</strong> For brands in Brand Registry. Its{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              Search Query Performance dashboard
            </a>{" "}
            shows impressions, clicks and cart adds for the searches that lead to your products.
          </li>
          <li>
            <strong>Advertising reports.</strong> In the campaign manager. They show ad spend,
            sales, clicks and ACOS for each campaign and search term.
          </li>
          <li>
            <strong>Your own sheet.</strong> One row per week and per product, so you can see
            trends that a single report hides.
          </li>
        </ul>
      ),
    },
    {
      id: "weekly-routine",
      heading: "How do you build a weekly routine?",
      body: (
        <ol>
          <li>Pick one day a week and pull the same reports each time.</li>
          <li>Compare each number with the week before and the same week last month.</li>
          <li>Write down anything you changed, such as price, images or bids, and when.</li>
          <li>Choose one problem to fix this week. Check the result the next week.</li>
        </ol>
      ),
    },
  ],
  faqs: [
    {
      question: "What is a good conversion rate on Amazon?",
      answer:
        "It depends on the category, the price and how shoppers reach you, so there is no single good number. Compare each product with its own history and with similar products in your store.",
    },
    {
      question: "How do you calculate ACOS?",
      answer:
        "Divide ad spend by ad revenue and multiply by 100. Amazon Ads gives the example of $50 spent on a campaign that earned $100, which is an ACOS of 50%.",
    },
    {
      question: "Do I need Brand Registry to analyse my data?",
      answer:
        "Not for the basics. Business Reports and advertising reports are in Seller Central and the campaign manager. Brand Analytics, with search query data, needs a brand in Brand Registry.",
    },
    {
      question: "Can Nautilo Studio analyse my numbers?",
      answer:
        "Yes. Data analysis is one of our services. Send us a listing for a free review, or talk to us about the reports you want to understand.",
    },
  ],
};

export default function DataAnalysisPage() {
  return <LandingPage page={page} />;
}
