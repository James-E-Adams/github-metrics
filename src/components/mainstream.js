import {
  Label,
  LineChart,
  Line,
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
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="stargazers" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        {/* <XAxis
          dataKey="starredAt"
          type="number"
          domain={["dataMin", "dataMax"]}
        > */}
        <XAxis dataKey="name">
          {/* <Label value="Date" offset={-10} position="insideBottom" /> */}
        </XAxis>
        <YAxis>
          <Label value="no. stars" offset={-20} position="left" />
        </YAxis>
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MainStreamChart;
