import { useState } from "react";
import "./styles.css";

function DropdownMenuComponent({
  options,
  onSelect,
  defaultOption,
  defaultImage,
  customStyles,
}) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedImage, setSelectedImage] = useState(defaultImage.src);
  const [menuClicked, setMenuclicked] = useState(false);

  const toggleDropdown = () => {
    setMenuclicked(!menuClicked);
  };

  const handleSelect = (option) => {
    // console.log("option");
    // console.log(option);
    setSelectedOption(option);

    options.filter((op) => {
      if (option === op.value) {
        setSelectedImage(op.src);
      }
    });

    onSelect(option);
    toggleDropdown();
  };

  console.log("selectedImage");
  console.log(selectedImage);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setMenuclicked(true)}
      onMouseLeave={() => setMenuclicked(false)}
    >
      <button className="dropdownToggle">
        <img src={selectedImage} />
        {selectedOption}
      </button>
      {menuClicked && (
        <div className="dropdownMenu">
          {options.map((opt, id) => {
            return (
              <div
                key={id}
                className="menuItem"
                onClick={() => handleSelect(opt.value)}
              >
                {" "}
                <img src={`${opt.src}`} alt={`${opt.alt}`} />
                {opt.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default DropdownMenuComponent;
