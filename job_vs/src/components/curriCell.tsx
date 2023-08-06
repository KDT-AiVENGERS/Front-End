import { CurriCellProps } from "@/interfaces/components";
import { Button } from "@/components/button";
import React, { useState } from "react";
import Linkify from "react-linkify";
import styles from "@/styles/CurriCell.module.css";

const CurriCell: React.FC<CurriCellProps> = ({
  largeCategory,
  smallCategory,
  title,
  difficulty,
  requiredTime,
  introduction,
  language,
  url,
}) => {
  const componentDecorator = (href: string, text: string, key: number) => (
    <a
      href={href}
      key={key}
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: "blue" }}
    >
      {text}
    </a>
  );

  const curriColumns: object = {
    "총 소요시간": requiredTime,
    "강의 소개": introduction,
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
            {title}
          </div>
          <div className="flex">
            <div
              className="text-xl ms-4 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
            >
              {smallCategory}
            </div>
            <span
              className="font-HakgyoansimWoojuR text-xl py-1
              font-bold tracking-tight leading-10 text-gray-400 items-center"
            >
              |
            </span>
            <div
              className="text-xl ms-2 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
            >
              {difficulty}
            </div>
            <span
              className="font-HakgyoansimWoojuR text-xl py-1
              font-bold tracking-tight leading-10 text-gray-400 items-center"
            >
              |
            </span>
            <div
              className="text-xl ms-2 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
            >
              {language}
            </div>
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
              {title}
            </div>
            <div className="flex">
              <div
                className="text-xl ms-4 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
              >
                {smallCategory}
              </div>
              <span
                className="font-HakgyoansimWoojuR text-xl py-1
              font-bold tracking-tight leading-10 text-gray-400 items-center"
              >
                |
              </span>
              <div
                className="text-xl ms-2 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
              >
                {difficulty}
              </div>
              <span
                className="font-HakgyoansimWoojuR text-xl py-1
              font-bold tracking-tight leading-10 text-gray-400 items-center"
              >
                |
              </span>
              <div
                className="text-xl ms-2 me-2
              font-HakgyoansimWoojuR font-bold tracking-tight leading-10
              text-space-yellow py-1 rounded-full"
              >
                {language}
              </div>
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
            {Object.entries(curriColumns).map(([key, value], index) => (
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
                    {value.trim()}
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
              강의사이트 가기
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export { CurriCell };
