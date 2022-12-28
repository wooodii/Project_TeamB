/**
 * 메인 네브바 (하단 고정) : 수정 금지!
 */

import { NavLink, useNavigate } from "react-router-dom";
import "../css/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faList, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const NavbarComp = () => {
    const navigate = useNavigate();
    const colorchange = () => {
        
    };

    return (

        <div className="footer">
        <Container>
        <Row style={{backgroundColor : "#1b4542", padding : "1em"}}>
            <Col onClick={()=>{navigate('/history')}}>
                    <FontAwesomeIcon icon={faList} style={{color : "white", width : "0.8em"}} size="2x" />
                {/* <button style={{color : "white", fontSize : "0.8em"}} onClick={()=>{navigate('/history')}}>예약내역</button> */}
            </Col>
            <Col onClick={()=>{navigate('/home');}}>
                <FontAwesomeIcon icon={faHouse} style={{color : "white", width : "0.8em"}} size="2x" /> 
                {/* <button style={{color : "white"}} onClick={()=>{navigate('/home')}}>홈</button> */}
            </Col>
            <Col button onClick={()=>{navigate('/mypage')}}>
                <FontAwesomeIcon icon={faUser} style={{color : "white", width : "0.8em"}} size="2x" />
                {/* <button style={{color : "white"}} onClick={()=>{navigate('/mypage')}}>마이페이지</button> */}
            </Col>
        </Row>
        </Container>

        </div>
    );
}

export default NavbarComp;

