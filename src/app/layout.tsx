import type { Metadata } from "next";
import "../styles/globals.scss";
import Header from "@/components/Header";

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
        <div className='mx-[140px]'>
            {children}
        </div>
      </body>
    </html>
  );
}