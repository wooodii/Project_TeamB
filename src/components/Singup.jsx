import '../css/Singup.css'
import { Link, useNavigate } from 'react-router-dom';
import DataContext from "../data/DataContext";
import { useContext, useEffect } from "react";
import OnLogin_Singup from './OnLogin_Singup';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Singup_C = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    // 로그인 확인 useEffect
    const ischeckLogin = () => {
        const user = localStorage.getItem("currentUser")
        if(user){
            navigate("/loginc")
        } else {
            alert("로그인을 해주세요") 
            navigate("/firebaselogin")
        }
    }
    const infant = localStorage.getItem("currentInfant")
    // 아이등록후 확인 useEffect
    useEffect(()=>{
        if(infant){
            data.action.setLogin(true)
        } else {
            data.action.setLogin(false)
        }
    },[infant])
    return (  
        <header>
            <div className="container clearfix">
                <div className="My_row">
                    <div className='header clearfix'>
                        <a className='logout' href="#" onClick={()=>{navigate("/mypage")}}><FontAwesomeIcon icon={faArrowLeft} /></a>
                        {data.state.login ? (
                            <>
                                <OnLogin_Singup/>
                            </>
                        ):(
                            <>
                                <div onClick={()=>{ischeckLogin()}} className="infant_img">
                                <div className='plus_fontAwesome'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                </div>
                                <h1>우리 아이 등록</h1>
                            </>
                        )}
                    </div>
                </div>
            </div>    
        </header>
    );
}
 
export default Singup_C;
