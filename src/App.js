import './App.css';
// 전역 style.css
import GlobalStyles from './GlobalStyles';
// 라우터 import
import {Routes, Route} from 'react-router-dom'

import { DataProvider } from "./context/DataContext";

import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <DataProvider>
        <GlobalStyles />
        <Routes>
          {/* 홈페이지 설정 */}
          <Route path="/" element={<Main />}></Route>
          {/* 로그인페이지 설정 */}
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
