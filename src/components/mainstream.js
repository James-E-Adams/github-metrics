import {
  Label,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import React from "react";
const MainStreamChart = ({ chartData, chartOptions }) => {
  return (
    <ResponsiveContainer width={1000} height="80%">
      <ScatterChart margin={{ top: 15, right: 100, left: 100, bottom: 5 }}>
        <CartesianGrid stroke="#ccc" />
        {/* <XAxis
          dataKey="starredAt"
          type="number"
          domain={["dataMin", "dataMax"]}
        > */}
        <XAxis dataKey="name">
          {/* <Label value="Date" offset={-10} position="insideBottom" /> */}
        </XAxis>
        <YAxis dataKey="stargazers">
          <Label value="stargazers" offset={10} position="left" />
        </YAxis>
        <Scatter data={chartData} dataKey="stargazers" stroke="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default MainStreamChart;
