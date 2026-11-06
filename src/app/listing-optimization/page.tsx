import type { Metadata } from "next";
import Link from "next/link";
import LandingPage, { type LandingContent } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/landing-pages";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const title = "Amazon Listing Optimization for US Sellers | Nautilo Studio";
const description =
  "How to optimize an Amazon listing so more visitors buy: titles, bullet points, images, A+ content and testing. Free PDF guide and free listing review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/listing-optimization` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/listing-optimization`,
    siteName: "Nautilo Studio",
    type: "article",
  },
};

const page: LandingContent = {
  slug: "listing-optimization",
  breadcrumb: "Listing optimisation",
  question: "How do you optimize an Amazon listing so more shoppers buy?",
  answer:
    "Listing optimization means improving your title, bullet points, images and A+ content so that shoppers who land on your page choose to buy. Start with clear images and a title that says exactly what the product is, then use your bullet points to answer the questions buyers have before they order. Test one change at a time and keep the version that sells better.",
  description,
  image: {
    src: "/img/service-listing.jpg",
    alt: "Bamboo cutting board with a blank paper tag",
    tile: "bg-apricot",
  },
  updated: "2026-11-05",
  facts: [
    { value: 9, label: "Photos Amazon lets you upload" },
    { value: 85, suffix: "%", label: "Of the frame the product should fill" },
    { value: 5, label: "Bullet points per listing" },
    { value: 8, prefix: "Up to ", suffix: "%", label: "More sales Amazon reports for basic A+ content" },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "Which parts of an Amazon listing matter most?",
      body: (
        <ul>
          <li>
            <strong>Title.</strong> Say what the product is, then the brand and the details
            shoppers compare, such as size or colour. Our{" "}
            <Link href="/amazon-seo">Amazon SEO guide</Link> covers which words to use.
          </li>
          <li>
            <strong>Images.</strong> Amazon lets you{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              upload up to nine photos
            </a>
            . Its photo tips recommend a white background and a product that{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              fills 85% or more of the frame
            </a>
            .
          </li>
          <li>
            <strong>Bullet points.</strong> You get up to five. Give each one a single benefit and
            back it up with a fact shoppers can check.
          </li>
          <li>
            <strong>A+ content.</strong> Extra images and text below the listing for brands in
            Brand Registry. Amazon says{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              basic A+ content can increase sales by up to 8%
            </a>
            , based on its internal data.
          </li>
        </ul>
      ),
    },
    {
      id: "signs",
      heading: "How do you know a listing needs work?",
      body: (
        <>
          <p>
            Amazon gives a simple example:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              a listing with high views but low sales
            </a>{" "}
            may need better images or descriptions.
          </p>
          <ul>
            <li>
              <strong>Many visits, few orders.</strong> Shoppers find you but aren’t convinced.
              Work on images, bullet points and A+ content.
            </li>
            <li>
              <strong>Few visits.</strong> Shoppers aren’t finding the listing. Start with{" "}
              <Link href="/amazon-seo">Amazon SEO</Link> instead.
            </li>
            <li>
              <strong>The same questions keep coming up.</strong> If reviews and customer
              questions repeat a doubt, answer it in your bullets or images.
            </li>
            <li>
              <strong>Returns for “not as described”.</strong> The listing promises something the
              product doesn’t match. Fix the wording before you spend more on traffic.
            </li>
          </ul>
          <p>
            Not sure which numbers to look at? Our{" "}
            <Link href="/data-analysis">data analysis guide</Link> explains them.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "How do you test what works?",
      body: (
        <ol>
          <li>
            Pick one element, such as the main image or the title. Change only that.
          </li>
          <li>
            If your brand is in Brand Registry, use Amazon’s{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            to show two versions to shoppers and compare the results.
          </li>
          <li>Let the test run long enough to collect real orders, not just a few days.</li>
          <li>Keep the winning version, then move on to the next element.</li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      heading: "What mistakes stop shoppers from buying?",
      body: (
        <ul>
          <li>
            <strong>Blurry or dark images.</strong> Shoppers can’t touch the product, so the
            photos have to do that job.
          </li>
          <li>
            <strong>Features without benefits.</strong> “Stainless steel” means more when you say
            it keeps drinks cold.
          </li>
          <li>
            <strong>Claims you can’t back up.</strong> They lead to returns and bad reviews, and
            can break Amazon’s rules.
          </li>
          <li>
            <strong>Details that don’t match.</strong> The title, bullets and images should all
            describe the same size, colour and contents.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "How many images should an Amazon listing have?",
      answer:
        "Amazon lets you upload up to nine photos and says the more, the better. Start with a clean white-background main image, then add angles, the product in use and its size.",
    },
    {
      question: "Is A+ content worth it?",
      answer:
        "Usually, if you can use it. Amazon says basic A+ content can increase sales by up to 8%, based on its internal data. It is free for eligible brands in Brand Registry.",
    },
    {
      question: "What is the difference between listing optimization and Amazon SEO?",
      answer:
        "Amazon SEO helps shoppers find your listing. Listing optimization helps the shoppers who arrive decide to buy. You need both, and the sales from a better listing also support your ranking.",
    },
    {
      question: "Can Nautilo Studio review my listing?",
      answer:
        "Yes. Send us a link to one Amazon listing through the free review form on this page and we’ll email you what we would improve first.",
    },
  ],
};

export default function ListingOptimizationPage() {
  return <LandingPage page={page} />;
}
