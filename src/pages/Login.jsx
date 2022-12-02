import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";

const Login = () => {
    const {action} = useContext(DataContext)
    const data = useContext(DataContext)
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("남");
    const navigate = useNavigate()

    const loginInfant = () => {
        action.setInfant({name: name, age: age, gender: gender})
        navigate('/');
        data.action.setLogin(true);
        
    }
    
    return (  
        <>
            <form onSubmit={loginInfant}>
                <label>이름:</label>
                <input type="text" onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                } />
                <input type="date" pattern="yyyy-MM-dd" onChange={
                    (e)=>{
                        setAge(e.target.value)
                    }
                } />
                <button onClick={(e)=>{
                    e.preventDefault();
                    setGender("남")
                }}>남성</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    setGender("여")
                }}>여성</button>
                <input type="submit" value="작성" />
            </form>
        </>
    );
}
 
export default Login;