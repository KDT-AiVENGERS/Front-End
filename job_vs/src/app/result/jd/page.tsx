"use client";
import Image from "next/image";
import { dummyJD } from "@/app/dummyData";
import { CurriCell } from "@/components/curriCell";
import { JDRecommendSummary } from "@/components/jdRecommendSummary";
import {
  JDRecommendCellProps,
  RecommendMetricsDatum,
} from "@/interfaces/components";
import { JDRecommendCell } from "@/components/jdRecommendCell";
import { useRecoilValue } from "recoil";
import { JDDataState } from "@/global/globalAtom";
import { JDResponse } from "@/interfaces/server";

export default function Home() {
  const obtainedJDData: JDResponse = useRecoilValue(JDDataState);
  const bestKeyword = obtainedJDData["data"]["most_frequent_job"];

  const fromJDtoJDCell = (obtainedJDData: JDResponse) => {
    let JDList: JDRecommendCellProps[] = [];
    obtainedJDData.data.jds.map((item) => {
      // 수정된 부분
      let JD: JDRecommendCellProps = {
        jdName: "",
        yearOfExperience: 0,
        job: "",
        introduction: "",
        qualificationRequirements: "",
        welfare: "",
        preferentialTreatment: "",
        url: "",
      };
      JD.jdName = item["공고명"];
      JD.yearOfExperience = item["경력조건"];
      JD.job = item["직무내용"];
      JD.introduction = item["회사소개"];
      JD.qualificationRequirements = item["자격요건"];
      JD.welfare = item["복지"];
      JD.preferentialTreatment = item["우대조건"];
      JD.url = item["출처 URL"];
      JDList.push(JD);
    });
    return JDList;
  };

  const fromJDtoMetrics = (obtainedJDData: JDResponse) => {
    const recommendMetrics: RecommendMetricsDatum[] = Object.entries(
      obtainedJDData.data.keyword_counts
    ).map(([key, value]) => {
      let recommendMetricsDatum: RecommendMetricsDatum = {
        key: key,
        value: value,
      };
      return recommendMetricsDatum;
    });
    return recommendMetrics;
  };

  const recommendedArray: JDRecommendCellProps[] =
    fromJDtoJDCell(obtainedJDData);
  2;
  const recommendMetrics: RecommendMetricsDatum[] =
    fromJDtoMetrics(obtainedJDData);
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
            bestKeyword={bestKeyword}
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
