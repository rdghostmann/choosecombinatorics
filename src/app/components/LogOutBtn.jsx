"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LogOutBtn = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    router.push('/');
  };

  // Clear user data after 50 minutes
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLogout();
    }, 50 * 60 * 1000); // 50 minutes

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white p-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-500"
    >
      Log Out
    </button>
  );
};

export default LogOutBtn;
