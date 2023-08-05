"use client";
import Image from "next/image";
import { dummyCurri } from "@/app/dummyData";
import { CurriCell } from "@/components/curriCell";
import { CurriCellProps } from "@/interfaces/components";

export default function Home() {
  const recommendedArray: CurriCellProps[] = new Array(6).fill(dummyCurri);
  return (
    <>
      <div className="bg-main-background-color min-h-screen relative">
        <div className="absolute w-full h-screen">
          <div className="flex justify-center">
            <img
              src="/images/onboarding/mainPageUpscaled.png"
              alt="background-image"
              className="h-1/2 absolute z-10 object-cover opacity-30"
            ></img>
          </div>
        </div>
        <main className="relative z-20 flex min-h-screen flex-col gap-8 items-center">
          <div className="h-32" />
          <h1
            id="emphasis"
            className="font-SpoqaHanSansNeo font-bold tracking-tighter text-white text-6xl"
          >
            당신의 맞춤 강의 추천
          </h1>
          <div className="h-28" />
          {recommendedArray.map((value) => (
            <CurriCell
              largeCategory={value.largeCategory}
              smallCategory={value.smallCategory}
              title={value.title}
              difficulty={value.difficulty}
              requiredTime={value.requiredTime}
              introduction={value.introduction}
              language={value.language}
              url={value.url}
            />
          ))}
          <div className="h-64" />
        </main>
      </div>
    </>
  );
}
