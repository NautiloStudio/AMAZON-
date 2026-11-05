import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Amazon Marketing Agency for US Sellers | Nautilo Studio";
const description =
  "The marketing team your Amazon store doesn’t have. Data and AI to help US Amazon sellers grow and convert more. Get a free listing review.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "Nautilo Studio", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // Keeps smooth scrolling for in-page links but lets Next.js jump to the top of a new page.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only rounded-full bg-royal px-5 py-3 text-offwhite focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
