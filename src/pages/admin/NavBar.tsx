import React from 'react';
import { Nav } from 'react-bootstrap';

function NavBar(props) {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/admin/sales">Sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/order">Order</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/class">Class</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/teacher" >Teacher</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin/student" >Student</Nav.Link>
                </Nav.Item>
            </Nav>
           
        </div>
    );
}

export default NavBar;