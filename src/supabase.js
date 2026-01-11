import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://iytyktqewurgsxfxfmgn.supabase.co"
const supabaseAnonKey = "sb_publishable_ak-oJV_DZJHyirI-hA1XZg_5zPPR0h8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
