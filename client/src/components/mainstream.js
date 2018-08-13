import React from "react"
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const MainStreamChart = ({ chartData }) => (
  <ResponsiveContainer width="100%" height={600} className="pb-6">
    <LineChart
      data={chartData}
      margin={{ top: 30, right: 75, left: 75, bottom: 30 }}
    >
      <Line type="monotone" dataKey="stargazers" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name">
        <Label stroke="white" value="Repos you've starred" position="bottom" />
      </XAxis>
      <YAxis>
        <Label stroke="white" value="no. stars" offset={10} position="top" />
      </YAxis>
      <Tooltip labelStyle={{ color: "black" }} />
    </LineChart>
  </ResponsiveContainer>
)

export default MainStreamChart
