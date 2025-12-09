import type { Metadata } from "next";
import "@/i18n/index";

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
    <div>
        {children}
    </div>
  );
}
