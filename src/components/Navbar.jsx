import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";

const NavbarComp = () => {
    return (
        <div className="GNB">
            <Link to='/home'>홈</Link>
            <Link to='/history'>진료내역</Link>
            <Link to='/mypage'>마이페이지</Link>
        </div>
        /* <Nav className="GNB"  >
                    <Nav.Link href="home">홈</Nav.Link>
                    <Nav.Link href="history">진료내역</Nav.Link>
                    <Nav.Link href="mypage">마이페이지</Nav.Link>
                </Nav> */


    );
}

export default NavbarComp;