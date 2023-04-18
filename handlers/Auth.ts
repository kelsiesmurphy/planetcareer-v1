import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export const CreateUserProfile = async (data: any, first_name:string) => {
    const session = useSession()
    const supabase = useSupabaseClient()

    console.log(data);
    try {
      await supabase.from("user_profile").insert([
        {
          id: data?.user?.id,
          first_name: first_name,
        },
      ]);
      const companyData = await supabase
        .from("company")
        .insert([{ name: company, owner_id: data?.user?.id }])
        .select();
      await supabase
        .from("user_profile")
        .update({ company_id: companyData?.data?.[0]?.id })
        .eq("id", data?.user?.id);
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };