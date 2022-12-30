import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReserveMap from "../components/Detail_map";
import DataContext from "../data/DataContext";
import Review from '../pages/Review';
import styles from '../css/DetailInfo.module.css'
const DetailInfo = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    return (     
        <div> 
            <div  className={styles.title} style={{height: "100vh", maxWidth : "420px"}}>
                <div className={styles.imgbox}>
                <img className={styles.img} src={require(`../img/hospital.png`)} />
                </div>
                <h2 style={{textAlign : "center", fontWeight : "700", padding : "6px"}}> 
                    {data.state.h_name}</h2>
                <hr/>
                <p style={{textAlign : "center", fontSize : "14px"}}> {data.state.h_address}</p>
                <p style={{textAlign : "center",  fontSize : "14px"}}>  {data.state.h_num}</p>
                <br/>
                
                <div className={styles.mapbox}>
                    <ReserveMap name={data.state.h_name} address={data.state.h_address}/>
                </div>
                
                <div style ={{marginTop : "5vh"}}>
                    <h4 style={{textAlign : "center"}}>진료과목</h4>
                    <p style={{ padding : "0 20px"}}>{data.state.h_major}</p>
                </div>
                <br/>
                <div >
                    <button onClick={() => {navigate('/reservation2')}} 
                    style={{ width : "100%", margin : "", 
                    borderRadius : "5px", padding : "10px 0", 
                    backgroundColor : "#1b4542", color : "white"}}> 
                    <div style={{textAlign : "center"}}>예약하기 </div> </button >
                </div>

                <div>
                    <Review/>
                </div>
            </div>
        </div>  
        );
}
 
export default DetailInfo;