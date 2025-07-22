// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ypqugemrwtqtwcdeywyg.supabase.co'; // replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwcXVnZW1yd3RxdHdjZGV5d3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTA2MjcsImV4cCI6MjA2NjkyNjYyN30.b5a1TQh2ZIby77d1BL0F-LPfxFUlF9qedTlr6vZG24Q'; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
