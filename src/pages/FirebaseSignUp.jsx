/** firebase auth회원가입
 */
// background 어둡게하기
import { useContext, useEffect, useState } from "react";
import { firebaseAuth,db, } from "../Firebase";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";

const FirebaseSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkpassword, setCheckpassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users")
    
    const createUser = async () => {
        const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = newUser.user;
        const data = await getDocs(usersCollectionRef);
        await setDoc(doc(db, "users", user.uid), {...data.docs[0].data(), uid:user.uid, name:name});
        navigate("/")
        localStorage.setItem("currentUser", user.uid);
        data.action.setIsLoginned(true)  
    }


    return (  
        <div className="F_login_box">
            <h2 className="F_login_title">회원가입</h2>
            <form className="F_input_box" onSubmit={(e)=>{e.preventDefault();createUser()}}>
                <p>이메일</p>
                <input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/>
                <p>비밀번호</p>
                <input type="password" onChange={ (e)=>{setPassword(e.target.value)}} />
                <p>이름</p>
                <input type="text" placeholder="이름" onChange={ (e)=>{setName(e.target.value)}} />
                <input className="F_submit" type="submit" value="회원가입" />
            </form>
        </div>
    );
}

export default FirebaseSignUp;