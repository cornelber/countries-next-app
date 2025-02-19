"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import React from "react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextTopLoader />
      <SessionProvider>{children}</SessionProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
