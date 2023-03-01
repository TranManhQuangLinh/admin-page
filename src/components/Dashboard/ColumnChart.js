import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  { name: 'January', revenue: 4000 },
  { name: 'February', revenue: 6000 },
  { name: 'March', revenue: 8000 },
  { name: 'April', revenue: 10000 },
  { name: 'May', revenue: 12000 },
  { name: 'June', revenue: 14000 },
  { name: 'July', revenue: 16000 },
  { name: 'August', revenue: 18000 },
  { name: 'September', revenue: 20000 },
  { name: 'October', revenue: 22000 },
  { name: 'November', revenue: 24000 },
  { name: 'December', revenue: 26000 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <div className='chart-title'>Number of subscribers in the last 7 days</div>

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </>
    );
  }
}
