import HeaderPageComponent from "../Components/HeaderPageComponent/HeaderPageComponent";

function HeaderPage({ handleInputFilter, filter }) {
  return <HeaderPageComponent handleSearch={handleInputFilter} />;
}

export default HeaderPage;
