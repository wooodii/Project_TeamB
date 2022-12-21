/**
 * 메인 네브바 (하단 고정) : 수정 금지!
 */

import { useNavigate } from "react-router-dom";
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
        <Row>
            <Col><FontAwesomeIcon icon={faHouse} size="2x" /></Col>
            <Col><FontAwesomeIcon icon={faList} size="2x" /></Col>
            <Col><FontAwesomeIcon icon={faUser} size="2x" /></Col>
        </Row>
        <Row>
            <Col><button onClick={()=>{navigate('/')}}>홈</button></Col>
            <Col><button onClick={()=>{navigate('/history')}}>예약내역</button></Col>
            <Col><button onClick={()=>{navigate('/mypage')}}>마이페이지</button></Col>
        </Row>
        </Container>
        </div>
    );
}

export default NavbarComp;

