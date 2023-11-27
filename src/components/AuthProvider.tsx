"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
