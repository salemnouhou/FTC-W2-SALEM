import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "./components";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "700"], 
 
});

export const metadata: Metadata = {
  title: "Spending Management — Landing Page Design",
  description: "Spending Management — Landing Page Design",
  icons: {
    icon: '/favicon-browser.png',
    apple: '/favicon-browser.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${jakarta.variable} `}
      >
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
