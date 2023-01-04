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
import { FcPuzzle, FcApproval,FcBiomass, FcPlus } from "react-icons/fc";
import { IconContext } from "react-icons";
import medical from '../img/medical.png';
import medical2 from '../img/medical2.png';

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
        const docRef = doc(db, "infant", user);
        const ischeckInfant = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                data.action.setLogin(true)
                localStorage.setItem("currentInfant",user)
            } else {
                data.action.setLogin(false)
            }
        }
        useEffect(()=>{
            ischeckInfant()
        },[user])

    
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
                    <div style={{height : "120px", zIndex : "999", display : "absolute", marginTop :"10px", fontSize : "22px", borderRadius : "10px", position : "relative", backgroundColor : "#eee", padding : "20px"}}>                        
                       <Row style={{marginLeft : "0px", borderRadius : "10px"}}>
                            <Col xs={8}>
                            <p style={{ fontSize : "18px", marginTop : "5px"}}>
                            <b>{name} </b> 님, <br/>
                            <p style={{fontSize : "17px"}}>건강한 하루 되세요! </p> </p>
                            </Col>
                            <Col xs={4}>
                            {/* <img style={{ marginBottom : "35px"}} src={medical} width= "90px" height="100px" alt="" /> */}
                            <img style={{rotate : "5deg"}} src={medical2} width= "85px" height="105px" alt="" />
                            </Col>
                        </Row>
                    </div>
                        
                    
                    <Row style={{display : "flex", marginLeft : "3px", marginTop : "20px"}}>
                        <div onClick={() => (navigate('/main'))} style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px 5px 5px 5px"}}>
                        <IconContext.Provider value={{ size : "2em" }}>
                            <div style={{margin : "0.5em 0 0 0.7em"}}><FcPuzzle/></div>
                        </IconContext.Provider>
                            <p style={{ fontSize :"13px", marginLeft : "3px"}}>건강내역</p>    
                        </div>
                        <div onClick={() => (navigate('/medicine'))} style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px 5px 5px 5px"}}>
                        <IconContext.Provider value={{ size : "2em" }}>
                            <div style={{margin : "0.5em 0 0 0.7em"}}><FcBiomass/></div>
                        </IconContext.Provider>
                            <p style={{ fontSize :"13px", marginLeft : "3px"}}>복약관리 </p>    

                        </div>
                        <div onClick={() => (navigate('/history'))} style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px 5px 5px 5px"}}>
                            <IconContext.Provider value={{ size : "2em" }}>
                            <div style={{margin : "0.5em 0 0 0.7em"}}><FcApproval/></div>
                        </IconContext.Provider>
                            <p style={{ fontSize :"13px", marginLeft : "3px"}}>예약내역 </p>    
                        </div>
                        <a href="https://health.kdca.go.kr/healthinfo/index.jsp" style={{display : "relative",backgroundColor : "#eee", borderRadius : "10px", width : "80px", height : "70px", margin : "5px 5px 5px 5px"}}>
                            <IconContext.Provider value={{ size : "2em" }}>
                            <div style={{margin : "0.5em 0 0 0.7em"}}><FcPlus/></div>
                        </IconContext.Provider>
                            <p style={{ fontSize :"13px", marginLeft : "3px", color : "black"}}>건강정보 </p>    
                        </a>
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
                        backgroundColor : "#1b4542", color : "white"}}>{date.getFullYear()}. {date.getMonth()+1}. {date.getDate()}</p>
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