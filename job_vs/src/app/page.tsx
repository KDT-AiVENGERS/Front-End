"use client";
import Image from "next/image";
import { Button } from "@/components/button";
import { Subjective } from "@/components/subjective";
import { Skill } from "@/components/skill";
import { Objective } from "@/components/objective";
import {
  JDRecommendSummaryProps,
  ObjectiveTypes,
} from "@/interfaces/components";
import { JDRecommendSummary } from "@/components/jdRecommendSummary";
import {
  RecommendMetricsDatum,
  JDRecommendCellProps,
} from "@/interfaces/components";
import { JDRecommendCell } from "@/components/jdRecommendCell";
import { dummyJD } from "./dummyData";

export default function Home() {
  const options: string[] = ["안녕", "피곤해", "졸려"];
  const recommendMetrics: RecommendMetricsDatum[] = [
    { key: "전공", value: 5 },
    { key: "능력", value: 3 },
    { key: "아무", value: 2 },
    { key: "거나", value: 4 },
    { key: "쓰자", value: 1 },
  ];

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center">
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
      <Objective options={options} type={ObjectiveTypes.singleChoice} />
      <Objective options={options} type={ObjectiveTypes.multipleChoice} />
      <JDRecommendSummary
        recommendMetrics={recommendMetrics}
        bestKeyword="웹개발자"
      />
      <JDRecommendCell
        jdName={dummyJD.jdName}
        job={dummyJD.job}
        yearOfExperience={dummyJD.yearOfExperience}
        introduction={dummyJD.introduction}
        qualificationRequirements={dummyJD.qualificationRequirements}
        preferentialTreatment={dummyJD.preferentialTreatment}
        welfare={dummyJD.welfare}
        url={dummyJD.url}
      />
      <div className="h-32"></div>
    </main>
  );
}
