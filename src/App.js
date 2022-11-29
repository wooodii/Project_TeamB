
import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './pages/History';
import Home from './pages/Home';
import Layout from './pages/Layout';
import MyPage from './pages/Mypage';

function App() {
  return (
    <div className="App ">
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<History/>}/> 
          <Route path='/mypage' element={<MyPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
