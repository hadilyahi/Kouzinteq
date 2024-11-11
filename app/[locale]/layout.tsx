import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "كوزينتك",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}> 
        <div>
          {/* <NavBar locale={locale}/> */}
          {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
