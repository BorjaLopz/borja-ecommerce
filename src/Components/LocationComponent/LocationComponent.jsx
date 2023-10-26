import { useState } from "react";
import ChangeLocationComponent from "../ChangeLocationComponent/ChangeLocationComponent";
import GeolocationComponent from "../GeolocationComponent/GeolocationComponent";
import "./styles.css";

function LocationComponent({ handleClick, handleClose, setElementoClickado }) {
  /* AQUI TENDREMOS QUE GESTIONAR EL CAMBIO DE LOCALIZACIÓN */
  return (
    <li>
      <section id="locationComponentSection">
        <GeolocationComponent />
        <ChangeLocationComponent />
      </section>
    </li>
  );
}

export default LocationComponent;
