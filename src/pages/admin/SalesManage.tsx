import React, { MouseEvent, useEffect, useState } from 'react';
import AdminSalesModal from './AdminSalesModal';
import { Button, Form } from 'react-bootstrap';

function SalesManage(props) {
    const [teacher, setTeacher] = useState(["강사1", "강사2","강사3"])
    const [lectureList, setLectureList] = useState(["과목1", "과목2", "과목3"])
    const [classList, setClassList] = useState(["수업1", "수업2", "수업3"])
    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState("매출 추가");
    const [btnTag, setBtnTag] = useState("추가")
    const [onBtn, setOnBtn] = useState(()=>{ })
    const [selected, setSelected] = useState("")
    const [selectedSub, setSelectedSub]=useState("");
    const [hideSubCondition, setHideSubCondition] = useState(true);
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
        console.log(selected)
        if (e.target.value === "condition") {
            setHideSubCondition(true);  // "학생이름"을 선택한 경우 서브 조건 보이기
        } else {
            setHideSubCondition(false);  // 다른 조건을 선택한 경우 서브 조건 숨기기
        }
    };
    const handleSelectSub = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSub(e.target.value)
        console.log(selectedSub)
    };
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
    useEffect(() => {
        console.log("선택된 값: ", selected, selectedSub);
    }, [selected, selectedSub]);  // selected 값이 변경될 때마다 이 코드가 실행됩니다.

    return (
        <div>
            <AdminSalesModal show={modalShow} title={title} btnTag={btnTag} onBtn={onBtn} 
                                onClose={()=>setModalShow(false)} lecture={lectureList} teacher={teacher}/>
        
            <div >
            <h3 className="mb-3">매출 리스트</h3>
                <div className="d-flex justify-content-between align-items-center mb-3 row">
                    <div className="col-md-8 col-12 d-flex justify-content-between align-items-center">
                        <Form className='d-flex w-100'>
                            <Form.Group>
                                <Form.Control size="sm" type="date" placeholder="날짜" />
                            </Form.Group>
                            <Form.Select onChange={handleSelect} size="sm" aria-label="Default select example" className='me-2' style={{ maxWidth: "150px" }}>
                                <option value="condition">검색 조건</option>
                                <option value="lectureTitle">과목이름</option>
                                <option value="class_id">수업분반</option>
                                <option value="studentName">학생이름</option>
                            </Form.Select>
                            <Form.Group hidden={hideSubCondition} controlId="search" className="mb-0 me-2" style={{ maxWidth: "300px" }}>
                                {
                                    selected==="studentName"?
                                        <Form.Control size="sm" type="text" placeholder="학생 이름을 입력하세요" />
                                    :
                                        <Form.Select onChange={handleSelectSub} size="sm" aria-label="Default select example" className='me-2' style={{ maxWidth: "150px" }}>
                                            <option>{selected==="lectureTitle"? "과목이름":"수업분반"}</option>
                                            {selected==="lectureTitle?"?
                                                lectureList.map((item,index)=><option key={index}>{item}</option>)
                                                :
                                                classList.map((item,index)=><option key={index}>{item}</option>)
                                            }
                                                
                                        </Form.Select> 
                                }
                            </Form.Group>
                            <Button className='btn btn-secondary' size="sm" style={{ width: "120px" }}>검색</Button>
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
                                <th>순번</th>
                                <th>매출식별자</th>
                                <th>수업분반</th>
                                <th>과목</th>
                                <th>학생이름</th>
                                <th>매출일자</th>
                                <th>매출</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-hover">
                                <td>1</td>
                                <td>12345</td>
                                <td>분반 A</td>
                                <td>과목 1</td>
                                <td>홍길동</td>
                                <td>2025-04-10</td>
                                <td>100,000원</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SalesManage; 