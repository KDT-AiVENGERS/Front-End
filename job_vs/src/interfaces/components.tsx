import { ChangeEvent } from "react";
import { ActionMeta } from "react-select";

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
