"use client";
import Image from "next/image";
import { dummyJD } from "@/app/dummyData";
import { CurriCell } from "@/components/curriCell";
import { JDRecommendSummary } from "@/components/jdRecommendSummary";
import {
  JDRecommendCellProps,
  RecommendMetricsDatum,
} from "@/interfaces/components";
import { useState, useEffect } from "react";
import { JDRecommendCell } from "@/components/jdRecommendCell";

export default function Home() {
  const recommendedArray: JDRecommendCellProps[] = new Array(6).fill(dummyJD);
  const [didMake, setDidMake] = useState(false);
  useEffect(() => {
    setDidMake(true);
  }, []);

  const recommendMetrics: RecommendMetricsDatum[] = [
    { key: "전공", value: 5 },
    { key: "능력", value: 3 },
    { key: "아무", value: 2 },
    { key: "거나", value: 4 },
    { key: "쓰자", value: 1 },
  ];
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
        <main className="relative z-20 flex min-h-screen flex-col gap-8 items-center">
          <div className="h-32" />
          <div
            id="gold"
            className="font-SpoqaHanSansNeo 
            font-bold tracking-tighter text-white text-6xl"
          >
            당신의 맞춤 공고 추천
          </div>
          <JDRecommendSummary
            recommendMetrics={recommendMetrics}
            bestKeyword="웹개발자"
          />
          <div className="h-28" />
          <div
            id="silver"
            className="font-SpoqaHanSansNeo 
            font-bold tracking-tighter text-white text-5xl"
          >
            맞춤 공고 추천 목록
          </div>
          <div className="h-8" />

          <div className="animate-make-cell w-full flex flex-col gap-8 items-center">
            {recommendedArray.map((value) => (
              <JDRecommendCell
                jdName={value.jdName}
                job={value.job}
                yearOfExperience={value.yearOfExperience}
                introduction={value.introduction}
                qualificationRequirements={value.qualificationRequirements}
                preferentialTreatment={value.preferentialTreatment}
                welfare={value.welfare}
                url={value.url}
              />
            ))}
          </div>
          <div className="h-64" />
        </main>
      </div>
    </>
  );
}
