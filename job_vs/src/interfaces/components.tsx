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
