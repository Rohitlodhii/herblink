"use client";

import Navbar from '@/components/shared/Navbar'

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

