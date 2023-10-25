import useFetch from "../../Hooks/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";

function DeleteCategoryComponent() {
  const [filter, setFilter] = useState("");
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/categories"
  );

  //Esto nos servirá para poder poner el borde de color cuando este el input seleccionado o solo el select

  const [inputFocused, setInputFocused] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [IDValue, setIDValue] = useState(null);

  // console.log(data);

  const handleInputFocus = (focused) => {
    setInputFocused(focused);
  };

  const handleSelectFocus = (focused) => {
    setSelectFocused(focused);
  };

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const getIDByCategory = () => {
    data?.map((c) => {
      if (c.name.toLowerCase() === selectValue.toLowerCase()) {
        setIDValue(c.id);
      }
    });
  };

  const deleteCategory = () => {
    axios
      .delete(
        `https://api.escuelajs.co/api/v1/categories/${IDValue}
`
      )
      .then((resp) => console.log("Delete succesful"))
      .catch((e) => {
        console.log(`Hay un error: ${e}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteCategory();
    // handleSearch(filter);
  };

  useEffect(() => {
    getIDByCategory();
  }, [selectValue]);

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
        onChange={handleSelect}
        value={selectValue}
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
      <button className="searchBtn" type="submit">
        Eliminar
      </button>
    </form>
  );
}

export default DeleteCategoryComponent;
