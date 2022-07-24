import React, { useState } from 'react'
import {MapContainer, TileLayer, LayersControl} from 'react-leaflet'
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingControl from "../Simulation/RoutingControl";
import "../Simulation/simulation.css";
import './Style.css'
import { PhantomBusMarker } from "../Homepage/carMarker";
import { BusActions } from './BusActions'

const UserMap = ({ props }) => {
    return (
      <>
      <BusActions props={props} />
        <MapContainer
                center={{lat:-1.939662908, lng:30.055666444}}
                zoom={props.isDriver ? 50: 10}
                zoomControl={true}
                scrollWheelZoom={false}
                style={{ zIndex: 1, padding: "100px !important" }}
              >
             <RoutingControl props={props} />
                {/* <LocationMaker /> */}
                {/* <RouteBusMotion /> */}
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="Map">
                    <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                    <PhantomBusMarker props={props} />
                  </LayersControl.BaseLayer>
                </LayersControl>
              </MapContainer>
        </>
    )
}

export default UserMap
