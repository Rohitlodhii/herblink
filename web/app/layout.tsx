import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "@/i18n/index"
import { Toaster } from "@/components/ui/sonner";

const noto = Noto_Sans({
  weight : ['100','200','400','600','800','900']
})

export const metadata: Metadata = {
  title: "Herblink",
  description: "Blockchain based herb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${noto.className} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
