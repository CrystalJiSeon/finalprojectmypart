import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSalesDto } from '../../types/AdminType';
import AdminSalesModal from './AdminSalesModal';
import 'bootstrap/dist/css/bootstrap.min.css';

type Thead = { key:string, value:string }
//type tbody = { key:thead, value: AdminSalesDto}
function AdminSales(props) {
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
    
    useEffect(() => {
        // useEffect는 필요한 초기화 작업을 여기서 할 수 있습니다.
    }, []);
    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState("매출 추가");
    const [btnTag, setBtnTag] = useState("추가")
    const [onBtn, setOnBtn] = useState(()=>{ })
    const handleAdd = () => {
        setModalShow(true)
        console.log(modalShow)
        setTitle("매출 추가")
        setBtnTag("추가")
    };
    const handleUpdate = () => {
        setModalShow(true)
        console.log(modalShow)
        setTitle("매출 수정")
        setBtnTag("수정")
    };
    return (
        <div>
            <div className='container'>
                <Link to={"/admin"}>Admin Main</Link>
                <AdminSalesModal show={modalShow} title={title} btnTag={btnTag} onBtn={onBtn} 
                                onClose={()=>setModalShow(false)} lecture={lecture} teacher={teacher}/>
                <div >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="mb-0">매출 리스트</h3>
                        <div>
                            <button className="btn btn-primary me-2" onClick={handleAdd}>매출 추가</button>
                            <button className="btn btn-secondary" onClick={handleUpdate}>매출 수정</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
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
        </div>
    );
}

export default AdminSales;