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

            {/* 진료내역 삼항연산자 */}
            {ishistory ? (
                <>
                    <div>진료내역</div>
                </>
            ):(
                <>
                    <div className="Reserve">
                    <button onClick={navFilter}>예약하기</button>
                    </div>    
                    <div className="Search_near">주변 병원 찾기 </div>  
                </>
            )}  

        </div>
     );
}
export default History;