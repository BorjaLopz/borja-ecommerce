// import React from "react";
// import Select from "react-select";

// const options = [
//   {
//     value: "option1",
//     label: (
//       <div>
//         <img src="https://flagsapi.com/ES/flat/64.png" alt="Option 1" />
//         Opción 1
//       </div>
//     ),
//   },
//   {
//     value: "option2",
//     label: (
//       <div>
//         <img src="https://flagsapi.com/GB/flat/64.png" alt="Option 2" />
//         Opción 2
//       </div>
//     ),
//   },
//   // Agrega más opciones según sea necesario
// ];

// function LanguageComponent() {
//   return (
//     <li>
//       <Select options={options} />
//     </li>
//   );
// }

// export default LanguageComponent;

import React, { useState } from "react";
import "./styles.css";

import Select from "react-select";
import DropdownMenuComponent from "../DropdownMenuComponent/DropdownMenuComponent";

const options = [
  {
    value: "ES",
    src: "https://flagsapi.com/ES/flat/64.png",
    alt: "Español",
  },
  {
    value: "EN",
    src: "https://flagsapi.com/GB/flat/64.png",
    alt: "Inglés",
  },
];

function LanguageComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div id="selectContainerLanguage">
      {/* <Select
        value={selectedOption}
        options={options}
        onChange={handleChange}
        isSearchable={false} // Para deshabilitar la barra de búsqueda
      /> */}
      <DropdownMenuComponent
        options={options}
        onSelect={handleSelect}
        defaultOption={options[0].value}
        defaultImage={{ src: options[0].src, alt: options[0].alt }}
      />
    </div>
  );
}

export default LanguageComponent;
