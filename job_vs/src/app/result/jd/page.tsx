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
import { JDDataState, LecDataState } from "@/global/globalAtom";
import { JDResponse } from "@/interfaces/server";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MODEL_SERVER_PATH } from "@/global/globalConstant";
import { useRecoilState } from "recoil";

export default function Home() {
  const obtainedJDData: JDResponse = useRecoilValue(JDDataState);
  const bestKeyword = obtainedJDData["data"]["most_frequent_job"];
  const [isLoading, setIsLoading] = useState(false);
  const [lecData, setLecData] = useRecoilState(LecDataState);

  const fromJDtoJDCell = (obtainedJDData: JDResponse) => {
    let JDList: JDRecommendCellProps[] = [];
    obtainedJDData.data.jds.map((item) => {
      // 수정된 부분
      let JD: JDRecommendCellProps = {
        jdId: 0,
        companyName: "",
        jdName: "",
        yearOfExperience: 0,
        job: "",
        introduction: "",
        qualificationRequirements: "",
        welfare: "",
        preferentialTreatment: "",
        url: "",
        onClick: () => {},
      };
      JD.companyName = item["회사명"];
      JD.jdId = item["jd_id"];
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

  const recommendMetrics: RecommendMetricsDatum[] =
    fromJDtoMetrics(obtainedJDData);

  const router = useRouter();

  const requestLectureButtonClick = async (jdID: number) => {
    const lecRequestParams = new URLSearchParams();

    lecRequestParams.append("start", "0");
    lecRequestParams.append("end", "10");
    console.log(
      `${MODEL_SERVER_PATH}/find_lectures/${jdID}?${lecRequestParams}`
    );
    // return;
    setIsLoading(true);
    try {
      const resID = await fetch(
        `${MODEL_SERVER_PATH}/find_lectures/${jdID}?${lecRequestParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!resID.ok) {
        throw new Error(`HTTP error! status: ${resID.status}`);
      }

      const obtainedData = await resID.json();

      setIsLoading(false);
      setLecData(obtainedData);
      router.push(`/result/lec`);
    } catch (e) {
      console.error("An error occurred while fetching data: ", e);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col w-full items-center">
            <img
              id="glow_comp"
              src="/images/loading/north.png"
              alt="loading-image"
              className="h-32 w-32 animate-fade-in-full
            "
            ></img>
            <div className="h-32"></div>
            <div
              id="silver"
              className="text-white font-HakgyoansimWoojuR text-4xl animate-fade-in"
            >
              이 공고에 최적화된 강의를 찾고 있어요!
            </div>
          </div>
        </div>
      )}
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
                jdId={value.jdId}
                companyName={value.companyName}
                jdName={value.jdName}
                job={value.job}
                yearOfExperience={value.yearOfExperience}
                introduction={value.introduction}
                qualificationRequirements={value.qualificationRequirements}
                preferentialTreatment={value.preferentialTreatment}
                welfare={value.welfare}
                url={value.url}
                onClick={() => {
                  requestLectureButtonClick(value.jdId);
                }}
              />
            ))}
          </div>
          <div className="h-64" />
        </main>
      </div>
    </>
  );
}
