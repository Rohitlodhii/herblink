"use client";

import ChainTable from '@/components/chain/chaintable'

export default function LiveChain() {
  return <div>
   
   <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Blockchain Herb Chain</h1>
      <ChainTable />
    </div>
  </div>
}

