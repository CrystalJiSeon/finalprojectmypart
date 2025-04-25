import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

type MonthlyData = {
    month: string;
    income: number | null;
    expense: number | null;
  };
function SalesStatus(props) {
    const [thead, setThead] = useState<Thead[]>([
        { key: "sales_date", value: "매출일" },
        { key: "sales_amount", value: "매출" }
    ]);
    const [teacher, setTeacher] = useState(["강사1", "강사2","강사3"])
    const [lecture, setLecture] = useState(["수업1", "수업2", "수업3"])
    const salesData: MonthlyData[] = [
        { month: '1월', income: 1200000, expense: 800000 },
        { month: '2월', income: 1350000, expense: 950000 },
        { month: '3월', income: 1100000, expense: 720000 },
        { month: '4월', income: 1500000, expense: 1000000 },
        { month: '5월', income: null, expense: null },
        { month: '6월', income: null, expense: null },
        { month: '7월', income: null, expense: null },
        { month: '8월', income: null, expense: null },
        { month: '9월', income: null, expense: null },
        { month: '10월', income: null, expense: null },
        { month: '11월', income: null, expense: null },
        { month: '12월', income: null, expense: null },
      ];
    
    return (
        <Layout currentMenu="salesstat">
            <div>
                <h3>매출 확인 영역</h3>
                <ResponsiveContainer width={1000} height={400}>
                    <LineChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="income" stroke="#82ca9d" connectNulls={false} />
                        <Line type="monotone" dataKey="expense" stroke="#8884d8" connectNulls={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </Layout>
    );
}
export default SalesStatus;