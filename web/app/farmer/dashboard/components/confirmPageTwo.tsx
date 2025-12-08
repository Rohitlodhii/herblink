import { FarmerService } from "@/services/farmer/index.farmer";
import { FarmerLicense } from "@/services/farmer/license.farmer";
import { Loader } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const ConfirmPageTwo = () => {
  const [loading, setLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<any>(null);

  const [farmerData, setFarmerData] = useState<any>(null);
  const [landInfo, setLandInfo] = useState<any>(null);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applyResponse, setApplyResponse] = useState<any>(null);

  const displayName =
    farmerData?.fullname ||
    farmerData?.fullName ||
    farmerData?.name ||
    "Farmer";

  // ----------------------------
  // Load verification + user + land data
  // ----------------------------
  const fetchAll = useCallback(async () => {
    setLoading(true);

    try {
      const [statusRes, userRes, landRes] = await Promise.all([
        FarmerLicense.checkProfileCompleted().catch((err) => {
          console.error("Failed to load verification status", err);
          return null;
        }),
        FarmerService.getFarmerData().catch((err) => {
          console.error("Error loading farmer details", err);
          return null;
        }),
        FarmerService.getFarmerLandInfo().catch((err) => {
          console.error("Error loading land details", err);
          return null;
        }),
      ]);

      setVerificationStatus(statusRes);
      setFarmerData(userRes);
      setLandInfo(landRes);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // ----------------------------
  // Apply license function
  // ----------------------------
  const handleApply = async () => {
    setApplyLoading(true);
    setApplyResponse(null);

    try {
      const res = await FarmerLicense.applyLicense();
      setApplyResponse(res);
      await fetchAll(); // refresh data after applying
    } catch (err) {
      console.error("License apply failed", err);
      setApplyResponse({ msg: "Failed to apply license" });
    } finally {
      setApplyLoading(false);
    }
  };

  // ----------------------------
  // Loading screen
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
      <h2 className="text-xl font-semibold">Hello {displayName}</h2>

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

export default ConfirmPageTwo;
