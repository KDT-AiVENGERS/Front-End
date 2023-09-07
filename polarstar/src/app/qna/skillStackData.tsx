import * as data from "@/app/qna/skillStack.json";

const skillStack = Object.entries(data).map(([label, value]) => ({
  label,
  value,
}));

export { skillStack };
