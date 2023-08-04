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
      indexBy="key"
      margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
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
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridX={false}
      enableGridY={false}
    />
  );

  const nivoPacket = metrics2nivoPacket(recommendMetrics);
  return (
    <div className="flex items-center w-4/5 h-80 bg-white rounded-2xl">
      <div className="w-3/5 h-full">
        <RecommendBar data={nivoPacket} />
      </div>
      <div className="flex flex-col items-center text-4xl ms-4 font-SpoqaHanSansNeo font-bold tracking-tight leading-10">
        <p>가장 많이 나온 직무 내용은</p>
        <div>
          <span className="text-space-blue">{bestKeyword}</span>
          <span> 입니다.</span>
        </div>
      </div>
    </div>
  );
};

export { JDRecommendSummary };
