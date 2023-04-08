import Navigation from "@/components/dashboard_demo/Navigation";
import Table from "@/components/dashboard_demo/Table";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const Demo = () => {
  return (
    <div className="flex bg-stone-50 items-stretch min-h-screen">
      <Navigation />
      <div className="flex-1 ml-[80px] space-y-12 py-12 md:px-6">
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
    </div>
  );
};

export default Demo;
