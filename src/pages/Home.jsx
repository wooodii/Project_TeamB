import SearchBar_Home from "../components/SearchBar";
import Weather from "../components/Weather";
import DataContext from "../data/DataContext";
import HealthInfo from '../components/HealthInfo'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import mydoctor from '../../src/img/mydoctor.png'

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
        <Container className="Home" style={{position: "relative", maxWidth : "420px", height : "100vh"}}>

                    <Row className="Search_box" style={{marginBottom : "1em", marginTop : "2em", display : "flex"}}>
                        <Col xs={1}> 
                            <img style={{width : "33px", marginTop : "17px"}} src={mydoctor} alt="image"/>
                        </Col>
                        <Col xs={11}>
                            <SearchBar_Home/>
                        </Col>
                    </Row>
                    <div style={{marginTop :"10px", fontSize : "22px", borderRadius : "10px", position : "relative", backgroundColor : "#B7CFC6", padding : "20px"}}>                        
                       <div style={{marginLeft : "0px", borderRadius : "10px"}}>
                            <p style={{ fontSize : "18px", marginTop : "0px"}}>
                            <b>{name} </b> 님, <br/>
                            <p style={{fontSize : "17px"}}>건강한 하루 되세요! </p>
                            </p>
                        </div>
                    </div>
                        
                    
                    <Row style={{display : "flex", marginLeft : "3px", marginTop : "20px"}}>
                        <div style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px"}}>
                            <p style={{margin : "25px 0 0 0", fontSize :"15px",}}>건강피드</p>    
                        </div>
                        <div style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px"}}>
                            <p style={{margin : "25px 0 0 0", fontSize :"15px", }}>복약관리 </p>    
                        </div>
                        <div style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px"}}>
                            <p style={{margin : "25px 0 0 0", fontSize :"15px", }}>예약내역 </p>    
                        </div>
                        <div style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px"}}>
                            <p style={{margin : "25px 0 0 0", fontSize :"15px", }}>건강정보 </p>    
                        </div>
                    </Row>

                    <hr/>
                    <Row className="Temperature">
                        <h6 style={{marginLeft : "0.5em", fontSize : "1.3em", marginTop : "0px", fontSize : "17px"}}>
                            오늘 날씨
                        </h6>
                        <Weather/>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={4} >
                        <h6 style={{marginLeft : "0.5em", fontSize : "1.3em",  fontSize : "17px"}}> 건강 정보</h6>
                        </Col>
                        <Col xs={4} style={{padding : "0", marginLeft : "-40px"}}>
                           <p style={{marginLeft :"-50px", display : "inline-block", marginLeft : "1em", borderRadius : "10px", padding : "4px 8px", fontSize : "0.6em", 
                        backgroundColor : "#1b4542", color : "white"}}>{date.getFullYear()} {date.getMonth()+1} {date.getDate()} {days[date.getDay()]}</p>
                        </Col>
                        <Col xs={4}></Col>
                        <HealthInfo/>
                    </Row>
                        <button 
                        style={{width : "100%",  marginRight: "12px", 
                                display : "inline-block", color : "black", backgroundColor : "#1b4542", color : "white",
                                borderRadius : "10px", padding: "10px 0"}}
                        onClick={() => (navigate('/filter'))}>
                        <p style={{textAlign : "center", fontSize : "15px"}}>  병원 찾기</p> </button>
        </Container>
    );
}
export default Home;