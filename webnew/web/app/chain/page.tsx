"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import { chainData, type chainDataType } from "@/lib/hardcoded/chaindata";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapDialog } from "@/components/chain/map";

type FormInputs = {
  blockchainID?: string;
  fromDate?: Date;
  toDate?: Date;
};

export default function ChainDataSearch() {
  const { t } = useTranslation();
  const { register, handleSubmit, control, reset } = useForm<FormInputs>();
  const [results, setResults] = useState<chainDataType[]>([]);
  const [searched, setSearched] = useState(false); // to check if user searched
  const router = useRouter();

  const onSubmit = (data: FormInputs) => {
    const filtered = chainData.filter((item) => {
      const matchesID = data.blockchainID
        ? item.blockchainID.toLowerCase().includes(data.blockchainID.toLowerCase())
        : true;

      const matchesFromDate = data.fromDate
        ? item.timestamp >= data.fromDate
        : true;

      const matchesToDate = data.toDate
        ? item.timestamp <= data.toDate
        : true;

      return matchesID && matchesFromDate && matchesToDate;
    });

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen p-4">
      <Button onClick={()=>router.push('/chain/livechain')}>{t("chainSearch.viewLiveChain")}</Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl font-bold text-center">{t("chainSearch.searchTitle")}</h2>
        <input
          {...register("blockchainID")}
          placeholder={t("chainSearch.blockchainIdPlaceholder")}
          className="border p-2 rounded"
        />
        <Controller
          control={control}
          name="fromDate"
          render={({ field }) => (
            <DatePicker
              placeholderText={t("chainSearch.fromDatePlaceholder")}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="border p-2 rounded w-full"
              showTimeSelect
              dateFormat="Pp"
            />
          )}
        />
        <Controller
          control={control}
          name="toDate"
          render={({ field }) => (
            <DatePicker
              placeholderText={t("chainSearch.toDatePlaceholder")}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="border p-2 rounded w-full"
              showTimeSelect
              dateFormat="Pp"
            />
          )}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {t("chainSearch.searchButton")}
        </button>
        <button
          type="button"
          onClick={() => {
            reset();
            setResults([]);
            setSearched(false);
          }}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          {t("chainSearch.resetButton")}
        </button>
      </form>

      {searched && (
        <div className="mt-8 flex flex-col gap-2  items-center justify-center ">
          {results.length === 0 ? (
            <p className="text-center col-span-full">{t("chainSearch.noResults")}</p>
          ) : (
            results.map((item) => (
              <div
                key={item.blockchainID}
                className="border rounded shadow p-4 flex flex-col gap-2 bg-white"
              >
                <p>
                  <strong>{t("chainSearch.blockchainIdLabel")}</strong> {(item.blockchainID).trim().slice(0,7)}...
                </p>
                <p>
                  <strong>{t("chainSearch.nameLabel")}</strong> {item.name}
                </p>
                <p>
                  <strong>{t("chainSearch.eventTypeLabel")}</strong> {item.eventType}
                </p>
                <p>
                  <strong>{t("chainSearch.timestampLabel")}</strong> {item.timestamp.toString()}
                </p>
                <p>
                  <strong>{t("chainSearch.locationLabel")}</strong> {item.location.address}
                </p>
                <MapDialog  coordinates={item.location.coordinates} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

