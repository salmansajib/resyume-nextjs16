import { Poppins, Sacramento, Roboto, Teko, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const teko = Teko({
  variable: "--font-teko",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rezyume-NextJs16",
  description:
    "Rezyume A resume template with nextjs version 16 and tailwindcss version 4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} ${sacramento.variable} ${roboto.variable} ${teko.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
