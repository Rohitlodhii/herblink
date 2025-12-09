"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FarmPlotForm } from "./landinfo/farmPlotFrom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FarmerService } from "@/services/farmer/index.farmer";
import { FarmerUpdates } from "@/services/farmer/update.farmer";
import { toast } from "sonner";
import SureDialog from "@/components/helper/SureDialog";


// Fix leaflet default marker
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function LandInfoSection() {
  const [farms, setFarms] = useState<number[]>([0]); // your existing field forms
  const [landInfo, setLandInfo] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const addFarm = () => setFarms((prev) => [...prev, Date.now()]);
  const removeFarm = (id: number) => setFarms((prev) => prev.filter((f) => f !== id));

  // Fetch saved land info on first mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FarmerService.getFarmerLandInfo();
        setLandInfo(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [refreshKey]);

  const [ deleteLoading , setDeleteLoading] = useState(false);
  async function deleteLandInfo ( id : string ) {
    try {
       setDeleteLoading(true);
       const res = await FarmerUpdates.deleteFarmerLandInfo(id);
       setRefreshKey(prev => prev + 1);
      toast.success("land Deleted successfully");
      setDeleteLoading(false);
    } catch (error) { 
        console.log(error);
        toast.error("Failed to delete landinformation");
    }
  } 

  return (
    <div className="space-y-6 p-4 w-full h-full">
      {/* SAVED FARM PLOTS SECTION */}
      <h2 className="text-xl font-bold">Saved Farm Plots</h2>

      <div className="space-y-4">
        {loading && <p>Loading saved land info...</p>}
        {!loading && landInfo.length === 0 && <p>No saved land found.</p>}

        {landInfo.map((farm) => {
          const firstCoordinate = farm.coordinates[0];
          return (
            <div
              key={farm.id}
              className="border rounded-lg p-4 shadow-sm bg-card space-y-3"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base">
                  Khasra No: {farm.khasraNumber}
                </h3>
                {/* MAP DIALOG BUTTON */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="sm">View on Map</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Land Location</DialogTitle>
                    </DialogHeader>
                    <div className="h-[450px] overflow-hidden rounded-md">
                      <MapContainer
                        center={[firstCoordinate.lat, firstCoordinate.lng]}
                        zoom={16}
                        style={{ height: "100%", width: "100%" }}
                      >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[firstCoordinate.lat, firstCoordinate.lng]} />
                      </MapContainer>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex items-center justify-between">
                <p><span className="font-medium">Total Hectare:</span> {farm.totalHectare}</p>
                <Button onClick={() => setOpen(true)} variant={"destructive"} className="max-w-fit">Delete</Button>
               <SureDialog open={open} onOpenChange={setOpen} onConfirm={()=>deleteLandInfo(farm.id)} loading={deleteLoading} setLoading={setDeleteLoading}/>
              </div>
            </div>
          );
        })}
      </div>

      {/* --------------------------- */}
      {/* EXISTING FARM FORMS (YOUR CODE) */}
      {/* --------------------------- */}
      <div className="space-y-4 pb-20">
        {farms.map((id, idx) => (
          <FarmPlotForm
            key={id}
            index={idx}
            onRemove={farms.length > 1 ? () => removeFarm(id) : undefined}
          />
        ))}

        <Button variant="outline" type="button" onClick={addFarm}>
          + Add another farm
        </Button>
      </div>
    </div>
  );
}
