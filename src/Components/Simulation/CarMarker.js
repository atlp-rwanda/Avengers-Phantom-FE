import React, { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";
import busIcon from "./../../Assets/phantomIconCar.png";

const icon = L.icon({
  iconSize: [20, 25],
  popupAnchor: [2, -20],
  iconUrl: busIcon,
});

export const PhantomBusMarker = ({ data }) => {
  const { lat, lng } = data;

  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={1000}
      keepAtCenter={true}
      rotationOrigin="center"
    />
  );
};
