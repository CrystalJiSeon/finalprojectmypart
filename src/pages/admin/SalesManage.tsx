import React, { MouseEvent, useEffect, useState } from 'react';
import AdminSalesModal from './AdminSalesModal';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter, useSearchParams } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from '../Layout';
import api from '../../api';

interface Sales{
    cre_date:string;
    edit_date:string;
    sale_name:string;
    price:number;
    a_code:string;
    b_code:string;
}
function SalesManage() {
    const [teacher, setTeacher] = useState(["강사1", "강사2","강사3"])
    const [bcode, setBcodeList] = useState(["수업료 수입", "기타 수입", "강사 월급", "발주 비용", "기타 지출"])
    const [acode, setAcodeList] = useState(["수입", "지출"])
    const B_CODE_MAP: { [key: string]: string } = {
        "CLS": "수업료 수입",
        "ETC": "기타 수입",
        "SALARY": "강사 월급",
        "ITEM": "발주 비용",
        "C_ETC": "기타 지출"
    };
    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState("매출 추가");
    const [btnTag, setBtnTag] = useState("추가")
    const [onBtn, setOnBtn] = useState(()=>{ })
    const [selected, setSelected] = useState("")
    const [selectedSub, setSelectedSub]=useState("");
    const [salesList, setSalesList]=useState<Sales[]>([]);
    const [params, setParams] = useSearchParams({
        search:[],
        store_name:""
    });

    useEffect(()=>{
        api.get(`/sales`)
        .then(res=>{
            const mappedData = (res.data as Sales[]).map(item => ({
                ...item,
                b_code: B_CODE_MAP[item.b_code] || item.b_code // 못찾으면 원래 값
            }));
            setSalesList(mappedData);
        })
        .catch(error=>console.log(error));
    },[])

    const handleAddSales = async(data:{
        sdate:string;
        selectedLecture: string;
        selectedClass: string;
        selectedSalesAmount:number;
        studentId?:number;
        studentName:string;
    })=>{
        try{
            const res = await api.post("/sales",data)
            console.log(data)
            alert("매출이 추가되었습니다")
            
            setModalShow(false)
        }catch(error){
            console.error("매출 추가 실패:", error)
            alert("매출을 추가할 수 없습니다.")
        }
    }
    const handleAdd = () => {
        setTitle("매출 추가")
        setBtnTag("추가")
        setOnBtn(()=>handleAddSales)
        setModalShow(true)
    };
    const handleUpdate = () => {
        setModalShow(true)
        console.log(modalShow)
        setTitle("매출 수정")
        setBtnTag("수정")
    };

    useEffect(() => {
        console.log("선택된 값: ", selected, selectedSub);
    }, [selected, selectedSub]);  // selected 값이 변경될 때마다 이 코드가 실행됩니다.
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
    
        setCheckedItems(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };
    const handleSearch=()=>{
        console.log("체크된 항목들:", checkedItems);
    }
    return (
        <Layout currentMenu="salesmanage">
            <AdminSalesModal show={modalShow} title={title} btnTag={btnTag} onBtn={onBtn} 
                                onClose={()=>setModalShow(false)} acode={acode} bcode={bcode}/>
        
            <div className='container'>
            <h3 className="mb-3">매출 리스트</h3>
                <div className="d-flex justify-content-between align-items-center mb-3 row">
                    <div className="col-md-8 col-12 d-flex justify-content-between align-items-center">
                        <Form className='d-flex w-100'>
                            <Form.Check inline label="수업료 수입" value="CLS" type="checkbox" id="CLS"onChange={handleCheckboxChange}/>
                            <Form.Check inline label="기타 수입" value="ETC" type="checkbox" id="ETC" onChange={handleCheckboxChange}/>
                            <Form.Check inline label="강사 월급" value="SALARY" type="checkbox" id="SALARY" onChange={handleCheckboxChange}/>
                            <Form.Check inline label="발주 비용" value="ITEM" type="checkbox" id="ITEM" onChange={handleCheckboxChange}/>
                            <Form.Check inline label="기타 지출" value="C_ETC" type="checkbox" id="C_ETC" onChange={handleCheckboxChange}/>
                            <Button className='btn btn-secondary' size="sm" style={{ width: "50px" }} onClick={handleSearch}>검색</Button>
                        </Form>
                    </div>
                    <div className='col-md-4 col-12 d-flex justify-content-end mt-3 mt-md-0'>
                        <Button className="btn btn-primary me-2"  size="sm" onClick={handleAdd}>매출 추가</Button>
                    </div>
                </div>
                <div>
                    <table className="table table-bordered responsive">
                        <thead className="table-light">
                            <tr>
                                <th>매출등록일자</th>
                                <th>매출수정일자</th>
                                <th>항목 내용</th>
                                <th>금액</th>
                                <th>구분</th>
                                <th>구분상세</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesList.map((item,index)=>(
                                <tr className="table-hover" key={index}>
                                    <td>{item.cre_date}</td>
                                    <td>{item.edit_date}</td>
                                    <td>{item.sale_name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.a_code}</td>
                                    <td>{item.b_code}</td>
                                    <td>
                                        <button onClick={handleUpdate} className="btn btn-sm btn-outline-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                                 
                            }                           
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default SalesManage

