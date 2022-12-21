import { useNavigate } from 'react-router-dom';
import '../css/Opening.css'
const Opening = () => {
    const navigate = useNavigate()
    return (  
        <div className="opening_box"> 
            <div className='my_row'>
                <div className='logo_box'>
                    <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} />
                    <h2 className='logo_title'>마이<br/>닥터</h2>
                </div>
                <div className='opening_SingUp_btn'>
                    <a href='#' className='SingUp_a' onClick={()=>{navigate('/usersignup')}}>SignUp</a>
                </div>
            </div>
            
        </div>
    );
}
 
export default Opening;