import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const MapLeafLet = ({ data }) => {
  return (
    <div>
      <MapContainer
        style={{ height: "200px", width: "500px" }}
        center={[data.location.lat, data.location.lng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.location.lat, data.location.lng]}></Marker>
        <Popup position={[data.location.lat, data.location.lng]}>
          <div className="popup">
            <h4>{data.name}</h4>
            {data.type}
            {data.address}
          </div>
        </Popup>
      </MapContainer>
    </div>
  );
};
export default MapLeafLet;
