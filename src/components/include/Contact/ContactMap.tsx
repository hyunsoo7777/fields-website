import React, { useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "800px",
};
const center = {
  lat: 37.5502596,
  lng: 127.073139,
};
const locations = {
  name: "field-s",
  location: { lat: 37.5502596, lng: 127.073139 },
};
// 움직이게 하는 걸 멈출려면 옵션 추가
// const options = {
//   mapTypeControl: false,
//   streetViewControl: false,
//   fullscreenControl: false,
// };
function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(17);
    setMap(map);
    console.log("hey");
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker key={locations.name} position={locations.location} />
      </GoogleMap>
    </div>
  ) : (
    <div>loading</div>
  );
}

//정적 이미지로 넣을 경우
// function ContactMap() {
//   return (
//     <div>
//       <img
//         src={`https://maps.googleapis.com/maps/api/staticmap?center=37.5502596,127.073139&zoom=16&size=600x800&markers=color:red|label:S|37.5502596,127.073139&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
//         alt=""
//       />
//     </div>
//   );
// }

export default React.memo(ContactMap);
