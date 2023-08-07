"use client";
import { SkillSearchDropdown } from "@/components/skillSearchDropdown";
import { SkillProps, SkillStack } from "@/interfaces/components";
import { Bubble } from "@/components/bubble";
import { RoundButton } from "@/components/button";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Skill: React.FC<SkillProps> = ({ questionIndex, onChange }) => {
  const _ = require("lodash");
  const skillStack: { label: string; value: string }[] = [
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];
  const [selectedSkillStack, setSelectedSkillStack] = useState<SkillStack[]>(
    []
  );
  const [searchedSkillStack, setSearchedSkillStack] =
    useState<SkillStack | null>(null);

  const handleSearchComponent = (newValue: any, actionMeta: any) => {
    setSearchedSkillStack((prev) => {
      if (isSkillStack(newValue)) {
        const next: SkillStack = {
          label: newValue.label,
          value: newValue.value,
        };
        return next;
      } else {
        return null;
      }
    });
  };

  const changeState = (newState: string[]) => {
    onChange(newState, questionIndex);
  };

  const plusButtonClicked = () => {
    if (
      searchedSkillStack &&
      !selectedSkillStack.some((selectedSkill) =>
        _.isEqual(searchedSkillStack, selectedSkill)
      )
    ) {
      const newSelectedSkillStack = [...selectedSkillStack, searchedSkillStack];
      setSelectedSkillStack(newSelectedSkillStack);
      setSearchedSkillStack(null);
      changeState(
        newSelectedSkillStack.map((item) => {
          return item.value;
        })
      );
    }
    if (
      selectedSkillStack.some((registeredItem) =>
        _.isEqual(searchedSkillStack, registeredItem)
      )
    ) {
      setSearchedSkillStack(null);
      toast.error("같은 데이터가 이미 입력되었어요!");
    }
  };

  const cancelButtonClicked = (cancelSkill: SkillStack) => {
    const newSelectedSkillStack = selectedSkillStack.filter(
      (skill) => !_.isEqual(skill, cancelSkill)
    );
    setSelectedSkillStack(newSelectedSkillStack);
    changeState(
      newSelectedSkillStack.map((item) => {
        return item.value;
      })
    );
  };

  const isSkillStack = (variable: any): variable is SkillStack => {
    return (
      typeof variable.label === "string" && typeof variable.value === "string"
    );
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <SkillSearchDropdown
          options={skillStack}
          placeholder="기술스택을 검색하세요"
          onChange={handleSearchComponent}
          value={searchedSkillStack}
        />
        <RoundButton
          className="rounded-full w-14 h-14 pb-1 text-3xl font-Pretendard-500"
          onClick={plusButtonClicked}
        >
          +
        </RoundButton>
      </div>

      <div className="flex flex-row">
        {selectedSkillStack.map((skillStack) => (
          <Bubble onCancelClick={() => cancelButtonClicked(skillStack)}>
            {skillStack.label}
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

export { Skill };
