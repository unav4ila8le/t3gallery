import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery for testing",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white p-4">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <p className="text-2xl font-bold">Sign In</p>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} bg-black text-white`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
