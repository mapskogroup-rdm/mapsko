import IndexRoute from "@/views/index/index-route";
import { absoluteUrl, toOgImage } from "@/lib/seo";

export const metadata = {
  title: "Premium Real Estate Developer in Gurgaon | Mapsko Group",
  description:
    "Mapsko Group is a leading real estate developer in Gurgaon and NCR, offering luxury homes, plots, and commercial properties backed by 30+ years of trust.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    url: absoluteUrl("/"),
    images: toOgImage("/assets/og-default.webp"),
  },
};

export default function Home() {
  return <IndexRoute />;
}
