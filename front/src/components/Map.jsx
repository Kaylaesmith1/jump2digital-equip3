import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Card from "./Card";

const Map = () => {
  const iconMarkup = renderToStaticMarkup(
    <div
      style={{ width: "24px", height: "24px", backgroundColor: "red" }}
    ></div> // TODO: fix this customizable marker
  );

  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={customMarkerIcon}>
        <Popup>
          <Card
            name="Museo"
            description="Hola esto es una descripcion"
            type="Centres d'exposicions"
            x="41.3991812"
            y="2.1901921"
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
