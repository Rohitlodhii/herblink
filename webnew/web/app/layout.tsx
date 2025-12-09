import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FontSizeProvider } from "@/components/context/FontSizeContext";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Toaster } from "@/components/ui/sonner";
import "react-datepicker/dist/react-datepicker.css";

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
          <I18nProvider>
            <FontSizeProvider>
              <main style={{ position: 'relative', zIndex: 1 }}>
                {children}
              </main>
              <Toaster />
            </FontSizeProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
