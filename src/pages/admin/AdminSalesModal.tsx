import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, CloseButton, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, initialData}) {
    const [selectedBname, setSelectedBname] = useState('');
    const [selectedAname, setSelectedAname] = useState('');
    const [selectedAcode, setSelectedAcode] = useState('');
    const [selectedBcode, setSelectedBcode] = useState('');
    const [acodelist, setAcodeList] = useState(["수입", "지출"])
    const [bcodelist, setBcodeList] = useState([
        { class: "수입", detail: "수업료 수입" },
        { class: "수입", detail: "기타 수입" },
        { class: "지출", detail: "강사 월급" },
        { class: "지출", detail: "발주 비용" },
        { class: "지출", detail: "기타 지출" }
    ]);
    const [adminSaleId, setAdminSaleId] = useState<number|null>(null);
    const [price, setPrice] = useState(0);
    const [saleName, setSaleName] = useState<string>('');
    //SaleName의 길이가 20자 이상일 경우 true로 설정
    const [isTooLong, setIsTooLong] = useState(false);
    const filteredBcode = bcodelist.filter(item => item.class === selectedAcode);
    useEffect(() => {
        console.log(show, title,btnTag,onBtn,onClose)
        resetState();
    }, [initialData]);
    const resetState = () => {
        if (initialData) {
            setSelectedAname(initialData.aname);
            setSelectedBname(initialData.bname);
            setSelectedAcode(initialData.cdAcode);
            setSelectedBcode(initialData.cdBcode);
            setSaleName(initialData.saleName);
            setPrice(initialData.price);
                    // 👇 수정 버튼일 때만 adminSaleId 설정
            if (btnTag === "수정") {
                setAdminSaleId(initialData.adminSaleId);
            } else {
                setAdminSaleId(null);
            }
        } else {
            setSelectedAcode('');
            setSelectedBcode('');
            setSaleName('');
            setPrice(0);
            setAdminSaleId(null);
        }
    };
    const handleClose=()=>{
        resetState();
        onClose();
    }
    const isValidSaleName = (text: string): boolean => {
        const regex = /^[가-힣]{0,5}$/;  // 한글만 5글자
        return regex.test(text);
    };
    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <CloseButton onClick={handleClose}></CloseButton>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Group className="mb-3" controlId="acode">
                            <Form.Label>대분류</Form.Label>
                            <Form.Select value={selectedAname} onChange={((e)=>{
                                    setSelectedAcode(e.target.value)
                            })}>
                                <option value="">구분</option>
                                {acodelist.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="bcode">
                            <Form.Label>소분류</Form.Label>
                            <Form.Select value={selectedBname} onChange={(e)=>{setSelectedBcode(e.target.value); }}>
                                <option value="">구분</option>
                                {filteredBcode.map((item, index) => (
                                    <option key={index} value={item.detail}>{item.detail}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="saleName">
                            <Form.Label>항목 내용</Form.Label>
                            <Form.Control value={saleName} type="text"  placeholder="수입/지출 항목 내용을 입력하세요" onChange={(e) => {setSaleName(e.target.value); setIsTooLong(!isValidSaleName(e.target.value))}} />
                            <Form.Control.Feedback type="invalid">
                                한글 5자만 입력 가능합니다.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control value={price} type="number"  placeholder="숫자 입력" onChange={e => setPrice(Number(e.target.value))} />
                        </Form.Group>
                    </Form.Group>      
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={!isValidSaleName(saleName)} onClick={(e)=>{
                        e.preventDefault()    
                        console.log("Btn Clicked")
                        onBtn({adminSaleId, selectedBcode,selectedAcode,saleName, price})
                    }}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;