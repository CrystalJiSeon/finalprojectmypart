import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import NavBar from "./NavBar";


function Admin() {
    const [selectedMenu, setSelectedMenu] =useState();
    return (
        <div>
            <h1>학원 관리자 페이지</h1>
            <NavBar/>
            {/* <AdminNavBar currentMenu={selectedMenu}/> */}
        </div>
    );
}

export default Admin;