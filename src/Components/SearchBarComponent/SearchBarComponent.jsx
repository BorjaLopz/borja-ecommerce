import { useEffect, useState } from "react";
import "./styles.css";
import useFetch from "../../Hooks/useFetch";

function SearchBarComponent({ handleSearch }) {
  const [filter, setFilter] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/categories"
  );

  const [inputFocused, setInputFocused] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const handleInputFocus = (focused) => {
    setInputFocused(focused);
  };

  const handleSelectFocus = (focused) => {
    setSelectFocused(focused);
  };

  // console.log("data");
  // console.log(data);
  // data?.map((c) => {
  //   console.log(c.name);
  // });

  const inputHandler = (e) => {
    let lowerText = e.target.value.toLowerCase();
    setFilter(lowerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(filter);
  };

  return (
    <form
      id="searchForm"
      className={`select-input ${inputFocused ? "focus" : ""}`}
      onSubmit={handleSubmit}
    >
      <select
        className={`select-input ${selectFocused ? "focus" : ""}`}
        id="searchSelect"
        onFocus={() => handleSelectFocus(true)}
        onBlur={() => handleSelectFocus(false)}
      >
        <option key={0} value={"Todos los departamentos"}>
          {"Todos los departamentos"}
        </option>
        {loading !== true ? (
          data?.map((c) => {
            return (
              <option
                key={c.id}
                value={c.name.slice(0, 1).toUpperCase() + c.name.slice(1)}
              >
                {c.name.slice(0, 1).toUpperCase() + c.name.slice(1)}
              </option>
            );
          })
        ) : (
          <option>Loading...</option>
        )}
      </select>

      <input
        type="text"
        id="searchInput"
        placeholder="Buscar película..."
        onChange={inputHandler}
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
      />
      <button className="searchBtn" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchBarComponent;
