import axios from 'axios';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function AdminSalesModal({show, title, btnTag, onBtn}) {
    const [show, setShow] = useState();
    const [lecture, setLecutre]= useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Header closeButton onClick={()=>{
                    setShow(false);            
                }}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="sales_date">
                            <Form.Label>날짜</Form.Label>
                            <Form.Control  type="date"  placeholder="YYYY-MM-DD" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sales_date">
                            <Form.Label>날짜</Form.Label>
                            <Form.Control  type="date"  placeholder="YYYY-MM-DD" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="" >
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="class id" />
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onBtn}>{btnTag}</Button>
                </Modal.Footer>
                <input type="date" placeholder='날짜를 입력하세요'/> 
                    <select>
                        <option value="">수업을 선택하세요</option>
                        {lecture.map((item,index)=><option key={index}>{item}</option>)}
                    </select>
                    <input type='text' placeholder='학생 ID를 입력하세요'/>
                    <input type="text" placeholder='매출을 입력하세요'/>
                    <button>저장</button>
            </Modal>
        </>
    );

}

export default AdminSalesModal;