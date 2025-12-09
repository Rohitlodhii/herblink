"use client";

import { useState, useEffect } from "react";
import type { chainDataType, farmerDataType, labDataType, manufacturerDataType, processorDataType } from "../../lib/hardcoded/chaindata";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { MapDialog } from "./map";


// Responsive hook to switch between Dialog (desktop) and Drawer (mobile)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

interface DataDialogProps {
  data: chainDataType;
}

export function DataDialog({ data }: DataDialogProps) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Helper to render content based on data.otherData type
  const renderOtherData = () => {
    if ("farmID" in data.otherData) {
      const d = data.otherData as farmerDataType;
      return (
        <>
          <p><b>{t("chain.farmID")}:</b> {d.farmID}</p>
          <p><b>{t("chain.herb")}:</b> {d.herbname}</p>
          <p><b>{t("chain.harvestDate")}:</b> {d.harvestDate.toString()}</p>
          <p><b>{t("chain.quantity")}:</b> {d.Quantity}</p>
          <p><b>{t("chain.landSize")}:</b> {d.landSize}</p>
        </>
      );
    }
    if ("processorId" in data.otherData) {
      const d = data.otherData as processorDataType;
      return (
        <>
          <p><b>{t("chain.processorId")}:</b> {d.processorId}</p>
          <p><b>{t("chain.herb")}:</b> {d.herbname}</p>
          <p><b>{t("chain.buyDate")}:</b> {d.BuyDate.toString()}</p>
          <p><b>{t("chain.quantity")}:</b> {d.Quantity}</p>
          <p><b>{t("chain.grinding")}:</b> {d.grinding ? t("chain.yes") : t("chain.no")}</p>
          <p><b>{t("chain.moisture")}:</b> {d.moisture ? t("chain.yes") : t("chain.no")}</p>
        </>
      );
    }
    if ("manufacturerId" in data.otherData) {
      const d = data.otherData as manufacturerDataType;
      return (
        <>
          <p><b>{t("chain.manufacturerId")}:</b> {d.manufacturerId}</p>
          <p><b>{t("chain.herb")}:</b> {d.herbname}</p>
          <p><b>{t("chain.productionDate")}:</b> {d.productionDate.toString()}</p>
          <p><b>{t("chain.batchNumber")}:</b> {d.batchNumber}</p>
          <p><b>{t("chain.quantity")}:</b> {d.Quantity}</p>
          <p><b>{t("chain.productType")}:</b> {d.productType}</p>
        </>
      );
    }
    if ("labId" in data.otherData) {
      const d = data.otherData as labDataType;
      return (
        <>
          <p><b>{t("chain.labId")}:</b> {d.labId}</p>
          <p><b>{t("chain.herb")}:</b> {d.herbname}</p>
          <p><b>{t("chain.testDate")}:</b> {d.testDate.toString()}</p>
          <p><b>{t("chain.batchNumber")}:</b> {d.batchNumber}</p>
          <p><b>{t("chain.purity")}:</b> {d.purity}</p>
          <p><b>{t("chain.passed")}:</b> {d.passed ? t("chain.yes") : t("chain.no")}</p>
        </>
      );
    }
    return <p>{t("chain.noAdditionalData")}</p>;
  };

  const content = (
    <>
      
      <p><b>{t("chain.name")}:</b> {data.name}</p>
      <p><b>{t("chain.location")}:</b> {data.location.address} ({data.location.coordinates})</p>
      <MapDialog coordinates={data.location.coordinates} />

      <div className="mt-4">
        <h3 className="font-semibold">{t("chain.otherData")}</h3>
        {renderOtherData()}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("chain.details")}</DrawerTitle>
            <DrawerDescription>{t("chain.fullRecordDetails")}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-2">{content}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("chain.details")}</DialogTitle>
          <DialogDescription>{t("chain.fullRecordDetails")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">{content}</div>
      </DialogContent>
    </Dialog>
  );
}


