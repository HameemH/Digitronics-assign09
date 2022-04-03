
import React from 'react';
import { Line, LineChart, XAxis, YAxis,Tooltip, BarChart, CartesianGrid, Legend, Bar } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
           investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
           investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
           investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
           investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
           investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
           investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ];
    
    return (
        <div className='container '>
            <h1>Dashboard</h1>
           <div className='row mx-auto'>
           <div className="chart-1 col-6">
            <LineChart width={450} height={500} data={data}>
            <Line  dataKey='month'></Line>
            <Line dataKey='investment'></Line>
            <XAxis dataKey="month"></XAxis>
            
            <YAxis dataKey='investment'></YAxis>
            <Tooltip/>
        </LineChart>
            </div>
            <div className="chart-2 col-6">
            <BarChart width={500} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#8884d8" />

            </BarChart>
            </div>
           </div>
        </div>
    );
};

export default Dashboard;