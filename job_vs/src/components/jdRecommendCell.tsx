"use client";
import { JDRecommendCellProps } from "@/interfaces/components";
import { Button } from "@/components/button";
import React, { useState } from "react";
import Linkify from "react-linkify";

const JDRecommendCell: React.FC<JDRecommendCellProps> = ({
  jdName,
  job,
  yearOfExperience,
  introduction,
  qualificationRequirements,
  welfare,
  preferentialTreatment,
  url,
}) => {
  var YearOfExperienceOutput: React.FC;
  if (yearOfExperience === 0) {
    YearOfExperienceOutput = () => {
      return (
        <div
          className="text-xl font-HakgyoansimWoojuR font-bold tracking-tight leading-10
        text-space-yellow ps-1 py-1 rounded-full"
        >
          경력 무관{" "}
        </div>
      );
    };
  } else {
    YearOfExperienceOutput = () => {
      return (
        <div
          className='text-xl 
      font-HakgyoansimWoojuR tracking-tight leading-10
      text-space-yellow ps-1 py-1 rounded-full"'
        >
          경력{" "}
          <span className=" text-2xl text-space-light-red font-SpoqaHanSansNeo font-bold tracking-tight leading-10">
            {yearOfExperience}
          </span>{" "}
          년 이상
        </div>
      );
    };
  }

  const componentDecorator = (href: string, text: string, key: number) => (
    <a
      href={href}
      key={key}
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: "#3757D0" }}
    >
      {text}
    </a>
  );

  const jdColumns: object = {
    "회사 소개": introduction,
    자격요건: qualificationRequirements,
    우대사항: preferentialTreatment,
    복지: welfare,
  };

  const [isFilped, setIsFliped] = useState(true);

  const handleFlip = () => {
    setIsFliped(!isFilped);
  };

  const gotoURL = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  if (isFilped) {
    return (
      <div className="flex w-3/5 justify-between bg-gray-900 rounded-2xl">
        <div className="flex flex-col">
          <div className="text-white text-3xl ms-4 mt-4 font-HakgyoansimWoojuR font-bold tracking-tight leading-10">
            {jdName}
          </div>
          <div className="flex">
            <div
              className="text-xl ms-4
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow pe-1 py-1 rounded-full"
            >
              {job}
            </div>
            <span
              className="font-HakgyoansimWoojuR text-xl py-1
              font-bold tracking-tight leading-10 text-gray-400 items-center"
            >
              |
            </span>
            <YearOfExperienceOutput />
          </div>
        </div>
        <div className="flex items-center">
          <Button className="me-6" onClick={handleFlip}>
            자세히 보기
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-3/5 bg-gray-900 rounded-2xl">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="text-white text-3xl ms-4 mt-4 font-HakgyoansimWoojuR font-bold tracking-tight leading-10">
              {jdName}
            </div>
            <div className="flex">
              <div
                className="text-xl ms-4
          font-HakgyoansimWoojuR font-bold tracking-tight leading-10
          text-space-yellow pe-1 py-1 rounded-full"
              >
                {job}
              </div>
              <span
                className="font-HakgyoansimWoojuR text-xl py-1
          font-bold tracking-tight leading-10 text-gray-400 items-center"
              >
                |
              </span>
              <YearOfExperienceOutput />
            </div>
          </div>
          <div className="flex items-center">
            <Button className="me-6" onClick={handleFlip}>
              접기
            </Button>
          </div>
        </div>
        <div className="ms-4 me-4">
          <div>
            {Object.entries(jdColumns).map(([key, value], index) => (
              <div key={index}>
                <div
                  className="font-HakgyoansimWoojuR font-bold tracking-tight 
                 bg-gray-600 text-white rounded-2xl px-2 py-2 w-1/6 leading-10
                 text-2xl mt-10 mb-5 text-center ms-2"
                >
                  {key}
                </div>
                <div className="font-SpoqaHanSansNeo text-white text-lg font-regular tracking-tight leading-10 ms-5 mb-10 me-3 whitespace-pre-line">
                  <Linkify componentDecorator={componentDecorator}>
                    {value}
                  </Linkify>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="me-6" onClick={handleFlip}>
              접기
            </Button>
            <Button
              className="me-6"
              onClick={() => {
                gotoURL(url);
              }}
            >
              공고사이트 가기
            </Button>
            <Button
              id="silverButton"
              className="w-80 text-space-dark-yellow"
              newButtonColorClassName="bg-space-dark-blue"
              onClick={() => {}}
            >
              강의 추천받기
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export { JDRecommendCell };
