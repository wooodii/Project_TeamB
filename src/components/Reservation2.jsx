import styles from '../css/Reservation.module.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import DataContext from "../data/DataContext";

const Reservation2 = () => {
    const {state,action}= useContext(DataContext);
    const navigate = useNavigate();

    const ReservationBtn = (e) => {        
        alert('예약이 완료되었습니다');
        alert('예약내역에서 확인해주세요'); 
        action.setIsbook(true); 
        state.my_reserve++;
        navigate('/history')         
    }


    return (
        <div> 
            <div >
                {
                    state.mypageData ? (
                    <div className={styles.titlebox}>
                        <h2>예약정보</h2> 
                    <hr />
                    <div>
                        <h6> <span style={{fontSize : "20px"}}>{state.h_name} </span>  </h6>
                        <p> {state.h_address}</p> 
                    </div>
                 
                        </div>
                    ) : 
                        (
                        <div className={styles.titlebox}>
                            <h2>예약정보</h2> 
                    <hr />
                <div   >
                        <h6> {state.h_name} </h6>
                        <p>  {state.h_address}</p> 
                    </div>
            


                        </div> 
                    )
                }
                
                 <div className={styles.mapbox}>
                    <h4 >예약하실 날짜를 선택해주세요</h4>
                    <DatePicker 
                        className={styles.date}
                        selected={state.startDate}
                        onChange={(date) => action.setStartDate(date)}
                        locale={ko}                   // 한글로 변경
                        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                        showPopperArrow={false}       // 화살표 변경
                        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                    />  
                </div> 
                <div >
                    <button style={{color :"white", backgroundColor : "#1F403A", padding :"7px 100px"
                , borderRadius : "5px", marginLeft : "65px", marginTop : "30px"}}onClick={ReservationBtn} value='onLogin'>예약하기</button>
                </div>
                    
            </div>
        </div> 
    );
} 

export default Reservation2;