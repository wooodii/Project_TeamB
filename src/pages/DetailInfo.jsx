import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../data/DataContext";

const DetailInfo = () => {
    const data = useContext(DataContext);
    return (     
        <div> 
            <div style={{border : "2px solid black", height: "100vh", maxWidth : "420px"}}>  
                <h2 style={{textAlign : "center", fontWeight : "700", padding : "6px"}}> {data.state.h_name}</h2>
                <p style={{textAlign : "center"}}> {data.state.h_address}에 위치한 병원입니다.</p>
                <p style={{textAlign : "center"}}> {data.state.h_num}</p>
                
                <div style={{border : "2px solid black", height : "400px"}}>
                    병원지도 api
                </div>
                
                <div style ={{marginTop : "5vh"}}>
                    <h4 style={{textAlign : "center", padding : "0 20px"}}>진료과목</h4>
                    <p>{data.state.h_major}</p>
                </div>

                <button style={{border : "2px solid black", display : "block"}}>예약하기</button>
            </div>
        </div>  
        );
}
 
export default DetailInfo;