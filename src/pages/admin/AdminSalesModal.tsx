import axios from 'axios';
import { useState } from 'react';
import { Button, Dropdown, FloatingLabel, Form, Modal } from 'react-bootstrap';

function AdminSalesModal({show, title, btnTag, onBtn, onClose}) {
    const lecture = [ "수학","영어","과학" ];
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
                        <Form.Group className="mb-3" controlId="student">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    수업을 선택하세요
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">수학</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">영어</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="student">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    강사를 선택하세요
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">수학</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">영어</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="student">
                            <Form.Label>학생 이름 검색</Form.Label>
                            <Form.Control  type="text"  placeholder="학생 이름을 입력하세요" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="student">
                            <Form.Label>매출 입력</Form.Label>
                            <Form.Control  type="number"  placeholder="숫자 입력" autoFocus />
                        </Form.Group>
                    </Form>        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onBtn}>{btnTag}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default AdminSalesModal;