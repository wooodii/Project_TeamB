import { useNavigate } from "react-router-dom";

const NavbarComp = () => {
    
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <span onClick={()=>{navigate('/')}}>홈</span>
            <span onClick={()=>{navigate('/history')}}>진료내역</span>
            <span onClick={()=>{navigate('/mypage')}}>마이페이지</span>
        </div>
    );
}

export default NavbarComp;