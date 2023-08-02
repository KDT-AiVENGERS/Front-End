import React, { useState, useEffect, ChangeEvent } from "react";
import { SubjectiveProps } from "@/interfaces/components";
const Subjective: React.FC<SubjectiveProps> = ({
  placeholder,
  className,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      className={`placeholder-gray-400 placeholder:font-HakgyoansimWoojuR
        placeholder:text-xl placeholder:text-center
        font-Pretendard-500
        ${inputValue ? "w-3/5 h-20" : "w-64 h-10"}
        my-4 px-4 py-2 
        border border-gray-300 rounded-xl
        focus:outline-none focus:border-blue-500
        focus:w-3/5 focus:h-20
        focus:rounded-2xl
        transition-all ease-in-out delay-50 duration-200 ${className}`}
    />
  );
};

export { Subjective };
