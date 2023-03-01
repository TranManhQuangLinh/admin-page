import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';

const data = [
  { name: 'Day 1', subscribers: 100 },
  { name: 'Day 2', subscribers: 120 },
  { name: 'Day 3', subscribers: 130 },
  { name: 'Day 4', subscribers: 135 },
  { name: 'Day 5', subscribers: 150 },
  { name: 'Day 6', subscribers: 140 },
  { name: 'Day 7', subscribers: 160 },
];

const LineChartComponent = () => {
  return (
    <>
      <div className='chart-title'>Number of subscribers in the last 7 days</div>

      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="subscribers" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Text x={300} y={20} textAnchor="middle" fontSize={16} fontWeight="bold">
        </Text>
      </LineChart>
    </>
  );
};

export default LineChartComponent;
