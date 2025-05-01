import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, CloseButton, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, bcode, acode, initialData}) {
    const [selectedBCode, setSelectedBCode] = useState('');
    const [selectedACode, setSelectedACode] = useState('');
    const [price, setPrice] = useState(0);
    const [saleName, setSaleName] = useState<string>('');

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
                        <Form.Group className="mb-3" controlId="acode">
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
                        <Form.Group className="mb-3" controlId="bcode">
                            <Form.Label>구분 상세</Form.Label>
                            <Form.Select onChange={(e)=>{setSelectedBCode(e.target.value); }}>
                                <option value="">구분 상세</option>
                                {filteredBcode.map((item, index) => (
                                    <option key={index} value={item.detail}>{item.detail}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="saleName">
                            <Form.Label>항목 내용</Form.Label>
                            <Form.Control  type="text"  placeholder="수입/지출 항목 내용을 입력하세요" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control  type="number"  placeholder="숫자 입력" onChange={e => setPrice(Number(e.target.value))} />
                        </Form.Group>
                    </Form.Group>      
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{onBtn({selectedBCode,selectedACode,saleName, price})}}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;