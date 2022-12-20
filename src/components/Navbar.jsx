import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import {faHouse} from '@fortawesome/free-solid-svg-icons'
const NavbarComp = () => {
    const navigate = useNavigate();
    return (
        <div className="GNB">
            <Link to='/'>홈</Link>
            <Link to='/history'>진료내역</Link>
            <Link to='/mypage'>마이페이지</Link>
        </div>
    );
}

export default NavbarComp;