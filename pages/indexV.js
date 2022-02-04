import Head from "next/head";
import Image from "next/image";
import CTAv from "pages/CTAv";
import AboutV from "pages/AboutV";
import HeroV from "pages/HeroV";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alambre Cables V</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroV />
      <AboutV />
      <CTAv />
    </div>
  );
}
