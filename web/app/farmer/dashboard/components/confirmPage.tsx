"use client";

import { FarmerService } from "@/services/farmer/index.farmer";
import { FarmerLicense } from "@/services/farmer/license.farmer";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const ConfirmPageFarmer = () => {
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<any>(null);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [landInfo, setLandInfo] = useState<any>(null);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applyResponse, setApplyResponse] = useState<any>(null);

  // ----------------------------
  // STEP 1: Check profile completion
  // ----------------------------
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await FarmerLicense.checkProfileCompleted();
        setVerificationStatus(res);

        // If no profile completed → then fetch other data
        if (!res?.result || res?.result === null) {
          await fetchFarmerDetails();
        }
      } catch (err) {
        console.error("Failed to load verification status", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  // ----------------------------
  // STEP 2: Fetch farmer userdata + land info
  // ----------------------------
  const fetchFarmerDetails = async () => {
    try {
      const user = await FarmerService.getFarmerData();
      setFarmerData(user);

      const land = await FarmerService.getFarmerLandInfo();
      setLandInfo(land);
    } catch (err) {
      console.error("Error loading farmer details", err);
    }
  };

  // ----------------------------
  // STEP 3: Apply license function
  // ----------------------------
  const handleApply = async () => {
    setApplyLoading(true);
    setApplyResponse(null);

    try {
      const res = await FarmerLicense.applyLicense();
      setApplyResponse(res);
    } catch (err) {
      console.error("License apply failed", err);
      setApplyResponse({ msg: "Failed to apply license" });
    } finally {
      setApplyLoading(false);
    }
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
      <h2 className="text-xl font-semibold">Hello Alok Sharma</h2>

      {/* ----------------------------- */}
      {/* Verification Status           */}
      {/* ----------------------------- */}
      <div>
        <h3 className="text-lg font-semibold">Verification Status</h3>
        <pre className="bg-gray-100 p-3 rounded-md text-sm">
          {JSON.stringify(verificationStatus, null, 2)}
        </pre>
      </div>

      {/* ----------------------------- */}
      {/* Farmer Data                   */}
      {/* ----------------------------- */}
      {farmerData && (
        <div>
          <h3 className="text-lg font-semibold">Farmer User Data</h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm">
            {JSON.stringify(farmerData, null, 2)}
          </pre>
        </div>
      )}

      {/* ----------------------------- */}
      {/* Land Info                     */}
      {/* ----------------------------- */}
      {landInfo && (
        <div>
          <h3 className="text-lg font-semibold">Land Information</h3>
          <pre className="bg-gray-100 p-3 rounded-md text-sm">
            {JSON.stringify(landInfo, null, 2)}
          </pre>
        </div>
      )}

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

        {applyResponse && (
          <div className="mt-3 p-3 bg-blue-100 rounded-md text-sm">
            {JSON.stringify(applyResponse, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmPageFarmer;
