import { useEffect, useState } from "react";
import { firebaseAuth,} from "../Firebase";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../data/DataContext";
import '../css/FirebaseLogin.css'


const FirebaseLogin = () => {
    const data = useContext(DataContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const createUser = async () => {
        const newUser = await signInWithEmailAndPassword(firebaseAuth, email, password);
        try {
            const user = newUser.user;
            localStorage.setItem("currentUser", user.uid);
            data.action.setIsLoginned(true);
            navigate("/") 
        } catch(error) {
            console.log(error.code);
            console.log(error.message);
        }
        
    }

    return (  
        <div className="F_login_box">
            <h2 className="F_login_title">로그인</h2>
            <form className="F_input_box" onSubmit={(e)=>{e.preventDefault(); createUser()}}>
                <p>이메일</p>
                <input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/>
                <p className="password_input">비밀번호</p>
                <input type="password" onChange={ (e)=>{setPassword(e.target.value)}} />
                <input className="F_submit" type="submit" value="로그인" />
                <Link to="/usersignup" className="F_signup_btn">회원가입</Link>
            </form>
        </div>
    );
}
export default FirebaseLogin;