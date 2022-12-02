import '../css/Singup.css'
import { Link, useNavigate } from 'react-router-dom';
import DataContext from "../context/DataContext";
import { useContext } from "react";
import OnLogin_Singup from './OnLogin_Singup';

const Singup = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    
    const logOut = () => {
		data.action.setLogin(false) 
        data.action.setIsMeasures(false)
		navigate("/");
	}
    
    return (  
        <header>
            <div className="container clearfix">
                <div className="My_row">
                    <div className='header clearfix'>
                        <button className='logout' onClick={()=>{logOut()}}>로그아웃</button>
                        {data.state.login ? (
                            <>
                                <OnLogin_Singup/>
                            </>
                        ):(
                            <>
                                <div className="infant_img">
                                <Link to ="/Login">
                                <img src={process.env.PUBLIC_URL + "./images/user.png"} alt="아이프로필" />
                                </Link>
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
 
export default Singup;