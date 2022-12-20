import styles from '../css/Reservation.module.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import DataContext from "../data/DataContext";

const Reservation = () => {
    const {state,action}=useContext(DataContext);
    const ReservationBtn = (e) => {
        let btnValue = e.target.value;
        if (btnValue == 'onLogin') {
            alert('예약이 완료되었습니다');
            alert('마이페이지에서 확인해주세요');            
        } else {
            alert('로그인이 필요합니다');            
        }
    }

    return (
        <div>
            <div>
            <div className={styles.title}>
                <h2>예약하기</h2>
                <h4>병원이름 :{state.location.state.사업장}</h4>
                <h5>병원주소 :{state.location.state.주소}</h5>
            </div>                
                <div>
                    <h4>예약하실 날짜를 선택해주세요</h4>
                    <DatePicker
                        selected={state.startDate}
                        onChange={(date) => action.setStartDate(date)}
                        locale={ko}                   // 한글로 변경
                        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                        showPopperArrow={false}       // 화살표 변경
                        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                    /> 
                </div> 
                        
                { /* 로그인 일 때 페이지이동 및 데이터 전달 */
                    state.isLoginned == true ? 
                    (<Link state={state.location.state} to='/mypage'> 
                        <button onClick={ReservationBtn} value='onLogin'>예약하기</button>
                    </Link> ) :  
                    (<Link to='/firebaselogin'> 
                    <button onClick={ReservationBtn} value='offLogin'>예약하기</button>
                    </Link> )
                }
            </div>
        </div> 
    );
} 

export default Reservation; 