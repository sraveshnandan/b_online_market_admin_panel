import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ReduxProvider from "@/providers/redux.provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B Online Market - Powered by XecureCode",
  description: "This admin is designed and developed by XecureCode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <ReduxProvider>
          {children}
          <Toaster position="top-center" richColors={true} />
        </ReduxProvider>
      </body>
    </html>

  );
}
