"use client";
import Image from "next/image";
import { useState } from "react";
import { Question, QuestionOption, questions } from "./qnaData";
import { LongObjective, Objective } from "@/components/objective";
import { ObjectiveTypes } from "@/interfaces/components";
import { Skill } from "@/components/skill";
import { Subjective } from "@/components/subjective";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [answer, setAnswer] = useState([false, false, false, false, false]);
  const renderQuestion = (question: Question) => {
    if (question.type === "multipleChoiceLong") {
      return (
        <LongObjective
          options={question.options}
          type={ObjectiveTypes.multipleChoice}
        />
      );
    } else if (question.type === "multipleChoice") {
      return (
        <Objective
          options={question.options}
          type={ObjectiveTypes.multipleChoice}
        />
      );
    } else if (question.type === "search") {
      return <Skill />;
    } else if (question.type === "subjective") {
      return (
        <Subjective
          placeholder={question.example}
          className=""
          onChange={() => {}}
        />
      );
    }
  };
  return (
    <>
      <div className="bg-main-background-color min-h-screen relative">
        <div className="absolute w-full h-screen">
          <div className="flex justify-center">
            <img
              src="/images/onboarding/mainPageUpscaled.png"
              alt="background-image"
              className="h-1/2 absolute z-10 object-cover animate-fade-in
              opacity-30"
            ></img>
          </div>
        </div>
        <main className="relative z-20 flex min-h-screen flex-col gap-8 items-center animate-fade-in">
          <div className="h-36" />
          <div
            className="font-HakgyoansimWoojuR
            font-bold tracking-tighter text-white text-[3.5rem] whitespace-pre-line text-center leading-[5rem]"
          >
            {questions[currentQuestion].question}
          </div>
          <div className="h-32" />
          <div>{renderQuestion(questions[currentQuestion])}</div>
        </main>
      </div>
    </>
  );
}
