import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"

const NavbarComp = () => {
    return (
        <Container>
                <Nav className="GNB"  >
                    <Nav.Link href="home">홈</Nav.Link>
                    <Nav.Link href="history">진료내역</Nav.Link>
                    <Nav.Link href="mypage">마이페이지</Nav.Link>
                </Nav>

        </Container>
    );
}

export default NavbarComp;