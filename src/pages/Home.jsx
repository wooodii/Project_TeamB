<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const searchbtn = () =>  {
      navigate('/medicalCourse')
    }

    return ( 
        <div className="Home"> 
            <div className="Search_box">
            <div style={{margin: "5vh", display: "flex"}}>
        <input style={{width : "290px", height : "40px"}} placeholder="병원/진료과를 검색해보세요"type="text"/>
        <button style={{width : "60px", height : "45px"}} onClick={searchbtn}>검색</button>   
        </div>
            </div>
            <br/>
            <div className="Temperature">기온 날씨</div>
            <br/>
            <div className="Questionnaire">문진표 작성버튼</div>    
            <br/>
            <div className="Reserve">예약 버튼</div>    
            <br/>
            <div className="Search_near">주변 병원 찾기 </div>    
=======
import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import FirebaseSignUp from "./FirebaseSignUp";
import { useContext } from "react";
import { useEffect } from "react";
import FirebaseLogin from "../components/FirebaseLogin";
const Home = () => {
    const data = useContext(DataContext);
    
    const user = localStorage.getItem("currentUser")
    console.log("user",data.action)
    useEffect(()=>{
        if(user){
            data.action.setIsLoginned(true)
        } else {
            data.action.setIsLoginned(false)
        }
    },[user]);
    
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    return ( 
        <div className="Home">
            {data.state.isLoginned ? (
                <>
                    <div className="Search_box">
                        <SearchBar_Home/>
                    </div>
                    <br/>
                    <div className="Temperature">기온 날씨
                        <Weather/>
                    </div>
                    <div>
                        <HealthInfo/>
                    </div>
                    <br/>
                    <div className="Questionnaire">
                        <button onClick={navQustion}> 문진표 작성</button>
                    </div>    
                    <br/>
                </>
            ):(
                <>
                <FirebaseSignUp />
                <FirebaseLogin />
                </>
            )}
>>>>>>> 9333d1fa8e8ce0053ee22171654a6ea54beb7aa2
        </div>
    );
}
<<<<<<< HEAD
 
=======

>>>>>>> 9333d1fa8e8ce0053ee22171654a6ea54beb7aa2
export default Home;