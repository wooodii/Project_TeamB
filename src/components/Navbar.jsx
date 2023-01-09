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

    return (

        <div className="footer">
        <Container>
        <Row style={{backgroundColor : "#1b4542", padding : "1em"}}>
            <Col onClick={()=>{navigate('/history')}} className='menubox'>
                <FontAwesomeIcon className="menuicon" icon={faList} style={{color : "#fff", width : "0.8em"}} size="2x" value=""/>
            </Col>
            <Col onClick={()=>{navigate('/home');}}>
                <FontAwesomeIcon className="menuicon"  icon={faHouse} style={{color : "#fff", width : "0.8em"}} size="2x"  value=""/> 
            </Col>
            <Col button onClick={()=>{navigate('/mypage')}}>
                <FontAwesomeIcon className="menuicon"  icon={faUser} style={{color : "#fff", width : "0.8em"}} size="2x"  value=""/>
            </Col>
        </Row>
        </Container>
        </div>
    );
}

export default NavbarComp;

