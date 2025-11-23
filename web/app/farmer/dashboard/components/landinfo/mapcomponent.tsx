"use client"
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

// must load after leaflet
import "leaflet-draw"; 

interface Props {
  onShapesChange?: (data: any[]) => void;
}

const AdvancedLandMap = ({ onShapesChange }: Props) => {
  const mapRef = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());

  useEffect(() => {
    if (mapRef.current) return; // prevent double init

    const map = L.map("advanced-map", {
      center: [23.2599, 77.4126], // Bhopal center
      zoom: 13,
    });
    mapRef.current = map;

    // Basemaps
    const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    });
    const googleSatellite = L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", // satellite + labels
        {
          maxZoom: 22,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      );

    osm.addTo(map);

    const baseMaps = {
      osm,
      googleSatellite,
    };

    // Feature group for drawn layers
    const drawnItems = drawnItemsRef.current;
    map.addLayer(drawnItems);

    // Add drawing controls (all tools)
    const drawControl = new L.Control.Draw({
        draw: {
            polygon: {},
            polyline: {},
            rectangle: {},
            circle: {},
            marker: {},
            circlemarker: {},
          },
          
      edit: {
        featureGroup: drawnItems,
        remove: true,
      },
    });
    map.addControl(drawControl);

    // Layer switcher & draw layer toggle
    L.control.layers(baseMaps, { drawlayer: drawnItems }, { collapsed: false }).addTo(map);

    map.on(L.Draw.Event.CREATED, (event: any) => {
      drawnItems.addLayer(event.layer);
      emitShapes();
    });

    map.on(L.Draw.Event.EDITED, emitShapes);
    map.on(L.Draw.Event.DELETED, emitShapes);

    function emitShapes() {
      if (!onShapesChange) return;

      const output: any[] = [];

      drawnItems.eachLayer((layer: any) => {
        if (layer.getLatLngs) {
          // polygon / polyline / rectangle
          const latlngs = layer.getLatLngs().flat(2).map((p: any) => ({
            lat: p.lat,
            lng: p.lng,
          }));
          output.push({ type: "polygon", points: latlngs });
        } else if (layer.getLatLng) {
          // marker / circle center
          output.push({ type: "point", point: layer.getLatLng() });
        }
      });

      onShapesChange(output);
    }
  }, [onShapesChange]);

  return (
    <div
      id="advanced-map"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

export default dynamic(() => Promise.resolve(AdvancedLandMap), { ssr: false });
