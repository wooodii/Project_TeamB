import { useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import DatePicker from "react-datepicker";
import styles from '../css/mypage.module.css'
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/Mypage.css";

const MyPage = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [name, setName] = useState();

  const user = localStorage.getItem("currentUser")
  const getSingleData = async () => {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().history.date)
    if (docSnap.exists()) {
      setName(docSnap.data().name);
    }
  }
  const logOut = ()=>{
    localStorage.clear();
    navigate('/mypage')
  }
    useEffect(()=>{
      if(user){
        data.action.setIsLoginned(true)
      } else {
        data.action.setIsLoginned(false)
      }
    },[user])
    return (  
      <div className="Mypage"> 
      {data.state.isLoginned ? (
        <>
          <div className="Mypage_first">
              {/* 프로필,이름 */}
              <p>{name} <button onClick={()=>{navigate('/editprofile')}}>정보수정</button> </p> 
              <button onClick={()=>{logOut()}}>로그아웃</button>
          </div> 
          <hr/> 
          <div className="Mypage_second">
          <Link to='/main'>건강피드</Link>        
          </div>    
          <hr/>  
          <div className={styles.box3}>
            </div> 
          <hr/>

          <div className="Mypage_forth"></div>  
               {/* 이부분은 버튼만있고 따로 기능없습니다 */}
               <Container>
                  <span> 고객센터 </span>
                  <br />
                <Row>
                  <Col className="Btn_L_G"><p>1:1채팅 상담</p></Col>
                  <Col className="Btn_L_G"><p>사용자 설문</p></Col>
                </Row>
                <Row>
                  <Col className="Btn_L_G"><p>약관 보기</p></Col>
                  <Col className="Btn_L_G"><p>버전</p></Col>
                </Row>
              </Container>
              <button> 고객센터 </button>
          </>
      ):(
        <> 
          <div className="Mypage_first">
                {/* 프로필,이름 */}
                <Link to='/firebaselogin'>로그인</Link>
            </div>
            <hr/>
            <div className="Mypage_second">
              <Link to='/main'>건강피드</Link>
            </div>
            <hr/>
            <div className="Mypage_third">                  
            
            </div>
            <Link to='/medicine'></Link>
            <hr/>
             <div className="Mypage_forth">  
                                 {/* 이부분은 버튼만있고 따로 기능없습니다 */}
                <Container>
                  <span> 고객센터 </span>
                  <br />
                <Row>
                  <Col className="Btn_L_G"><p>1:1채팅 상담</p></Col>
                  <Col className="Btn_L_G"><p>사용자 설문</p></Col>
                </Row>
                <Row>
                  <Col className="Btn_L_G"><p>약관 보기</p></Col>
                  <Col className="Btn_L_G"><p>버전</p></Col>
                </Row>
              </Container>
            </div>
        </>
      )}
      </div>  
  ); 

}


export default MyPage;



