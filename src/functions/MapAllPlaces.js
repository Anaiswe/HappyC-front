import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const MapAllPlaces = ({ data }) => {
  return (
    <div>
      <MapContainer
        style={{ height: "200px", width: "500px" }}
        center={[48.866667, 2.333333]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => {
          return (
            <Marker
              key={item.placeId}
              position={[item.location.lat, item.location.lng]}
            >
              <Popup>
                {item.name} <br /> {item.address}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default MapAllPlaces;
