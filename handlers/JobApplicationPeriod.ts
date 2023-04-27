import { supabase } from "@/supabaseClient";

class JobApplicationPeriodHandler {
  createJobApplicationPeriod = async (userProfile:any) => {
    const { data, error } = await supabase.from("job_application_period").insert([
      {
        user_profile_id: userProfile[0].user_id
      },
    ]).select()
    if (error) throw error;
    return data;
  };
}

export default JobApplicationPeriodHandler;