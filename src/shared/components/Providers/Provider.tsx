"use client";
import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN_KEY } from "@/shared/constants/tokens";
import { useRouter } from "next/navigation";
import { AppProvider, useApp } from "@/shared/contexts/AppContext";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { accessToken: appAccessToken } = useApp();
  const [isClient, setIsClient] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    setAccessToken(localStorage.getItem(ACCESS_TOKEN_KEY));
  }, []);

  const isLoggedIn = !!accessToken && !!appAccessToken;

  useEffect(() => {
    if (isClient && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isClient, router]);

  if (!isClient) {
    return <>loading ...</>;
  }

  return <>{children}</>;
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <AuthGuard>{children}</AuthGuard>
    </AppProvider>
  );
};

export default Provider;
