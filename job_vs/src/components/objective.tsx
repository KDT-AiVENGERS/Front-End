"use client";
import React, { useState } from "react";
import { Button, LongButton } from "@/components/button";
import { ObjectiveProps, ObjectiveTypes } from "@/interfaces/components";
const Objective: React.FC<ObjectiveProps> = ({ type, options }) => {
  if (type === ObjectiveTypes.singleChoice) {
    const [buttonState, setButtonState] = useState<number>(-1);

    const selectButton = (buttonId: number) => {
      setButtonState(buttonId);
    };

    return (
      <div className="flex flex-row">
        {options.map((item, idx) => {
          if (idx !== buttonState) {
            return (
              <Button className="mx-4" onClick={() => selectButton(idx)}>
                {item.optionName}
              </Button>
            );
          } else {
            return (
              <Button
                onClick={() => selectButton(idx)}
                className="text-white mx-4"
                newButtonColorClassName="bg-space-light-blue"
                newHoverColorClassName="bg-space-light-blue"
              >
                {item.optionName}
              </Button>
            );
          }
        })}
      </div>
    );
  } else {
    const [buttonState, setButtonState] = useState<boolean[]>(
      options.map((n) => false)
    );

    const selectButton = (buttonId: number) => {
      const newState = [...buttonState];
      newState[buttonId] = !newState[buttonId];
      setButtonState(newState);
    };
    return (
      <div className="flex flex-row">
        {options.map((item, idx) => {
          if (!buttonState[idx]) {
            return (
              <Button className="mx-4" onClick={() => selectButton(idx)}>
                {item.optionName}
              </Button>
            );
          } else {
            return (
              <Button
                onClick={() => selectButton(idx)}
                className="text-white mx-4"
                newButtonColorClassName="bg-space-light-blue"
                newHoverColorClassName="bg-space-light-blue"
              >
                {item.optionName}
              </Button>
            );
          }
        })}
      </div>
    );
  }
};

const LongObjective: React.FC<ObjectiveProps> = ({ type, options }) => {
  if (type === ObjectiveTypes.singleChoice) {
    const [buttonState, setButtonState] = useState<number>(-1);

    const selectButton = (buttonId: number) => {
      setButtonState(buttonId);
    };

    return (
      <div className="flex flex-row">
        {options.map((item, idx) => {
          if (idx !== buttonState) {
            return (
              <LongButton
                example={item.optionDescription}
                className="mx-4"
                onClick={() => selectButton(idx)}
              >
                {item.optionName}
              </LongButton>
            );
          } else {
            return (
              <LongButton
                example={item.optionDescription}
                onClick={() => selectButton(idx)}
                className="text-white mx-4"
                newButtonColorClassName="bg-space-light-blue"
                newHoverColorClassName="bg-space-light-blue"
              >
                {item.optionName}
              </LongButton>
            );
          }
        })}
      </div>
    );
  } else {
    const [buttonState, setButtonState] = useState<boolean[]>(
      options.map((n) => false)
    );

    const selectButton = (buttonId: number) => {
      const newState = [...buttonState];
      newState[buttonId] = !newState[buttonId];
      setButtonState(newState);
    };
    return (
      <div className="flex flex-col gap-10">
        {options.map((item, idx) => {
          if (!buttonState[idx]) {
            return (
              <LongButton
                example={item.optionDescription}
                className="mx-4"
                onClick={() => selectButton(idx)}
              >
                {item.optionName}
              </LongButton>
            );
          } else {
            return (
              <LongButton
                example={item.optionDescription}
                onClick={() => selectButton(idx)}
                className="text-white mx-4"
                newButtonColorClassName="bg-space-light-blue"
                newHoverColorClassName="bg-space-light-blue"
              >
                {item.optionName}
              </LongButton>
            );
          }
        })}
      </div>
    );
  }
};

export { Objective, LongObjective };
