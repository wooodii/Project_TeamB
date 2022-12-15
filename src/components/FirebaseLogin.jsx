import { useEffect, useState } from "react";
import { firebaseAuth,} from "../Firebase";
import { getAuth ,  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { useNavigate } from "react-router-dom";

const FirebaseLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const createUser = async () => {
        const newUser = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = newUser.user;
        localStorage.setItem("currentUser", user.uid);
        navigate("/")
    }

    return (  
        <>
            <form onSubmit={(e)=>{e.preventDefault(); createUser()}}>
                <p>이메일</p>
                <p><input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/></p>
                <p>비밀번호</p>
                <p><input type="password" onChange={ (e)=>{setPassword(e.target.value)}} /></p>
                <input type="submit" value="로그인" />
            </form>
        </>
    );
}
export default FirebaseLogin;