import { ChangeEvent } from "react";
import { ActionMeta } from "react-select";
import { BarDatum } from "@nivo/bar";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  onClick: () => void;
}

export interface SubjectiveProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface SkillSearchDropdownProps {
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
  onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  value: SkillStack | null;
}

export interface BubbleProps {
  children: string;
  onCancelClick: () => void;
}

export interface SkillStack {
  label: string;
  value: string;
}

export enum ObjectiveTypes {
  singleChoice,
  multipleChoice,
}
export interface ObjectiveProps {
  type: ObjectiveTypes;
  options: string[];
}

export interface RecommendMetricsDatum {
  key: string;
  value: number;
}

export interface JDRecommendSummaryProps {
  recommendMetrics: RecommendMetricsDatum[];
  bestKeyword: string;
}

export interface JDRecommendCellProps {
  jdName: string;
  job: string;
  yearOfExperienc: number;
}
