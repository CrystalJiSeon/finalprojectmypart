import { useState } from "react";

function Login({ onLogin }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // 간단한 로그인 검증 로직 (실제로는 서버와 통신해야 함)
      if (id === 'admin' && pw === 'password') {
        onLogin(); // App에서 상태 변경
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    };
  
    return (
      <div className="login-container" style={{ backgroundImage: `url(/img/logo_background.jpg)` }}>
        <div className="login-box">
          <form className="login-form" onSubmit={handleSubmit}>
            {/* 나머지 생략 */}
            <button type="submit" className="login-btn">로그인</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;