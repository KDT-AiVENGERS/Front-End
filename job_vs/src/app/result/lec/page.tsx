"use client";
import Image from "next/image";
import { dummyCurri } from "@/app/dummyData";
import { CurriCell } from "@/components/curriCell";
import { CurriCellProps } from "@/interfaces/components";
import { useState, useEffect } from "react";
import { LecResponse } from "@/interfaces/server";
import { useRecoilValue } from "recoil";
import { LecDataState } from "@/global/globalAtom";

export default function Home() {
  const obtainedLecData: LecResponse = useRecoilValue(LecDataState);
  console.log(obtainedLecData);

  const fromObtainedToCellData = (obtainedLecData: LecResponse) => {
    let lecList: CurriCellProps[] = [];
    Object.entries(obtainedLecData.data).map(([idx, data]) => {
      let lec: CurriCellProps = {
        largeCategory: "",
        smallCategory: "",
        title: "",
        difficulty: "",
        requiredTime: "",
        introduction: "",
        language: "",
        url: "",
      };
      Object.entries(data).map(([key, value]) => {
        switch (key) {
          case "대분류":
            lec.largeCategory = typeof value === "string" ? value : "";
            break;
          case "소분류":
            lec.smallCategory = typeof value === "string" ? value : "";
            break;
          case "강의명":
            lec.title = typeof value === "string" ? value : "";
            break;
          case "난이도":
            lec.difficulty = typeof value === "string" ? value : "";
            break;
          case "총소요시간":
            lec.requiredTime = typeof value === "string" ? value : "";
            break;
          case "강의소개":
            lec.introduction = typeof value === "string" ? value : "";
            break;
          case "언어":
            lec.language = typeof value === "string" ? value : "";
            break;
          case "출처":
            lec.url = typeof value === "string" ? value : "";
            break;
          default:
            break;
        }
      });
      lecList.push(lec);
    });
    return lecList;
  };
  const recommendedArray: CurriCellProps[] =
    fromObtainedToCellData(obtainedLecData);

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
            당신의 맞춤 강의 추천
          </div>
          <div className="h-28" />
          <div className="animate-make-cell w-full flex flex-col gap-8 items-center">
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
          </div>
          <div className="h-64" />
        </main>
      </div>
    </>
  );
}
