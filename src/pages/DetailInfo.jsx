import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import Review from '../pages/Review';

const DetailInfo = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    return (     
        <div> 
            <div style={{height: "100vh", maxWidth : "420px"}}>  
                <h2 style={{textAlign : "center", fontWeight : "700", padding : "6px"}}> {data.state.h_name}</h2>
                <p style={{textAlign : "center"}}> {data.state.h_address}에 위치한 병원입니다.</p>
                <p style={{textAlign : "center"}}> {data.state.h_num}</p>
                
                <div style={{border : "2px solid black", height : "400px"}}>
                    병원지도 api
                </div>
                
                <div style ={{marginTop : "5vh"}}>
                    <h4 style={{textAlign : "center"}}>진료과목</h4>
                    <p style={{ padding : "0 20px"}}>{data.state.h_major}</p>
                </div>

                <div>
                    <button onClick={() => {navigate('/reservation2')}} style={{ width : "395px", marginTop : "3vh", 
                                    borderRadius : "5px", padding : "1vh", 
                                     backgroundColor : "#1b4542", color : "white"}}> 
                                     예약하기</button >
                </div>

                <div>
                    <Review/>
                </div>
            </div>
        </div>  
        );
}
 
export default DetailInfo;