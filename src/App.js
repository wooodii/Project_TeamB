
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DataProvider } from './Context/DataContext';
import History from './pages/History';
import Home from './pages/Home';
import Layout from './pages/Layout';
import MyPage from './pages/Mypage';
import Review from './pages/Review';
import MedicalCourse from './pages/MedicalCourse';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
        <DataProvider>
          <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/medicalCourse' element={<MedicalCourse/>}/> 
          <Route path ='/review' element = {<Review/> } />
          <Route path='/history' element={<History/>}/> 
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          </Route>
          </Routes>
        </DataProvider>
       
    </div>
  );
}

export default App;
