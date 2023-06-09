import Navigation from "@/components/dashboard_demo/Navigation";
import Table from "@/components/dashboard_demo/Table";
import { Sora } from "next/font/google";
import Head from "next/head";

const sora = Sora({ subsets: ["latin"] });

const Demo = () => {
  return (
    <>
      <Head>
        <title>Dashboard Demo | PlanetCareer</title>
        <meta
          name="description"
          content="Keep track of your job search with our application tracker, built to help you secure your dream job. Ethical job board coming soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col bg-stone-50 items-stretch min-h-screen">
        <Navigation />
        <div className="flex-1 md:ml-[80px] space-y-12 py-12 md:px-6">
          <h1
            className={
              sora.className +
              " text-2xl px-6 md:px-0 md:text-3xl font-medium text-stone-900"
            }
          >
            Welcome back, Jennifer
          </h1>
          <Table />
        </div>
      </main>
    </>
  );
};

export default Demo;
