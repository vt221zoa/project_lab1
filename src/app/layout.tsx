import type { Metadata } from "next";
import "../styles/globals.scss";

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
    <html lang="uk">
      <body>
        {children}
      </body>
    </html>
  );
}