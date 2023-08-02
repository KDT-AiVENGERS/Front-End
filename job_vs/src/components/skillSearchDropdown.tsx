import React from "react";
import Select from "react-select";
import { SkillSearchDropdownProps } from "@/interfaces/components";

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
      />
    </div>
  );
};

export { SkillSearchDropdown };
