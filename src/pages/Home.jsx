import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import SearchBar from "./MedicalCourse";

const Home = () => {
    return ( 
        <div className="Home"> 
            <div className="Search_box">
                <SearchBar_Home/>
            </div>
            <br/>
            <div className="Temperature">기온 날씨
                <Weather/>
            </div>
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