"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuthMiddleware = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (isAuthenticated !== 'true' || !username || !password) {
      router.push('/'); 
    }
  }, [router]);

  return null;
};

export default useAuthMiddleware;
