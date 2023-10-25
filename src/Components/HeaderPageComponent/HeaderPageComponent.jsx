import DeleteCategoryComponent from "../DeleteCategoryComponent/DeleteCategoryComponent";
import GeolocationComponent from "../GeolocationComponent/GeolocationComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./styles.css";

function HeaderPageComponent({ handleSearch }) {
  return (
    <header id="fullSection">
      <section id="firstHeader">
        <nav>
          <ul>
            <li>1</li>
            <GeolocationComponent />
            <SearchBarComponent handleSearch={handleSearch} />
            <li>4</li>
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
