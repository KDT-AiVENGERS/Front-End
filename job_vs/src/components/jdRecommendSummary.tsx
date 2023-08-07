"use client";
import {
  JDRecommendSummaryProps,
  RecommendMetricsDatum,
} from "@/interfaces/components";
import { BarDatum, ResponsiveBar } from "@nivo/bar";

const JDRecommendSummary: React.FC<JDRecommendSummaryProps> = ({
  recommendMetrics,
  bestKeyword,
}) => {
  const metrics2nivoPacket = (metrics: RecommendMetricsDatum[]) => {
    var data: BarDatum[] = [];
    metrics.map((item) => {
      var new_datum: BarDatum = {};
      new_datum["key"] = item.key;
      new_datum["value"] = item.value;
      data.push(new_datum);
    });
    return data;
  };

  const RecommendBar: React.FC<{ data: BarDatum[] }> = ({ data }) => (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      enableLabel={false}
      indexBy="key"
      margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      theme={{
        axis: {
          ticks: {
            text: {
              fontSize: 25,
              fill: "#ffffff",
              fontFamily: "HakgyoansimWoojuR",
              fontWeight: "black",
            },
          },
        },
      }}
      colors={(bar) => {
        switch (bar.indexValue) {
          case "전공":
            return "#3757D0"; // 빨간색
          case "능력":
            return "#F7D64D"; // 초록색
          case "아무":
            return "#9BB355"; // 파란색
          case "거나":
            return "#E0635A"; // 노란색
          case "쓰자":
            return "#C8D1FC"; // 보라색
          default:
            return "#000"; // 검은색
        }
      }}
      layout="vertical"
      borderRadius={15}
      motionConfig={"wobbly"}
      borderColor={{ from: "color", modifiers: [["brighter", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 20,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: [],
        legend: "",
        legendPosition: "middle",
        legendOffset: -20,
      }}
      enableGridX={false}
      enableGridY={false}
    />
  );

  const nivoPacket = metrics2nivoPacket(recommendMetrics);
  return (
    <div className="flex items-center flex-col w-3/5 h-[48rem] rounded-2xl">
      <div className="w-4/5 h-full">
        <RecommendBar data={nivoPacket} />
      </div>
      <div className="h-48" />
      <div
        id="silver"
        className="flex flex-col items-center text-white text-4xl ms-4 font-HakgyoansimWoojuR font-bold tracking-tight leading-10"
      >
        <p>가장 많이 나온 직무 내용은</p>
        <div>
          <span className="text-space-yellow">{bestKeyword}</span>
          <span> 입니다.</span>
        </div>
      </div>
    </div>
  );
};

export { JDRecommendSummary };
