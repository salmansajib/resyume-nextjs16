import {
  Poppins,
  Sacramento,
  Roboto,
  Teko,
  Rubik,
  Inter,
  Taviraj,
  Playfair_Display,
  Jost,
  Lora,
  DM_Sans,
  Plus_Jakarta_Sans,
  EB_Garamond,
} from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const taviraj = Taviraj({
  variable: "--font-taviraj",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const jost = Jost({
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plusJakartaSans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const ebGaramond = EB_Garamond({
  variable: "--font-ebGaramond",
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${poppins.variable} ${sacramento.variable} ${roboto.variable} ${teko.variable} ${rubik.variable} ${inter.variable} ${taviraj.variable} ${playfairDisplay.variable} ${jost.variable} ${lora.variable} ${dmSans.variable} ${plusJakartaSans.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
