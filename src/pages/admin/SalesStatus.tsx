import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,PieChart, Pie, Cell, ResponsiveContainer
  } from 'recharts';
import { Button, Form } from 'react-bootstrap';
import api from '../../api';
import { AdminSalesStatDto } from '../../Type/AdminSalesStatDto';

type MonthlyData = {
    sMonth: string;
    profit: number | null;
    cost: number | null;
  };
function SalesStatus(props) {
    const [thisYear, setThisYear]=useState<string>(new Date().getFullYear().toString());
    const [selected, setSelected] = useState("condition");
    const [sYearList, setSYearList] = useState<AdminSalesStatDto[]>([]);
    const [sMonthList, setSMonthList] = useState<AdminSalesStatDto[]>([]);
    const [sYear, setSYear] = useState(thisYear);
    const [sMonth, setSMonth] = useState("");
    const [selectedSub, setSelectedSub]=useState("");
    const [allYearData, setAllYearData] = useState<AdminSalesStatDto[]>([]);
    const [hideSubCondition, setHideSubCondition] = useState(true);
    const [salesData, setSalesData]= useState<MonthlyData[]>([]);

    useEffect(() => {
        if (selected === "salesByYear") {
            fetchYearlySales();
            console.log("AllYearData", allYearData)
        }else if (selected === "salesByLecture") {
            fetchLectureSales();
        } else {
            setSYearList([]);
        }
    }, [selected]);
   // useEffect에서 allYearData가 변경될 때 salesData를 업데이트
useEffect(() => {
    if (selected === "salesByYear" && allYearData.length > 0) {
        const selectedYearData = allYearData.find(item => item.syear === sYear);
        console.log("selectedYearData", selectedYearData)
        if (selectedYearData?.profitList || selectedYearData?.costList) {
            const profitMap = new Map<string, number>();
            const costMap = new Map<string, number>();

            // profitList, costList에서 월별 데이터를 매핑
            selectedYearData.profitList?.forEach(item => {
                if (item.smonth && item.price !== undefined) {
                    profitMap.set(item.smonth, item.price);
                }
            });

            selectedYearData.costList?.forEach(item => {
                if (item.smonth && item.price !== undefined) {
                    costMap.set(item.smonth, item.price);
                }
            });
            console.log(profitMap, "profitMap")
            console.log(costMap, "costMap")
            // 모든 월을 합친 유니크한 Set
            const allMonths = Array.from(new Set([...profitMap.keys(), ...costMap.keys()]));

            // 월별로 profit, cost를 병합하여 포맷
            const formatted = allMonths.map(month => ({
                sMonth: month,
                profit: profitMap.get(month) || 0,
                cost: costMap.get(month) || 0,
            })).sort((a, b) => Number(a.sMonth) - Number(b.sMonth)); // 월 정렬
            console.log(formatted, "formatted")
            setSalesData(formatted);
        } else {
            setSalesData([]); // 데이터 없으면 빈 배열
        }
        console.log(sYearList, "sYearList")
        console.log("sYear", sYear)
        console.log("AllYearData", allYearData)
    }
}, [allYearData, selected, sYear]);
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
        console.log(selected)
        if (e.target.value === "condition") {
            setHideSubCondition(true);  // "과목별"을 선택한 경우 서브 조건 보이기
        } else {
            setHideSubCondition(false);  // "연도별"을 선택한 경우 서브 조건 숨기기
        }
    };
    const fetchYearlySales =() => {
        api.get(`/sales/YearlySale/${sYear}`)
        .then((res) => {
            const allyearlist= res.data.syearList;
            setAllYearData(allyearlist);
            const yearKeys = allyearlist.map(item => item.syear);
            setSYearList(yearKeys);
        })
        .catch((error) => {
            console.error("연도별 매출 데이터를 불러오는 중 오류 발생:", error);
        });    
    };
    const fetchLectureSales =() => {
        api.get(`/sales/LectureSale/${sYear}`)

    }
    const whenYearChange = (e)=> {
        setSYear(e.target.value);
    }
    

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];
    const yearlySalesByLecture = [
    { subject: '자바', sales: 1200000 },
    { subject: '파이썬', sales: 900000 },
    { subject: 'DB', sales: 750000 },
    { subject: 'AI', sales: 500000 },
    ];
    const monthlySalesByLecture = [
        { subject: '자바', sales: 15000000 },
        { subject: '파이썬', sales: 12000000 },
        { subject: 'DB', sales: 8000000 },
        { subject: 'AI', sales: 6000000 },
    ];
  

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
                            <Form.Select hidden={hideSubCondition} size="sm" aria-label="year" className='me-2' style={{ minWidth: "250px", maxWidth:"300px" }}  value={sYear} onChange={(e)=> {whenYearChange(e)}}>
                                <option value="selectyearcondition">연도 선택</option>
                                {sYearList.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))}
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
                                <XAxis dataKey="sMonth" />
                                <Tooltip formatter={(value) => {
                                    if (typeof value === 'number') return `${value.toLocaleString()}원`;
                                    return value;
                                }} />
                                <YAxis tickFormatter={(value) => {
                                    if (typeof value === 'number') return `${value.toLocaleString()}`;
                                    return value;
                                }} />
                                <Legend formatter={(value) => {
                                            if (value === 'profit') return '수입'; // profit에 대해 한글로 변경
                                            if (value === 'cost') return '지출';  // cost에 대해 한글로 변경
                                            return value;
                                }} />
                                <Line type="monotone" dataKey="profit" stroke="#1E90FF" connectNulls={false} />
                                <Line type="monotone" dataKey="cost" stroke="#FF6347" connectNulls={false} />
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
                                        data={yearlySalesByLecture}
                                        dataKey="sales"
                                        nameKey="subject"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {yearlySalesByLecture.map((entry, index) => (
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
                                    <Pie data={monthlySalesByLecture} dataKey="sales" nameKey="subject" 
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label
                                    >
                                        {monthlySalesByLecture.map((entry, index) => (
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