import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wagmi from "./libs/wagmi/WagmiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Faucet",
  description: "A Free and Open faucet design to bring pizza to the people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wagmi>
            {children}
        </Wagmi>
      </body>
    </html>
  );
}