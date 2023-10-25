import ChangeLocationComponent from "../ChangeLocationComponent/ChangeLocationComponent";
import GeolocationComponent from "../GeolocationComponent/GeolocationComponent";
import "./styles.css";

function LocationComponent() {
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
