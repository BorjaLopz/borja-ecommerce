import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HeaderPage from "./Pages/HeaderPage";
import MainPageComponent from "./Components/MainPageComponent/MainPageComponent";
import FooterPage from "./Pages/FooterPage";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState(""); //Obtenemos el filtro que quiera el usuario en la searchBar

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderPage handleInputFilter={setFilter} />
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
