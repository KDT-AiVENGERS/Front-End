import { ChangeEvent } from "react";

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

export interface SkillSearchDropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
}

export interface BubbleProps {
  children: string;
}
