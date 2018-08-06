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

const MainStreamChart = ({ chartData }) => (
  <ResponsiveContainer width={1000} height="80%">
    <LineChart
      data={chartData}
      margin={{ top: 15, right: 100, left: 100, bottom: 5 }}
    >
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
        <Label value="no. stars" offset={10} position="left" />
      </YAxis>
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default MainStreamChart;
