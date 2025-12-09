"use client";

import Navbar from "@/components/core/Navbar/Navbar";
import Heropage from "@/components/shared/Heropage";
import FAQ from "@/components/shared/faq";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heropage />
      <FAQ />
      <Footer />
    </div>
  );
}
