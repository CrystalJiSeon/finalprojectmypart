import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, CloseButton, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, bcode, acode}) {
    const [sdate, setSDate] = useState('');
    const [selectedBCode, setSelectedBCode] = useState('');
    const [selectedACode, setSelectedACode] = useState('');
    const [salesAmount, setSalesAmount] = useState(0);
    const [studentName, setStudentName] = useState<string>('');

    const filteredBcode = bcode.filter(item => item.class === selectedACode);

    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <CloseButton onClick={onClose}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Group className="mb-3" controlId="lecture">
                            <Form.Label>구분</Form.Label>
                            <Form.Select onChange={((e)=>{
                                    setSelectedACode(e.target.value)
                                    setSelectedBCode('')
                            })}>
                                <option value="">구분</option>
                                {acode.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="teacher">
                            <Form.Label>구분 상세</Form.Label>
                            <Form.Select onChange={(e)=>{setSelectedBCode(e.target.value); }}>
                                <option value="">구분 상세</option>
                                {filteredBcode.map((item, index) => (
                                    <option key={index} value={item.detail}>{item.detail}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sales_date">
                            <Form.Label>항목 내용</Form.Label>
                            <Form.Control  type="text"  placeholder="수입/지출 항목 내용을 입력하세요" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sales_amount">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control  type="number"  placeholder="숫자 입력" onChange={e => setSalesAmount(Number(e.target.value))} />
                        </Form.Group>
                    </Form.Group>      
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{onBtn({sdate,selectedBCode,selectedACode,salesAmount,studentName})}}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;