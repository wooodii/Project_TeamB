
import { useNavigate,Link } from "react-router-dom";
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import styles from "../css/history.module.css"


const History = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const navFilter =()=>{
        navigate('/filter');
    } 

    return ( 
        <div className="History_Page">    

            <div className={styles.box3}>                
            <>
                <div className="Mypage_first">         
                {
                    data.state.isbook == true ? 
                    ( 
                    <>
                    { 
                    data.state.mypageData ? (
                        <div>
                            <h1 >예약내역</h1> 
                        <h2>{data.state.mypageData.사업장}</h2>
                        <h4>{data.state.mypageData.주소}</h4> 
                        <p>전화번호 : {data.state.mypageData.전화번호}</p>
                        <p> <span>예약일 : </span>
                            {String(data.state.startDate).substring(16,0)
                            
                            }</p> 
                        <p>{data.state.mypageData.영업상태}</p>
                        <hr /> 
                        <div className="Mypage_second">
                        <button onClick={()=>{navigate('/searchnear')}}>주변 병원 찾기 </button>                    
                        </div>    
                        

                        </div>
                    ) || (
                        data.state.setTreatmentDetail
                    )     
                    : (
                        <div>
                        <h2>{data.state.mypageData2.사업장}</h2>
                        <h4>{data.state.mypageData2.주소}</h4> 
                        <p>전화번호 : {data.state.mypageData2.전화번호}</p>
                        <p> <span>예약일 : </span>
                    {String(data.state.startDate).substring(16,0)
                    
                    }</p>
                    <p>{data.state.mypageData2.영업상태}</p>
                    <hr />
                    <div className="Mypage_second">
                        <button onClick={()=>{navigate('/searchnear')}}>주변 병원 찾기 </button>                    
                        </div>
                        </div>
                    )
                }
                        </>
                    ): (
                        <>
                        <div className="Mypage_first">
                        <button onClick={navFilter}>예약하기</button>                    
                        </div>
                        <hr />
                        <div className="Mypage_second">
                        <button onClick={()=>{navigate('/searchnear')}}>주변 병원 찾기 </button>                    
                        </div>
                        </>

                        )
                }

                </div> 
                <hr/> 
            </>
                </div> 
        </div>
    );
}
export default History;