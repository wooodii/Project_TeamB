import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../css/DetailInfo.module.css"
import DataContext from "../data/DataContext";


const MajorDetailInfo = () => {
    const {id, majorid} = useParams();    
    const {state,action} = useContext(DataContext);
    const majorfilter = 
    state.hospitalData.filter(major => major.진료과목내용명.includes(state.category[id].name)); 
    
    return (     
    <div>
        <div className={styles.title}>  
            <h2> {majorfilter[majorid].사업장}</h2>
            <p> {majorfilter[majorid].주소}</p>
            <p> {majorfilter[majorid].전화번호}</p>
        </div>
        <div className={styles.mapbox}> 
            병원 지도 api
        </div> 
        <div className="detail__info">
        <h4>진료 과목</h4>
        {majorfilter[majorid].진료과목내용명} 
        </div> 
        <div className="linkbox">
        <Link state={majorfilter[majorid]} to={'/reservation/'+majorid} className="linktext">
            예약하기 
        </Link>
        </div>
    </div>  
    );
}

export default MajorDetailInfo;