import { useState } from "react";

import DeleteCategoryComponent from "../DeleteCategoryComponent/DeleteCategoryComponent";
import LanguageComponent from "../LanguageComponent/LanguageComponent";
import LocationComponent from "../LocationComponent/LocationComponent";
import MainIconComponent from "../MainIconComponent/MainIconComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./styles.css";
import LogInHeaderComponent from "../LogInHeaderComponent/LogInHeaderComponent";

function HeaderPageComponent({ handleSearch }) {
  const [elementoClickado, setElementoClickado] = useState(null);

  const handleClick = (e) => {
    setElementoClickado(e);
  };

  const handleClose = () => {
    setElementoClickado(null);
  };

  return (
    <header id="fullSection">
      <section id="firstHeader">
        <nav>
          <ul>
            <MainIconComponent />
            <LocationComponent />
            <SearchBarComponent handleSearch={handleSearch} />
            <LanguageComponent />
            <LogInHeaderComponent />
            {/* Ponemos este componente por si tenemos que borrar alguna categoria. Cuando no haga falta se quedara comentado */}
            {/* <DeleteCategoryComponent /> */}
          </ul>
        </nav>
      </section>
      <section id="secondHeader">
        <nav>
          <ul>
            <li className="liNavMenu">6</li>
            <li className="liNavMenu">7</li>
            <li className="liNavMenu">8</li>
            <li className="liNavMenu">9</li>
            <li className="liNavMenu">10</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default HeaderPageComponent;
