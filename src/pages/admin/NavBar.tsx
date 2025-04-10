import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../../../public/AdminNavCss.css'
function NavBar(props) {
    const [activeSubMenu, setActiveSubMenu] = useState(() => {
        const path = window.location.pathname;
        return path.split('/').pop();
    });
    const [currentMenu, setCurrentMenu]=useState();
    const location = useLocation();
    const handleSubMenuClick = (subMenu, path) => {
        setActiveSubMenu(subMenu);
        window.location.href = path;
    };
    
    const handleMenuClick = (menu) => {
        setActiveSubMenu(null);
    };
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>추후 없앨 탭들임</Nav.Item>
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
           
            <aside className="sidebar">
            <div className="sidebar-top">
                <div className="user-info">
                    <div className="user-name">
                        로그인 중인 직원 이름 위치
                    </div>
                    <div className="login-time">로그인 시간</div>
                    <button className="box small">로그아웃 버튼</button>
                </div>
            </div>
            <ul>
                <li>
                    <span>
                        <i className="bi bi-piggy-bank"></i>매출 관리
                    </span>
                    <ul className="submenu">
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu1', '/admin/salesmanage')}>매출관리</a>
                        </li>
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu2', '/admin/salesstatus')}>매출현황</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span >
                        <i className="bi bi-cart-check"></i>발주 관리
                    </span>
                    <ul className="submenu">
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu1', '/path')}>기능1</a>
                        </li>
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu2', '/path2')}>기능2</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleSubMenuClick('submenu3', '/path3')}>기능3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span >
                        <i className="bi bi-cart-check"></i>강사 관리
                    </span>
                    <ul className="submenu">
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu1', '/path')}>기능1</a>
                        </li>
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu2', '/path2')}>기능2</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleSubMenuClick('submenu3', '/path3')}>기능3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span >
                        <i className="bi bi-cart-check"></i>수업 관리
                    </span>
                    <ul className="submenu">
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu1', '/path')}>기능1</a>
                        </li>
                        <li >
                            <a href="#" onClick={() => handleSubMenuClick('submenu2', '/path2')}>기능2</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleSubMenuClick('submenu3', '/path3')}>기능3</a>
                        </li>
                    </ul>
                </li>
                <li>
                   <ul className="submenu one">단일 메뉴의 경우
                        <li>
                            <a href="#" onClick={() => handleSubMenuClick('submenuname', '/path4')}>기능
                                <i className="bi bi-person-vcard"></i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        </div>
    );
}

export default NavBar;