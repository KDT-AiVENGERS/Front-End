"use client";
import Image from "next/image";
import { Button } from "@/components/button";
import { Subjective } from "@/components/subjective";
import { SkillSearchDropdown } from "@/components/skillSearchDropdown";
import { Bubble } from "@/components/bubble";
import { Skill } from "@/components/skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="font-HakgyoansimWoojuR text-space-dark-blue tracking-wide text-8xl">
        안녕하세요
      </h1>
      <h1 className="font-Pretendard-900 tracking-wide text-white text-8xl">
        안녕하세요
      </h1>
      <Button
        onClick={() => {
          console.log("Button clicked!");
        }}
      >
        시작하기
      </Button>
      <Subjective placeholder="천천히 입력해보시게" onChange={() => {}} />
      <Skill />
    </main>
  );
}
