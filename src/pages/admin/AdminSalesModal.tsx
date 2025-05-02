import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, CloseButton, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, bcode, acode, initialData}) {
    const [selectedBcode, setSelectedBcode] = useState('');
    const [selectedAcode, setSelectedAcode] = useState('');
    const [price, setPrice] = useState(0);
    const [saleName, setSaleName] = useState<string>('');

    const filteredBcode = bcode.filter(item => item.class === selectedAcode);
    useEffect(() => {
        if (initialData) {
            setSelectedAcode(initialData.cdAcode); // 예: "수입"
            setSelectedBcode(initialData.cdBcode); // 예: "수업료 수입"
            setSaleName(initialData.saleName);
            setPrice(initialData.price);
        }
    }, [initialData]);
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
                            <Form.Label>대분류</Form.Label>
                            <Form.Select value={selectedAcode} onChange={((e)=>{
                                    setSelectedAcode(e.target.value)
                            })}>
                                <option value="">구분</option>
                                {acode.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bcode">
                            <Form.Label>소분류</Form.Label>
                            <Form.Select value={selectedBcode} onChange={(e)=>{setSelectedBcode(e.target.value); }}>
                                <option value="">구분</option>
                                {filteredBcode.map((item, index) => (
                                    <option key={index} value={item.detail}>{item.detail}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="saleName">
                            <Form.Label>항목 내용</Form.Label>
                            <Form.Control value={saleName} type="text"  placeholder="수입/지출 항목 내용을 입력하세요" onChange={(e) => setSaleName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control value={price} type="number"  placeholder="숫자 입력" onChange={e => setPrice(Number(e.target.value))} />
                        </Form.Group>
                    </Form.Group>      
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{
                        console.log("Btn Clicked")
                        onBtn({selectedBcode,selectedAcode,saleName, price})
                    }}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;