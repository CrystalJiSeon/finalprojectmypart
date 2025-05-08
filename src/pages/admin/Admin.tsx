import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import NavBar from "./NavBar";


function Admin() {
    const [showFirstModal, setShowFirstModal] = useState(true); // 테스트용 true
    const [showSecondModal, setShowSecondModal] = useState(false);
  
    const [students, setStudents] = useState([    
      { id: 1, name: "김서준", phone: "010-4823-9102" },
      { id: 2, name: "이지우", phone: "010-1738-5264" },
      { id: 3, name: "박하린", phone: "010-6951-3807" },
      { id: 4, name: "최민석", phone: "010-8429-1170" },
      { id: 5, name: "정유나", phone: "010-3662-7480" },
      { id: 6, name: "윤도현", phone: "010-9241-6558" },
      { id: 7, name: "한지민", phone: "010-7305-2294" },
      { id: 8, name: "장태현", phone: "010-5107-8633" },
      { id: 9, name: "오하늘", phone: "010-2894-3701" },
      { id: 10, name: "백지훈", phone: "010-6483-7905" }]);
    const [allStudents, setAllStudents] = useState([
      { id: 1, name: "김서준", phone: "010-4823-9102" },
      { id: 2, name: "이지우", phone: "010-1738-5264" },
      { id: 3, name: "박하린", phone: "010-6951-3807" },
      { id: 4, name: "최민석", phone: "010-8429-1170" },
      { id: 5, name: "정유나", phone: "010-3662-7480" },
      { id: 6, name: "윤도현", phone: "010-9241-6558" },
      { id: 7, name: "한지민", phone: "010-7305-2294" },
      { id: 8, name: "장태현", phone: "010-5107-8633" },
      { id: 9, name: "오하늘", phone: "010-2894-3701" },
      { id: 10, name: "백지훈", phone: "010-6483-7905" },
      { id: 11, name: "서하윤", phone: "010-1234-5678" },
      { id: 12, name: "이도현", phone: "010-2345-6789" },
      { id: 13, name: "강지호", phone: "010-3456-7890" },
      { id: 14, name: "김나연", phone: "010-4567-8901" },
      { id: 15, name: "정하진", phone: "010-5678-9012" },
      { id: 16, name: "문채원", phone: "010-6789-0123" },
      { id: 17, name: "안성훈", phone: "010-7890-1234" },
      { id: 18, name: "조예린", phone: "010-8901-2345" },
      { id: 19, name: "홍지우", phone: "010-9012-3456" },
      { id: 20, name: "배수아", phone: "010-0123-4567" }
    ]);
    return (
      <>
        <h1>Admin 대시보드 페이지</h1>
        <Link to="/admin/salesmanage">수익관리</Link>
        <Link to="/admin/salesstats">수익통계</Link>
  
        <StudApplyStatModal
          show={showFirstModal}
          onClose={() => setShowFirstModal(false)}
          students={students}
          className="영어회화 수업"
          onOpenSecondModal={() => setShowSecondModal(true)}
        />
  
        <StudApplyAddModal
          show={showSecondModal}
          onClose={() => setShowSecondModal(false)}
          onAddStudents={(newStudents) =>
            setStudents((prev) => [...prev, ...newStudents])
          }
          currentCount={students.length}
          maxCount={20}
          allStudents={allStudents}
          alreadyAddedIds={students.map((s) => s.id)}
        />
      </>
    );
}

export default Admin;