import React, { useEffect, useState } from "react";
import useReverseGeocoding from "../../Hooks/useReverseGeocoding";
import "./styles.css";

function GeolocationComponent() {
  const [userCoords, setUserCoords] = useState(null);

  //Obtenemos las coordenadas globales del usuario
  const getUserCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({
            Latitude: pos.coords.latitude,
            Longitude: pos.coords.longitude,
          });
        },
        (error) => {
          console.log(`Error getting user location: ${error}`);
        }
      );
    } else {
      console.log("No se admite geolocalización");
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, []);

  // Utiliza el hook personalizado para obtener los datos de geolocalización inversa
  const { locationData, loading } = useReverseGeocoding(
    userCoords?.Latitude,
    userCoords?.Longitude
  );

  return (
    <section>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section id="locationSection">
          <img src="/public/map-pin.svg" alt="" />
          <span>
            Entrega en {locationData?.town}, {locationData?.postcode}
          </span>
        </section>
      )}
    </section>
  );
}

export default GeolocationComponent;
