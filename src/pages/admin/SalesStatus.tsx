import React, { useState } from 'react';
type Thead = { key:string, value:string }
function SalesStatus(props) {
    const [thead, setThead] = useState<Thead[]>([
        { key: "sales_date", value: "매출일" },
        { key: "sales_amount", value: "매출" }
    ]);
    const [teacher, setTeacher] = useState(["강사1", "강사2","강사3"])
    const [lecture, setLecture] = useState(["수업1", "수업2", "수업3"])
    const [tbody, setTbody] = useState([
        { sales_date: "2025-01-15", sales_amount: 150000 },{ sales_date: "2025-01-16", sales_amount: 250000 },
        { sales_date: "2025-01-17", sales_amount: 180000 },{ sales_date: "2025-01-18", sales_amount: 220000 },
        { sales_date: "2025-01-19", sales_amount: 190000 },{ sales_date: "2025-01-20", sales_amount: 200000 },
        { sales_date: "2025-01-21", sales_amount: 210000 },{ sales_date: "2025-01-22", sales_amount: 160000 },
        { sales_date: "2025-01-23", sales_amount: 170000 },{ sales_date: "2025-01-24", sales_amount: 230000 },
        { sales_date: "2025-01-25", sales_amount: 250000 },{ sales_date: "2025-01-26", sales_amount: 260000 },
        { sales_date: "2025-01-27", sales_amount: 240000 },{ sales_date: "2025-01-28", sales_amount: 210000 },
        { sales_date: "2025-01-29", sales_amount: 200000 },{ sales_date: "2025-01-30", sales_amount: 190000 },
        { sales_date: "2025-01-31", sales_amount: 220000 },{ sales_date: "2025-02-01", sales_amount: 230000 },
        { sales_date: "2025-02-02", sales_amount: 240000 },{ sales_date: "2025-02-03", sales_amount: 250000 }
    ]);
    
    return (
        <div>
            <div>
                <h3>매출 확인 영역</h3>
                <table>
                    <thead>
                        <tr>
                            {thead.map((column) => (
                                <th key={column.key}>{column.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tbody.map((row, index) => (
                            <tr key={index}>
                                <td>{row.sales_date}</td>
                                <td>{row.sales_amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesStatus;