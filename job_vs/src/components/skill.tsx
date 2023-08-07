"use client";
import { SkillSearchDropdown } from "@/components/skillSearchDropdown";
import { SkillStack } from "@/interfaces/components";
import { Bubble } from "@/components/bubble";
import { Button } from "@/components/button";
import React, { useState } from "react";

const Skill: React.FC = () => {
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

  const plusButtonClicked = () => {
    if (
      searchedSkillStack &&
      !selectedSkillStack.some((selectedSkill) =>
        _.isEqual(searchedSkillStack, selectedSkill)
      )
    ) {
      setSelectedSkillStack((prev) => [...prev, searchedSkillStack]);
      setSearchedSkillStack(null);
    }
  };

  const cancelButtonClicked = (cancelSkill: SkillStack) => {
    setSelectedSkillStack(
      selectedSkillStack.filter((skill) => !_.isEqual(skill, cancelSkill))
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
        <Button
          className="rounded-full w-8 h-8 pb-1 text-3xl font-Pretendard-500"
          onClick={plusButtonClicked}
        >
          +
        </Button>
      </div>

      <div className="flex flex-row">
        {selectedSkillStack.map((skillStack) => (
          <Bubble onCancelClick={() => cancelButtonClicked(skillStack)}>
            {skillStack.label}
          </Bubble>
        ))}
      </div>
    </div>
  );
};

export { Skill };
