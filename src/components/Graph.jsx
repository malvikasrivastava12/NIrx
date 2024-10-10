import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "../App.css";
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["10 AM", "1 PM", "4 PM", "7 PM", "10 PM", "1 AM", "4 AM"];
const durations = ["24H", "1W", "1M", "1Y", "All"];
export function Graph({ Theme }) {
  return (
    <div className={` graph ${Theme}`}>
      <div className="graph-header-container">
        <div className="graph-header">
          <span className={`Porfolio-performance ${Theme}`}>
            Protfolio Performance
          </span>
          <span className="Statics">Statics</span>
          <span className="Transction">Transaction</span>
        </div>
        <div className="durations">
          {durations.map((duration) => (
            <span className={`duration ${Theme}`}>{duration}</span>
          ))}
        </div>
      </div>
      <LineChart
        width={900}
        height={300}
        className={`chart-container ${Theme}`}
        series={[
          { data: pData, label: "pv" },
          { data: uData, label: "uv" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </div>
  );
}
