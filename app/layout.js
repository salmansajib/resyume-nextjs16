import { Poppins, Sacramento } from "next/font/google";
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

export const metadata = {
  title: "Rezyume-NextJs16",
  description: "Rezyume A resume template with nextjs version 16",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sacramento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
