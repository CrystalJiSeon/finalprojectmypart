import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, lecture, classList}) {
    const [sdate, setSDate] = useState('');
    const [selectedLecture, setSelectedLecture] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [salesAmount, setSalesAmount] = useState(0);
    const [studentName, setStudentName] = useState<string>('');

 

    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Header closeButton onClick={onClose}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="sales_date">
                            <Form.Label>날짜</Form.Label>
                            <Form.Control  type="date"  placeholder="YYYY-MM-DD" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lecture">
                            <Form.Label>수업 분반</Form.Label>
                            <Form.Select onChange={((e)=>setSelectedClass(e.target.value))}>
                                <option value="">강사를 선택하세요</option>
                                {classList.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="teacher">
                            <Form.Label>과목</Form.Label>
                            <Form.Select onChange={((e)=>setSelectedLecture(e.target.value))}>
                                <option value="">과목를 선택하세요</option>
                                {lecture.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 position-relative" controlId="student">
                        <Form.Label>{btnTag==="추가"? "등록한 학생 이름":"학생 이름 수정하기"}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="학생 이름을 입력하세요"
                            value={studentName}
                            onChange={e => setStudentName(e.target.value)}
                            autoComplete="off"/>
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="sales_amount">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control  type="number"  placeholder="숫자 입력" onChange={e => setSalesAmount(Number(e.target.value))} />
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{onBtn({sdate,selectedLecture,selectedClass,salesAmount,studentName})}}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;