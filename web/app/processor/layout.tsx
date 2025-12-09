import type { Metadata } from "next";
import "@/i18n/index";

export const metadata: Metadata = {
  title: "Herblink - Processor",
  description: "Blockchain based herb",
};

export default function ProcessorLayout({
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

