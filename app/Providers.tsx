"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const client = new QueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
