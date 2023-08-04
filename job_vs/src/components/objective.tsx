import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/button";
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
                {item}
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
                {item}
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
                {item}
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
                {item}
              </Button>
            );
          }
        })}
      </div>
    );
  }
};

export { Objective };
