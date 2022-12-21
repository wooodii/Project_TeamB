import { useState } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
    // 진료내역 확인 state
    const [ishistory, setIshistory] = useState(false);


    const navigate = useNavigate()
    const navFilter =()=>{
        navigate('/filter')
    }
    return ( 
        <div className="History_Page">
            <div className="Reserve">
                <button onClick={navFilter}>예약하기</button>
                </div>    
            <hr/>
            <div className="Search_near"> </div>  
                <button onClick={()=>{navigate('/searchnear')}}>주변 병원 찾기 </button>
            <hr/>
        </div>
     );
}
export default History;