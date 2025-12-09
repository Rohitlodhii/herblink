"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LabRegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    labName: "",
    address: "",
    email: "",
    phone: "",
    accreditation: "",
    licenseNumber: "",
  });

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE || ''}/lab/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: t("entities.lab.error") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">{t("entities.lab.title")}</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="labName"
          placeholder={t("entities.lab.labName")}
          value={formData.labName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder={t("entities.lab.address")}
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder={t("entities.lab.contactEmail")}
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder={t("entities.lab.contactPhone")}
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="accreditation"
          placeholder={t("entities.lab.accreditation")}
          value={formData.accreditation}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="licenseNumber"
          placeholder={t("entities.lab.licenseNumber")}
          value={formData.licenseNumber}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? t("entities.lab.registering") : t("entities.lab.registerButton")}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-50 text-sm">
          {response.error ? (
            <p className="text-red-600">{response.error}</p>
          ) : (
            <>
              <p className="font-semibold text-green-700">
                ✅ {t("entities.lab.registrationSuccess")}
              </p>
              <p><strong>{t("entities.lab.labId")}:</strong> {response.labId}</p>
              <p><strong>{t("entities.lab.adminId")}:</strong> {response.admin?.adminId}</p>
              <p><strong>{t("entities.lab.email")}:</strong> {response.admin?.email}</p>
              <p><strong>{t("entities.lab.password")}:</strong> {response.admin?.password}</p>

              <div className="mt-3 p-2 rounded bg-yellow-100 border border-yellow-400 text-yellow-700 text-xs">
                ⚠️ {t("entities.lab.credentialsWarning")}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LabRegisterForm;
