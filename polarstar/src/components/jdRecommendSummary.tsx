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
      margin={{ top: 50, right: 20, bottom: 70, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      theme={{
        axis: {
          ticks: {
            text: {
              fontSize: 20,
              fill: "#ffffff",
              fontFamily: "spoqaHanSansNeo",
              fontWeight: "light",
              alignItems: "center",
            },
          },
        },
      }}
      colors="#f7d64d"
      layout="vertical"
      borderRadius={15}
      motionConfig={"wobbly"}
      borderColor={{ from: "color", modifiers: [["brighter", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 30,
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
      <div className="w-full h-full">
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
