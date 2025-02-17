'use client';

import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
import React from "react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
};
