import Head from "next/head";
import CTABar from "components/CTABar";
import HeroSection from "components/HeroSection";
import AboutSection from "@components/AboutSection";
import ProductSection from "@components/ProductSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alambre Cables</title>
        <meta
          name="description"
          content="For over 40 years, the alambre family has been building cables and relationships that last. As a diversified cable manufacturing company Alambre is recognized as one of leading cable manufacturers in India."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <CTABar />
    </div>
  );
}
