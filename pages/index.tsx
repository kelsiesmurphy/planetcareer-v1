import Head from "next/head";
import { Sora } from "next/font/google";
import Navigation from "@/components/index/Navigation";
import Hero from "@/components/index/Hero";
import Faq from "@/components/index/Faq";
import Footer from "@/components/index/Footer";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethical careers made simple. | PlanetCareer</title>
        <meta
          name="description"
          content="Keep track of your job search with our application tracker, built to help you secure your dream job. Ethical job board coming soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col min-h-screen bg-stone-50">
        <Navigation />
        <Hero font={sora}/>
        <Faq font={sora}/>
        <Footer />
      </main>
    </>
  );
}
