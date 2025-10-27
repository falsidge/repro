import { createClient } from "@supabase/supabase-js";
const supabaseClient = createClient(
    "https://your-supabase-url.supabase.co",
    "public-anon-key"
);
export default function Welcome() {
    supabaseClient.auth.getSession();
  return null
}
