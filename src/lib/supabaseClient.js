import { createClient } from '@supabase/supabase-js';

const supa_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubG94c21uZ2x3amxramtzdWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1Mjk4MDgsImV4cCI6MjAyNTEwNTgwOH0.48EqNLhGY_ql_o5eRbHtPOo00oz8k8ax1qjzW59ywgE';
const supa_url = 'https://hnloxsmnglwjlkjksucn.supabase.co';

export const supabase = createClient(supa_url, supa_key);