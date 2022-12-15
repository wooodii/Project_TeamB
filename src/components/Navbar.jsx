<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
>>>>>>> c732e5f4dbc786f9d781e0734219aacbf744e51c

const NavbarComp = () => {
    
    const navigate = useNavigate();
    return (
<<<<<<< HEAD
        <div className="navbar">
            <span onClick={()=>{navigate('/')}}>홈</span>
            <span onClick={()=>{navigate('/history')}}>진료내역</span>
            <span onClick={()=>{navigate('/mypage')}}>마이페이지</span>
        </div>
=======
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


>>>>>>> c732e5f4dbc786f9d781e0734219aacbf744e51c
    );
}

export default NavbarComp;