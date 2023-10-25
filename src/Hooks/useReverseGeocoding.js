import { useState, useEffect } from "react";

// Hook personalizado para geolocalización inversa
function useReverseGeocoding(latitude, longitude) {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLocation = async () => {
    try {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=be65d38028ec43c4bfcbb4b0f4cd0a0e`
      );
      const data = await res.json();
      setLocationData({
        town: data?.results[0]?.components?.town,
        postcode: data?.results[0]?.components?.postcode,
      });
    } catch (e) {
      console.log(`Ha ocurrido un error: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      // Realiza la solicitud de geolocalización inversa aquí, utilizando fetch o el método que prefieras
      // Luego, actualiza setLocationData con los resultados y setLoading a false
      // Asegúrate de manejar errores apropiadamente
      getLocation();
    }
  }, [latitude, longitude]);

  return { locationData, loading };
}

export default useReverseGeocoding;
