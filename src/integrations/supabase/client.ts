// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rfzxvmodbszgabbgatrm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmenh2bW9kYnN6Z2FiYmdhdHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMTQwNTAsImV4cCI6MjA2NDc5MDA1MH0.rZDQxze9g_tJShANobGLHJC8OY0lKXjUqp7o-ACzoB4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);