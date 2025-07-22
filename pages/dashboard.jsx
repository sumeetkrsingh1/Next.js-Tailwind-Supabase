import DashboardLayout from '@/components/layout/DashboardLayout';
import Storeinformation from '../components/StoreInformation';
import BusinessHours from "../components/BusinessHours";
import PasswordSecurity from "../components/PasswordSecurity";
import StoreSidebarRight from "../components/StoreSidebarRight";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/'); 
    };
    checkUser();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 space-y-6">
          <Storeinformation />
          <BusinessHours />
          <PasswordSecurity />
        </div>

        <StoreSidebarRight />
      </div>
    </DashboardLayout>
  );
}
