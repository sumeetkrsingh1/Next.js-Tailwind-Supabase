import { useEffect } from 'react';
import { useRouter } from 'next/router';
export const runtime = "experimental-edge";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); 
  }, []);

  return null;
}
