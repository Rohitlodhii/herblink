"use client";

import { useRouter } from 'next/navigation'
import QRCodeScanner from '@/components/sampleproduct/Scanqr'

export default function ScanQR() {
  const router = useRouter();

  return <div>
    <QRCodeScanner onScanComplete={() => router.push('/product/sampleproduct')}/>
  </div>
}

