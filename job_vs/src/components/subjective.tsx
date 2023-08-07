"use client";
import React, { useState, ChangeEvent } from "react";
import { SubjectiveProps } from "@/interfaces/components";
import { SkillStack } from "@/interfaces/components";
import { Bubble } from "@/components/bubble";
import { RoundButton } from "@/components/button";
import { toast, Toaster } from "react-hot-toast";
const Subjective: React.FC<SubjectiveProps> = ({
  placeholder,
  className,
  onChange,
  onStateChange,
  questionIndex,
}) => {
  const [inputValue, setInputValue] = useState("");

  const _ = require("lodash");
  const [registeredItems, setRegisteredItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectedItem = (newValue: any) => {
    setSelectedItem((prev) => {
      if (isString(newValue)) {
        const next: string = newValue;
        return next;
      } else {
        return null;
      }
    });
  };

  const changeState = (newState: string[]) => {
    onStateChange(newState, questionIndex);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSelectedItem(e.target.value);
    onChange(e);
  };

  const plusButtonClicked = () => {
    if (
      selectedItem &&
      !registeredItems.some((registeredItem) =>
        _.isEqual(selectedItem, registeredItem)
      )
    ) {
      const newRegisteredItem = [...registeredItems, selectedItem];
      setRegisteredItems(newRegisteredItem);
      setSelectedItem(null);
      setInputValue("");
      changeState(newRegisteredItem);
    }
    if (
      registeredItems.some((registeredItem) =>
        _.isEqual(selectedItem, registeredItem)
      )
    ) {
      setInputValue("");
      toast.error("같은 데이터가 이미 입력되었어요!");
    }
  };

  const cancelButtonClicked = (cancelItem: string) => {
    const newRegisteredItem = registeredItems.filter(
      (item) => !_.isEqual(item, cancelItem)
    );
    setRegisteredItems(newRegisteredItem);
    changeState(newRegisteredItem);
  };

  const isString = (variable: any): variable is string => {
    return typeof variable === "string";
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={inputValue}
          className={`placeholder-gray-400 placeholder:font-HakgyoansimWoojuR
        placeholder:text-xl placeholder:text-center
        font-Pretendard-500
        w-[32rem] h-[3rem]
        my-4 px-4 py-2 
        border border-gray-300 rounded-xl
        focus:outline-none focus:border-blue-500
        focus:rounded-2xl
        transition-all ease-in-out delay-50 duration-200 ${className}`}
        />
        <div className="w-6"></div>
        <RoundButton
          className="rounded-full w-14 h-14 pb-1 text-3xl font-Pretendard-500"
          onClick={plusButtonClicked}
        >
          +
        </RoundButton>
      </div>

      <div className="flex flex-row">
        {registeredItems.map((item) => (
          <Bubble onCancelClick={() => cancelButtonClicked(item)}>
            {item}
          </Bubble>
        ))}
      </div>
      <div>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "mb-[20vh]",
          }}
        />
      </div>
    </div>
  );
};

export { Subjective };
