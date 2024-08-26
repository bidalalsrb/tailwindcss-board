import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './components/login';
import Board from './components/Border';
import Header from './components/Header';

function App() {
  const [userId, setUserId] = useState(null); // 로그인된 사용자 ID를 관리

  return (
    <Router>
      {userId && <Header userId={userId} setUserId={setUserId} />}{' '}
      {/* 로그인된 경우에만 헤더 표시 */}
      <Routes>
        <Route
          path="/"
          element={
            userId ? (
              <Navigate to="/board" /> // 이미 로그인된 경우 게시판으로 리다이렉트
            ) : (
              <Login setUserId={setUserId} />
            )
          }
        />
        <Route
          path="/board"
          element={userId ? <Board /> : <Navigate to="/" />} // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
        />
      </Routes>
    </Router>
  );
}

export default App;
