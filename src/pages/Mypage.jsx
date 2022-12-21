import { useContext, useState } from "react";
import { doc,getDoc} from "firebase/firestore"
import { db } from "../Firebase";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";
import DatePicker from "react-datepicker";
import styles from '../css/mypage.module.css'
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const [name,setName] = useState();
    
    const user = localStorage.getItem("currentUser")
    const getSingleData = async () => {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data().history.date)
        if (docSnap.exists()) {
          setName(docSnap.data().name);
        }
      };
      console.log(name)
      useEffect(()=>{
        getSingleData()
      },[])
    const logOut =()=>{
        localStorage.clear(); 
        navigate('/'); 
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
              secondPage
            </div>

            <hr/>  

            <div className={styles.box3}>
            <h1>예약 확인</h1>  
                {/* {
                  data.state.mypageData ? (
                    <div>
                      <h2>{data.state.mypageData.사업장}</h2>
                      <h4>{data.state.mypageData.주소}</h4> 
                      <p>전화번호 : {data.state.mypageData.전화번호}</p>
                      <p> <span>예약일 : </span>
                        {String(data.state.startDate).substring(16,0)
                        
                        }</p>
                      <p>{data.state.mypageData.영업상태}</p>
                    </div>
                  ) : (
                    <div>
                      <h2>{data.state.mypageData2.사업장}</h2>
                      <h4>{data.state.mypageData2.주소}</h4> 
                      <p>전화번호 : {data.state.mypageData2.전화번호}</p>
                      <p> <span>예약일 : </span>
                  {String(data.state.startDate).substring(16,0)
                  
                  }</p>
                <p>{data.state.mypageData2.영업상태}</p>
                    </div>
                  )
                } */}
                {}
              </div> 
            <hr/>

            <div className="Mypage_forth"></div>  
                 {/* 이부분은 버튼만있고 따로 기능없습니다 */}
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
              </div>
              <hr/>
              <div className="Mypage_third">                  
              
              </div>
              <Link to='/medicine'></Link>


              <hr/>
              <div className="Mypage_forth"></div>
              {/* 이부분은 버튼만있고 따로 기능없습니다 */}
              <button> 고객센터 </button>
          </>
        )}
        </div>  
    ); 
}

export default MyPage;



