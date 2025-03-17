import { Geist, Geist_Mono, Rubik_Bubbles, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikBubbles = Rubik_Bubbles({
  variable: "--font-rubik-bubbles",
  subsets: ["hebrew"],
  weight: ['400'],
});

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans_hebrew",
  subsets: ["hebrew"],
  weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata = {
  title: "זול סלט",
  description: "כל הארץ סלטים",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body dir="rtl"
        className={` ${notoSansHebrew.variable} ${rubikBubbles.variable} ${geistSans.variable} ${geistMono.variable}  
                        antialiased `} 
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
