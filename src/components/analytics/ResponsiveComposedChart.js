import React from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';

export default function ResponsiveComposedChart(props) {

    return (
      <div style={{ width: '80%', height: 300 }}>
        <h4>{props.title || "Title"}</h4>
        <ResponsiveContainer>
          <ComposedChart
            width={700}
            height={400}
            data={props.data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" barSize={80} fill="#955196" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
