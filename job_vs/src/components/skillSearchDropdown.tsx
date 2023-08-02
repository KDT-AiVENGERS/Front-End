import React from "react";
import Select, { StylesConfig } from "react-select";
import { SkillSearchDropdownProps } from "@/interfaces/components";

const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "rgb(255, 0, 0)" : "white",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    color: "black",
  }),
};

const SkillSearchDropdown: React.FC<SkillSearchDropdownProps> = ({
  placeholder,
  className,
  options,
}) => {
  return (
    <div className="app">
      <Select
        options={options}
        placeholder={placeholder}
        className={`w-64 px-4 py-2 font-HakgyoansimWoojuR ${className}`}
        styles={customStyles}
      />
    </div>
  );
};

export { SkillSearchDropdown };
