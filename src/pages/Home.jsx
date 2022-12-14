import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";

import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    return ( 
        <div className="Home"> 
            <div className="Search_box">
                test
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


        </div>
     );
}
 
export default Home;