import React from 'react'
import {MapContainer, TileLayer, LayersControl} from 'react-leaflet'
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingControl from "../Simulation/RoutingControl";
import "../Simulation/simulation.css";
import './Style.css'
// import {Sidebar} from './SideBar'
import { PhantomBusMarker } from "../Simulation/CarMarker";

const UserMap = ({props}) => {
    const { 
        setPosition, 
        setSummary, 
        currentTrack,
        resume,
        isSlowing,
        pause,
        speed,
      } = props

    return (
        <MapContainer
                center={[-1.939662908, 30.055666444]}
                zoom={10}
                zoomControl={true}
                style={{ width: "100%", height: "85vh" }}
              >
                <RoutingControl
                  setPosition={setPosition}
                  setSummary={setSummary}
                />
                {/* <LocationMaker /> */}
                {/* <RouteBusMotion /> */}
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="Map">
                    <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                    <PhantomBusMarker
                      data={currentTrack ?? { lat: -1.978106, lng: 30.044125 }}
                      speed={speed}
                      resume={resume}
                      isSlowing={isSlowing}
                      pause={pause}
                    />
                  </LayersControl.BaseLayer>
                </LayersControl>
              </MapContainer>
    )
}

export default UserMap
