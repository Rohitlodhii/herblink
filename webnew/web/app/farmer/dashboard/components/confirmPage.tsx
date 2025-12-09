"use client";

import { FarmerLicense } from "@/services/farmer/license.farmer";
import { Loader } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

const ConfirmPageFarmer = () => {
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<any>(null);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applyResponse, setApplyResponse] = useState<any>(null);
  const applyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const verificationText =
    verificationStatus?.result === true
      ? "Verified"
      : "Not verified";

  // ----------------------------
  // Load verification status
  // ----------------------------
  const fetchAll = useCallback(async () => {
    setLoading(true);

    try {
      const statusRes = await FarmerLicense.checkProfileCompleted().catch(
        (err) => {
          console.error("Failed to load verification status", err);
          return null;
        }
      );

      setVerificationStatus(statusRes);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();

    return () => {
      if (applyTimeoutRef.current) {
        clearTimeout(applyTimeoutRef.current);
      }
    };
  }, [fetchAll]);

  // ----------------------------
  // STEP 3: Apply license function
  // ----------------------------
  const handleApply = () => {
    if (applyTimeoutRef.current) {
      clearTimeout(applyTimeoutRef.current);
    }

    setApplyLoading(true);
    setApplyResponse(null);

    applyTimeoutRef.current = setTimeout(() => {
      setApplyResponse({ msg: "License applied successfully" });
      setApplyLoading(false);
    }, 2000); // 2-second loader before showing success
  };

  // ----------------------------
  // LOADING SCREEN
  // ----------------------------
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center">
        <Loader className="animate-spin" size={32} />
      </div>
    );
  }

  return (
    <div className="p-5 space-y-6">
      <h2 className="text-xl font-semibold">Confirm & Apply</h2>

      {/* ----------------------------- */}
      {/* Verification Status           */}
      {/* ----------------------------- */}
      <div>
        <h3 className="text-lg font-semibold">Verification Status</h3>
        <div className="bg-gray-100 p-3 rounded-md text-sm">
          <p className="font-medium">{verificationText}</p>
        </div>
      </div>

      {/* ----------------------------- */}
      {/* Apply License Button          */}
      {/* ----------------------------- */}
      <div className="pt-4">
        <button
          onClick={handleApply}
          disabled={applyLoading}
          className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          {applyLoading ? "Applying..." : "Apply License"}
        </button>

        {applyResponse?.msg && (
          <div className="mt-3 p-3 bg-blue-100 rounded-md text-sm">
            {applyResponse.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmPageFarmer;
