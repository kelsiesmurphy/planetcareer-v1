import { supabase } from "@/supabaseClient";

class AuthHandler {
    createSignUp = async (email:string, password:any) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) throw error;
        return data;
    };
}

export default AuthHandler;
  