import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { baseMetadata, absoluteUrl } from "@/lib/seo";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/jsonld";

const avenir = localFont({
  src: [
    {
      path: "../assets/fonts/avenir/Avenir Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Heavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = absoluteUrl("/");
  const organizationJsonLd = buildOrganizationJsonLd({
    name: "Mapsko",
    url: siteUrl,
    logo: absoluteUrl("/favicon.ico"),
    sameAs: [
      "https://www.instagram.com/mapskogroup/",
      "https://www.facebook.com/mapskogroup/",
      "https://www.youtube.com/@mapskogroup5591",
      "https://www.linkedin.com/company/mapskogroup/",
    ],
  });

  const websiteJsonLd = buildWebsiteJsonLd({
    url: siteUrl,
    name: "Mapsko",
  });

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="QFOqnwtja_OQlMRo9Sza7QYfCVAVir9BUB1mW8WDYeM"
        />

        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NXBH532K');`}
        </Script>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R6EQWYRJZ1"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R6EQWYRJZ1');
          `}
        </Script>
      </head>
      <body className={`${avenir.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXBH532K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
