import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialIcons from './components/SocialIcons';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadin Answers - The Ultimate Prank & Magic Trick",
  description: "Fool your friends with Kadin Answers, the online magic trick inspired by Peter Answers. Perfect for pranks and jokes in English, Turkish, German, French, and Spanish. Arkadaşlarına şaka yap, Peter Cevaplıyor gibi.",
  keywords: [
    // English
    "Kadin Answers", "Peter Answers", "virtual tarot", "online magic trick", "prank your friends", "scare your friends", "funny jokes", "online illusion", "secret answer", "mind reading trick",
    // Turkish
    "Kadin Cevaplıyor", "Peter Cevaplıyor", "sanal tarot", "online sihir numarası", "arkadaşlarına şaka yap", "arkadaşlarını korkut", "komik şakalar", "online illüzyon", "gizli cevap", "akıl okuma numarası", "şaka sitesi",
    // German
    "Kadin antwortet", "Peter antwortet", "virtuelles Tarot", "Online-Zaubertrick", "Streich an deinen Freunden", "erschrecke deine Freunde", "lustige Witze", "Online-Illusion", "geheime Antwort",
    // French
    "Kadin répond", "Peter répond", "tarot virtuel", "tour de magie en ligne", "faire une blague à tes amis", "effrayer tes amis", "blagues drôles", "illusion en ligne", "réponse secrète",
    // Spanish
    "Kadin responde", "Peter responde", "tarot virtual", "truco de magia en línea", "broma a tus amigos", "asusta a tus amigos", "chistes graciosos", "ilusión en línea", "respuesta secreta"
  ],
  openGraph: {
    title: "Kadin Answers - The Ultimate Prank & Magic Trick",
    description: "Fool your friends with Kadin Answers, the online magic trick inspired by Peter Answers.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR", "de_DE", "fr_FR", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadin Answers - The Ultimate Prank & Magic Trick",
    description: "Fool your friends with Kadin Answers, the online magic trick inspired by Peter Answers.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <SocialIcons />
        <main>{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6532958032774271"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
