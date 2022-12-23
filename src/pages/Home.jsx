import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import FirebaseSignUp from "./FirebaseSignUp";
import { useContext } from "react";
import { useEffect } from "react";
import FirebaseLogin from "../components/FirebaseLogin";
import { Navbar } from "react-bootstrap";
const Home = () => {
    const data = useContext(DataContext);
    
    const user = localStorage.getItem("currentUser")
    console.log("user", data.action)
    useEffect(()=>{
        if(user){
            data.action.setIsLoginned(true)
        } else {
            data.action.setIsLoginned(false)
        }
    },[user]);
    console.log(data.state.isLoginned);
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    return ( 
        <div className="Home">
                    <div className="Search_box">
                        <SearchBar_Home/>
                    </div>
                    <br/>
                    <div className="Temperature">
                        <Weather/>
                    </div>
                    <div>
                        <HealthInfo/>
                    </div>
        </div>
    );
}
export default Home;