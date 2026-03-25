import { MapContainer, TileLayer, GeoJSON, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import thailand from "../data/thailandData.json";
import React, { useEffect, useState } from "react";
import schools from "../data/School.json";

function MapFixer() {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => { map.invalidateSize(); }, 500);
    }, [map]);
    return null;
}
export default function ThailandMap() {
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        setIsReady(true);
    }, []);

    const schoolData = schools.reduce((acc, school) => {
        const province = school.Province?.trim();

        if (!province) return acc;

        acc[province] = (acc[province] || 0) + 1;
        return acc;
    }, {});


    const getColor = (count) => {
        if (count > 4) return "#166534";
        if (count > 2) return "#16a34a";
        if (count > 0) return "#4ade80";
        return "#ffffff"; 
    };

    const getProvinceColor = (feature) => {
        const name = feature.properties.NAME_1 || feature.properties.name; 
        const count = schoolData[name] || 0;

        return {
            fillColor: getColor(count),
            weight: 1,
            color: "#282828",
            fillOpacity: 0.7,
        };
    };

    

    const onEachFeature = (feature, layer) => {
        const name = feature.properties.NAME_1 || feature.properties.name;
        const count = schoolData[name] || 0;
        layer.bindTooltip(`${name}: ${count} schools`, { permanent: false, direction: "top" });
        layer.on({
            mouseover: (e) => {
                e.target.setStyle({
                    weight: 2,
                    color: "#000",
                    fillOpacity: 0.9,
                });
                e.target.bringToFront();
            },
            mouseout: (e) => {
                e.target.setStyle(getProvinceColor(feature));
            }
        
        });
    };
    if (!isReady || !thailand) return null;

    return (
        <div className="w-full h-[600px]  overflow-hidden shadow-lg border border-gray-200 ">
            <MapContainer center={[10.7, 100.5]} zoom={5}
                className="w-full h-full"
                scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <GeoJSON data={thailand.features} style={getProvinceColor} onEachFeature={onEachFeature} />

            </MapContainer>
        </div>
    );
}
