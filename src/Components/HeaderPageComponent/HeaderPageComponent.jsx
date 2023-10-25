import DeleteCategoryComponent from "../DeleteCategoryComponent/DeleteCategoryComponent";
import LanguageComponent from "../LanguageComponent/LanguageComponent";
import LocationComponent from "../LocationComponent/LocationComponent";
import MainIconComponent from "../MainIconComponent/MainIconComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./styles.css";

function HeaderPageComponent({ handleSearch }) {
  return (
    <header id="fullSection">
      <section id="firstHeader">
        <nav>
          <ul>
            <MainIconComponent />
            <LocationComponent />
            <SearchBarComponent handleSearch={handleSearch} />
            <LanguageComponent />
            <li>5</li>
            {/* Ponemos este componente por si tenemos que borrar alguna categoria. Cuando no haga falta se quedara comentado */}
            {/* <DeleteCategoryComponent /> */}
          </ul>
        </nav>
      </section>
      <section id="secondHeader">
        <nav>
          <ul>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default HeaderPageComponent;
