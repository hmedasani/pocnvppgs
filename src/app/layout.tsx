import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/globals.css"
import Providers from "@/providers";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import WrapWholePage from "@/components/shared/layout";
import { APP_DESCRIPTION, APP_NAME, APP_PUBLIC_SERVER_URL } from "../lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s || ${APP_NAME}`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_PUBLIC_SERVER_URL),
};

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <WrapWholePage>
            <Header />
            {children}
            <Footer />
          </WrapWholePage>
        </Providers>
      </body>
    </html>
  );
}
