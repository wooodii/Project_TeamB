import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

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
        <Container className="Home" style={{
            backgroundColor : "#F2CA99", maxWidth : "420px", height : "100vh" }}>
                    <Row className="Search_box">
                        <SearchBar_Home/>
                    </Row>
                    <br/>
                    <Row className="Temperature">
                        <Weather/>
                    </Row>
                    <Row>
                        <HealthInfo/>
                    </Row>
                    <Row>
                        <div>
                        <button 
                        style={{display : "inline", backgroundColor : "#1F403A", 
                        color : "white", borderRadius : "10px", padding : "10px"}}
                        onClick={() => (navigate('/filter'))}>카테고리별 검색</button>
                        </div>
                    </Row>
        </Container>
    );
}
export default Home;