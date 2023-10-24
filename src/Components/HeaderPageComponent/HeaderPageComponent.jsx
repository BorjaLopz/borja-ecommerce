import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./styles.css";

function HeaderPageComponent({ handleSearch }) {
  return (
    <header id="fullSection">
      <section id="firstHeader">
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <SearchBarComponent handleSearch={handleSearch} />
            <li>4</li>
            <li>5</li>
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
