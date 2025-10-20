import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenology Engineering — Cyprus",
  description: "Electrical Installations & Smart Home (KNX) in Cyprus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
