/** firebase auth회원가입
 */
// background 어둡게하기
import { useEffect, useState } from "react";
import { firebaseAuth,db, } from "../Firebase";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"
import { useNavigate } from "react-router-dom";

const FirebaseSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users")
    
    const createUser = async () => {
        const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = newUser.user;
        const data = await getDocs(usersCollectionRef);
        await setDoc(doc(db, "users", user.uid), {...data.docs[0].data(), uid:user.uid, name:name});
        localStorage.setItem("currentUser", user.uid);
        navigate("/");
    }


    return (  
        <>
            <form onSubmit={(e)=>{e.preventDefault(); createUser()}}>
                <p>이메일</p>
                <p><input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/></p>
                <p>비밀번호</p>
                <p><input type="password" onChange={ (e)=>{setPassword(e.target.value)}} /></p>
                <input type="text" placeholder="이름" onChange={ (e)=>{setName(e.target.value)}} />
                <input type="submit" value="회원가입" />
            </form>
        </>
    );
}

export default FirebaseSignUp;