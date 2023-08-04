"use client";
import Image from "next/image";
import { FadeButton } from "@/components/fadeButton";
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
import { dummyJD, dummyCurri } from "./dummyData";
import { CurriCell } from "@/components/curriCell";
import { Onboarding } from "@/components/onboarding";
import { Introduce } from "@/components/introduce";

export default function Home() {
  const description: string = `안녕하세요 저희 서비스에
  오신 것을 환영합니다
  당신의 진로를 찾아드려요`;
  return (
    <div className="bg-main-background-color min-h-screen relative">
      <div className="absolute w-full h-screen">
        <div className="flex justify-center">
          <img
            src="/images/onboarding/mainPageUpscaled.png"
            alt="background-image"
            className="h-1/2 absolute z-10 object-cover"
          ></img>
        </div>
      </div>
      <main className="relative z-20 flex min-h-screen flex-col gap-4 items-center">
        <div className="h-32" />
        <h1
          id="serviceTitle"
          className=" font-OmyuPretty 
        tracking-widest text-white text-9xl"
        >
          북극성
        </h1>
        <h2
          id="serviceSubTitle"
          className=" font-OmyuPretty 
        tracking-widest text-white text-3xl"
        >
          당신의 취준을 도와줄 길잡이별
        </h2>
        <div className="h-64" />
        <div className="h-64" />
        <div className="fixed top-3/5">
          <FadeButton
            onClick={() => {
              console.log("Button clicked!");
            }}
          >
            시작하기
          </FadeButton>
        </div>

        <div className="h-32"></div>
        <div className="fixed top-4/5">
          <Introduce />
        </div>

        <div className="h-64"></div>

        <Onboarding
          imagePath="/images/onboarding/polar-bear.png"
          imageAlt="북극곰"
          title="안녕하세요"
          description={description}
        />
        <div className="h-64"></div>

        <Onboarding
          imagePath="/images/onboarding/polar-bear.png"
          imageAlt="북극곰"
          title="안녕하세요"
          description={description}
        />

        <div className="h-64"></div>

        <Onboarding
          imagePath="/images/onboarding/polar-bear.png"
          imageAlt="북극곰"
          title="안녕하세요"
          description={description}
        />

        <div className="h-64"></div>
        <Button
          onClick={() => {
            console.log("Button clicked!");
          }}
        >
          시작하기
        </Button>
        <div className="h-64"></div>
        <div className="h-64"></div>
      </main>
    </div>
  );
}
