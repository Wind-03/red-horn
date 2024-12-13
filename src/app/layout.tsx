import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sk = localFont({
  src: "./fonts/Salih Kizilkaya - SK Payidar Regular.ttf",
  variable: "--font-sk",
});
const Megantz = localFont({
  src: "./fonts/Megant‚-Personal-Use.ttf",
  variable: "--font-megantz",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Red Horn's menu",
  description: "View Red Horn's Menu of Exquisite Steak and Wine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Megantz.className} ${sk.className} custom-scrollbar antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
