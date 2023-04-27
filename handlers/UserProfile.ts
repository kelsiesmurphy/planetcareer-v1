import { supabase } from "@/supabaseClient";

class UserProfileHandler {
  createUserProfile = async (userData:any, firstName:string) => {
    const { data, error } = await supabase.from("user_profile").insert([
      {
        id: userData.user.id,
        first_name: firstName,
        email: userData.user.email,
        user_id: userData.user.id
      },
    ]).select()
    if (error) throw error;
    return data;
  };
  
  updateUserProfileWithJobPeriodId = async (jobPeriodData:any) => {
    const { data, error } = await supabase
      .from('user_profile')
      .update({ current_application_period_id: jobPeriodData[0].id })
      .eq('user_id', jobPeriodData[0].user_profile_id)
      .select()
    if (error) throw error;
    return data;
  };
}

export default UserProfileHandler;
