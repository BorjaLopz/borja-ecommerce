import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HeaderPage from "./Pages/HeaderPage";
import MainPageComponent from "./Components/MainPageComponent/MainPageComponent";
import FooterPage from "./Pages/FooterPage";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderPage />
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
