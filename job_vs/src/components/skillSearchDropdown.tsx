import React from "react";
import Select, { StylesConfig } from "react-select";
import { SkillSearchDropdownProps } from "@/interfaces/components";

const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#f8c471" : "white",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    color: "black",
    borderRadius: "12px",
  }),
  input: (provided, state) => ({
    ...provided,
    height: "3rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "1.5rem",
  }),
};

const SkillSearchDropdown: React.FC<SkillSearchDropdownProps> = ({
  placeholder,
  className,
  options,
  onChange,
  value,
}) => {
  return (
    <div className="app">
      <Select
        options={options}
        placeholder={placeholder}
        className={`w-[32rem] px-4 py-2 font-HakgyoansimWoojuR ${className}`}
        styles={customStyles}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export { SkillSearchDropdown };
