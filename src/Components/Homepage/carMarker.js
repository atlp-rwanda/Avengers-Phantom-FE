import React, { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";

const icon = L.icon({
  iconSize: [20, 25],
  popupAnchor: [2, -20],
  iconUrl: 'https://res.cloudinary.com/avengersphantom/image/upload/v1656445298/Images/phantomIconCar_flohca.png',
});

export const PhantomBusMarker = ({ data, speed, pause }) => {

  const { lat, lng } = data;
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos, pause]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={speed}
      keepAtCenter={true}
      rotationOrigin="center"
    />
  );
};
