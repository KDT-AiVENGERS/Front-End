"use client";
import Image from "next/image";
import { useState } from "react";
import { Question, QuestionOption, questions } from "./qnaData";
import { LongObjective, Objective } from "@/components/objective";
import { ObjectiveTypes } from "@/interfaces/components";
import { Skill } from "@/components/skill";
import { Subjective } from "@/components/subjective";
import { PaginationButton, RecommendStartButton } from "@/components/button";
import { MODEL_SERVER_PATH } from "@/global/globalData";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState<string[][]>([[], [], [], [], []]);
  const [countForAnimation, SetCountForAnimation] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleStateChange = (liftedState: string[], questionIndex: number) => {
    setAnswer((prev) => {
      const newState = [...prev];
      newState[questionIndex] = liftedState;
      console.log(newState);
      return newState;
    });
  };

  const router = useRouter();

  const requsetJDButtonClick = async (answer: string[][]) => {
    setIsLoading(true);
    const date: string = new Date().toISOString();
    const name: string = "이의진";
    const personality = answer[0];
    const stack = answer[1];
    const welfare = answer[2];
    const job = answer[3];
    const domain = answer[4];
    const data = {
      date,
      name,
      answers: {
        personality,
        stack,
        welfare,
        job,
        domain,
      },
    };

    try {
      const resID = await fetch(`${MODEL_SERVER_PATH}/v_jds`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resID.ok) {
        throw new Error(`HTTP error! status: ${resID.status}`);
      }

      const obtainedIdData = await resID.json();

      const resJD = await fetch(
        `${MODEL_SERVER_PATH}/v_jds/${obtainedIdData["id"]}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!resJD.ok) {
        throw new Error(`HTTP error! status: ${resJD.status}`);
      }

      const obtainedJDData = await resJD.json();

      setIsLoading(false);

      const queryString = encodeURIComponent(JSON.stringify(obtainedJDData));
      router.push(`/result/jd?data=${queryString}`);
    } catch (e) {
      console.error("An error occurred while fetching data: ", e);
      setIsLoading(false);
    }
  };

  const discirminator = (question: Question) => {
    if (question.questionIndex === answer.length - 1) {
      return 2;
    }

    const answerLength = answer[question.questionIndex].length;
    switch (question.type) {
      case "multipleChoice":
      case "multipleChoiceLong":
        if (
          question.choiceMoreThan <= answerLength &&
          answerLength <= question.choiceLowerThan
        ) {
          return 1;
        } else {
          return 0;
        }
      default:
        return 1;
    }
  };

  const handlePagination = (currentQuestion: number, direction: number) => {
    setCurrentQuestion(currentQuestion + direction);
    SetCountForAnimation((prev) => prev + 1);
  };

  const renderQuestion = (question: Question) => {
    if (question.type === "multipleChoiceLong") {
      return (
        <LongObjective
          options={question.options}
          questionIndex={question.questionIndex}
          type={ObjectiveTypes.multipleChoice}
          onChange={handleStateChange}
          currentState={answer[question.questionIndex]}
        />
      );
    } else if (question.type === "multipleChoice") {
      return (
        <Objective
          options={question.options}
          questionIndex={question.questionIndex}
          type={ObjectiveTypes.multipleChoice}
          onChange={handleStateChange}
          currentState={answer[question.questionIndex]}
        />
      );
    } else if (question.type === "search") {
      return (
        <Skill
          questionIndex={question.questionIndex}
          onChange={handleStateChange}
          currentState={answer[question.questionIndex]}
        />
      );
    } else if (question.type === "subjective") {
      return (
        <Subjective
          placeholder={question.example}
          className=""
          onChange={() => {}}
          questionIndex={question.questionIndex}
          onStateChange={handleStateChange}
          currentState={answer[question.questionIndex]}
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
        <main
          key={countForAnimation}
          className="relative z-20 flex min-h-screen flex-col gap-8 items-center animate-make-cell"
        >
          <div className="h-24" />
          <div
            id="question"
            className="font-HakgyoansimWoojuR
            font-bold tracking-tighter text-white text-[3.5rem] whitespace-pre-line text-center leading-[5rem]"
          >
            {questions[currentQuestion].question}
          </div>
          <div className="h-32" />
          <div>{renderQuestion(questions[currentQuestion])}</div>
          <div className="h-32"></div>
          <div className="w-2/3 flex justify-between">
            {currentQuestion === 0 ? (
              <PaginationButton mode="prev" isGlow={false} onClick={() => {}} />
            ) : (
              <PaginationButton
                mode="prev"
                isGlow={true}
                onClick={() => {
                  handlePagination(currentQuestion, -1);
                }}
              />
            )}

            {discirminator(questions[currentQuestion]) === 1 ? (
              <PaginationButton
                mode="next"
                isGlow={true}
                onClick={() => {
                  handlePagination(currentQuestion, 1);
                }}
              />
            ) : discirminator(questions[currentQuestion]) === 2 ? (
              <RecommendStartButton
                onClick={() => {
                  requsetJDButtonClick(answer);
                }}
              />
            ) : (
              <PaginationButton mode="next" isGlow={false} onClick={() => {}} />
            )}
          </div>
          <div className="h-64"></div>
        </main>
      </div>
    </>
  );
}
