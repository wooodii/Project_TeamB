import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../data/DataContext";

import '../css/Login.css'
const Login_C = () => {
    const {action} = useContext(DataContext)
    const data = useContext(DataContext)
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("남");
    const navigate = useNavigate()

    const loginInfant = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("이름을 입력하세요.");
        } else if(!age) {
            return alert("생년월일을 선택해주세요.");
        }
        action.setInfant({name: name, age: age, gender: gender})
        navigate('/');
        data.action.setLogin(true); 
    }
    function getToday(){
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);

        return year + "-" + month + "-" + day;
    }
    function get71MonthAgo(){
        const date = new Date();
        const year = (date.getFullYear()-5);
        const month = ("0" + (date.getMonth()-10)).slice(-2);
        const day = ("0" + (date.getDate()+1)).slice(-2);

        return year + "-" + month + "-" + day;
    }
    return (  
        <div className="first_box">
            <h2 className="login_title">우리아이 등록</h2>
            <form onSubmit={loginInfant}>
                <label>이름:</label>
                <input type="text" onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                } />
                <input type="date" min={get71MonthAgo()} max={getToday()} pattern="yyyy-MM-dd" onChange={
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
        </div>
    );
}
 
export default Login_C;