import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import AuthProvider from "@/components/AuthProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitme",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <AuthProvider>
          <div>
            <ReduxProvider>{children}</ReduxProvider>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
