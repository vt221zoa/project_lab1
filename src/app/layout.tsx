import type { Metadata } from "next";
import "../styles/globals.scss";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "AniMan",
  description: "Енциклопедія аніме й манги",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='mx-[115px] mt-[50px] mb-[20px] px-[25px] pb-[20px] pt-[8px] bg-[#D9D9D9] shadow-block h-max'>
            {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}