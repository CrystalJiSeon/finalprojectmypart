import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Cell, ResponsiveContainer
  } from 'recharts';
import { Button, Form } from 'react-bootstrap';

type MonthlyData = {
    month: string;
    income: number | null;
    expense: number | null;
  };
function SalesStatus(props) {
    const [teacher, setTeacher] = useState(["강사1", "강사2","강사3"])
    const [lecture, setLecture] = useState(["수업1", "수업2", "수업3"])
    const [selected, setSelected] = useState("condition")
    const [selectedSub, setSelectedSub]=useState("");
    const [hideSubCondition, setHideSubCondition] = useState(true);
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
      
    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
    const yearlySales = [
    { subject: '자바', sales: 1200000 },
    { subject: '파이썬', sales: 900000 },
    { subject: 'DB', sales: 750000 },
    { subject: 'AI', sales: 500000 },
    ];
    const monthlySales = [
        { subject: '자바', sales: 15000000 },
        { subject: '파이썬', sales: 12000000 },
        { subject: 'DB', sales: 8000000 },
        { subject: 'AI', sales: 6000000 },
      ];

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
        console.log(selected)
        if (e.target.value === "condition") {
            setHideSubCondition(true);  // "학생이름"을 선택한 경우 서브 조건 보이기
        } else {
            setHideSubCondition(false);  // 다른 조건을 선택한 경우 서브 조건 숨기기
        }
    };

    useEffect(() => {
        console.log("선택된 값: ", selected, selectedSub);
    }, [selected, selectedSub]);  // selected 값이 변경될 때마다 이 코드가 실행됩니다.

    return (
        <Layout currentMenu="salesstat">
            <div>
                <h3>매출 확인 영역</h3>
                <div className="d-flex justify-content-between align-items-center mb-3 row">
                    <div className="col-md-8 col-12 d-flex justify-content-between align-items-center">
                        <Form className='d-flex'>
                            <Form.Select value={selected} onChange={handleSelect} size="sm" aria-label="yearorlecture" className='me-2' style={{ minWidth: "250px", maxWidth:"500px" }}>
                                <option value="condition">검색 조건</option>
                                <option value="salesByYear">연별 매출</option>
                                <option value="salesByLecture">과목별 매출</option>
                            </Form.Select>
                            <Form.Select hidden={hideSubCondition} size="sm" aria-label="year" className='me-2' style={{ minWidth: "250px", maxWidth:"300px" }}>
                                <option value="condition">연도 선택</option>

                            </Form.Select>
                            <Button className='btn btn-secondary' size="sm" style={{ width: "120px" }}>검색</Button>
                        </Form>
                    </div>
                </div>
                
                    {
                        selected==="salesByYear"?
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
                        :
                        <div>
                        </div>
                    }
                    {   
                        selected==="salesByLecture"?
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>
                                    <h5>과목별 연매출</h5>
                                </div>
                                <ResponsiveContainer width={500} height={400}>
                                    <PieChart>
                                    <Pie
                                        data={yearlySales}
                                        dataKey="sales"
                                        nameKey="subject"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {yearlySales.map((entry, index) => (
                                        <Cell key={`cell-yearly-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <div className="d-flex align-items-center">
                                    <Form className="d-flex align-items-center flex-row gap-2" style={{ flexWrap: 'nowrap' }}>
                                        <div className="d-flex align-items-center">
                                            <h5 className="mb-0">해당 연도의 월매출</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Form.Select hidden={hideSubCondition} size="sm" aria-label="year" style={{ minWidth: '150px' }}>
                                                <option value="condition">월 선택</option>
                                            </Form.Select>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Button className="btn btn-secondary" size="sm">검색</Button>
                                        </div>
                                    </Form>
                                </div>
                                <ResponsiveContainer width={500} height={400}>
                                    <PieChart>
                                    <Pie data={monthlySales} dataKey="sales" nameKey="subject" 
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {monthlySales.map((entry, index) => (
                                        <Cell key={`cell-monthly-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div> 
                        :
                        <div>
                        </div>
                    }
            </div>

        </Layout>
    );
}
export default SalesStatus;