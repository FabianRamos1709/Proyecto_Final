import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/Mapa.css";

const Mapa = () => {
  return (
    <MapContainer center={{lat: "2.9437787", lng: "-75.299244"}} zoom={16}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={{lat: "2.9437787", lng: "-75.299244"}}>
            <Popup>Carniceria Gourmet</Popup>
        </Marker>
    </MapContainer>
  )
}

export default Mapa
