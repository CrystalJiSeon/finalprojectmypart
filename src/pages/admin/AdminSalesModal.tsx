import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Dropdown, FloatingLabel, Form, ListGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Student = {id:number, name:string}
function AdminSalesModal({show, title, btnTag, onBtn, onClose, lecture, teacher}) {
    const [date, setDate] = useState('');
    const [selectedLecture, setSelectedLecture] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [salesAmount, setSalesAmount] = useState(0);
    const [studentName, setStudentName] = useState<string>('');
    const [studentId, setStudentId] = useState<number>();
    const [studentList, setStudentList] = useState<Student[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (studentName.length > 1) {
            axios.get(`/api/students/search?name=${studentName}`)
                .then(res => {
                    setStudentList(res.data);
                    setShowDropdown(true);
                })
                .catch(err => {
                    console.error(err);
                    setStudentList([]);
                    setShowDropdown(false);
                });
        } else {
            setShowDropdown(false);
        }
    }, [studentName]);

    const handleSelectStudent = (student:Student) => {
        setStudentName(student.name);
        setStudentId(student.id);
        setShowDropdown(false);
    };
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
                            <Form.Label>수업</Form.Label>
                            <Form.Select>
                                <option value="">수업을 선택하세요</option>
                                {lecture.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="teacher">
                            <Form.Label>강사</Form.Label>
                            <Form.Select>
                                <option value="">강사를 선택하세요</option>
                                {teacher.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 position-relative" controlId="student">
                        <Form.Label>학생 이름 검색</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="학생 이름을 입력하세요"
                            value={studentName}
                            onChange={e => setStudentName(e.target.value)}
                            autoComplete="off"
                        />
                        {showDropdown && (
                            <ListGroup style={{ position: 'absolute', zIndex: 1000, width: '100%' }}>
                                {studentList.map((student) => (
                                    <ListGroup.Item
                                        key={student.id}
                                        action
                                        onClick={() => handleSelectStudent(student)}
                                    >
                                        {student.name} (ID: {student.id})
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="sales_amount">
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