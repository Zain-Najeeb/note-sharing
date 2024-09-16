import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const RobotoMono = localFont({
  src: "../public/fonts/RobotoMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Note-Sharing",
  description: "Built With Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${RobotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
