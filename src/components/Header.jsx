import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ userId, setUserId }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null); // 유저 상태를 초기화 (로그아웃)
    navigate('/'); // 로그인 페이지로 이동
  };

  return (
    <header className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* 가운데 위치한 '게시판 만들기' */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
          게시판 만들기
        </h1>

        {/* 사용자 정보 및 로그아웃 */}
        <div className="flex items-center space-x-4 ml-auto">
          <span>{userId}님 환영합니다</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
          >
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
