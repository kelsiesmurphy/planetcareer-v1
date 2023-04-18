import Navigation from "@/components/dashboard/Navigation";
import Table from "@/components/dashboard/Table";
import Head from "next/head";
import { Sora } from "next/font/google";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import { Database } from "../utils/database.types";
import { useEffect, useState } from "react";
type UserProfile = Database["public"]["Tables"]["user_profile"]["Row"];

const sora = Sora({ subsets: ["latin"] });

const Dashboard = () => {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();

  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [first_name, setFirstName] = useState<UserProfile["first_name"]>(null);
  const [profile_img, setProfileImg] =
  useState<UserProfile["profile_img"]>(null);
  const [user_profile_id, setUserProfileId] = useState<UserProfile["id"]>();
  const [githubProfileImg, setGithubProfileImg] = useState(null);

  useEffect(() => {
    getProfile();
    setGithubProfileImg(user?.user_metadata.avatar_url);
  }, [session, user]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("user_profile")
        .select(`first_name, profile_img`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFirstName(data.first_name);
        setProfileImg(data.profile_img);
        setUserProfileId(user.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Head>
        <title>{first_name}&apos;s Dashboard | PlanetCareer</title>
        <meta
          name="description"
          content="Keep track of your job search with our application tracker, built to help you secure your dream job. Ethical job board coming soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex flex-col bg-stone-50 items-stretch min-h-screen">
        <Navigation
          profile_img={profile_img}
          github_profile_img={githubProfileImg}
          first_name={first_name}
        />
        <div className="flex-1 md:ml-[80px] space-y-12 py-12 md:px-6">
          <h1
            className={
              sora.className +
              " text-2xl px-6 md:px-0 md:text-3xl font-medium text-stone-900"
            }
          >
            Welcome back, {first_name}
          </h1>
          <Table session={session} supabase={supabase} user={user}/>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
