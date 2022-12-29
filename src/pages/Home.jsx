import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";


const Home = () => {
    const data = useContext(DataContext);
    const [name, setName] = useState();
    const user = localStorage.getItem("currentUser")
    console.log("user", data.action)
    useEffect(()=>{
        if(user){
            data.action.setIsLoginned(true)
            getSingleData();
        } else {
            data.action.setIsLoginned(false)
        }
    },[user]);



    console.log(data.state.isLoginned);
    const navigate = useNavigate();
    const navQustion = ()=>{
        navigate('/question');
    }
    
    let date = new Date();
    let days = ["일", "월", "화", "수", "목", "금", "토"];

    const getSingleData = async () => {
      const docRef = doc(db, "users", user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
      }
    }

    return ( 
        <Container className="Home" style={{   position: "relative", maxWidth : "420px", height : "100vh"}}>


            <div style={{zIndex : "5", position : "absolute", top : "90px", left : "0"}}>
                <img style={{width : "390px", height : "150px",  opacity : "80%"}} src={`${process.env.PUBLIC_URL}/images/home1.jpg`} alt="image" />
            </div>
                    <Row className="Search_box" style={{marginBottom : "2em", marginTop : "2em"}}>
                        <SearchBar_Home/>
                    </Row>

                    <div style={{position: "absolute", zIndex : "999", fontSize : "22px", marginLeft:"20px"}}>
                        <p>
                        <b>{name} </b> 님,
                        </p>
                       <p>
                       건강한 하루 되세요!
                        </p>
                    </div>

                    <Row className="Temperature">
                        <h5 style={{marginTop : "180px", marginLeft : "0.5em", fontSize : "1.3em"}}>오늘 날씨</h5>
                        <Weather/>
                    </Row>
                    <hr />
                    <Row>
                        <div style={{display : "flex"}}>
                        <h5 style={{marginLeft : "0.5em", fontSize : "1.3em", }}>건강 정보</h5>      
                        <p style={{marginLeft : "1em", borderRadius : "10px", padding : "4px 8px", fontSize : "0.8em", 
                        backgroundColor : "#1b4542", color : "white"}}>{date.getFullYear()} {date.getMonth()+1} {date.getDate()} {days[date.getDay()]}</p>
                        </div>
                        
                        <HealthInfo/>
                    </Row>
                        <button 
                        style={{width : "100%", marginTop : "3em", marginRight: "12px",
                                display : "inline-block", color : "black", backgroundColor : "#1b4542", color : "white",
                                borderRadius : "10px", padding: "10px 0"}}
                        onClick={() => (navigate('/filter'))}>
                        <p style={{textAlign : "center", fontSize : "15px"}}>  병원 찾기</p> </button>
        </Container>
    );
}
export default Home;