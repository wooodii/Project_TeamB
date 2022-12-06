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
        </div>
     );
}
 
export default Home;