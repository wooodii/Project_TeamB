import Preview from './Preview';
import { useSelector } from 'react-redux';
import {useState, useContext, useEffect} from "react";
import DataContext from "../data/DataContext";
import Health_Modal from './Health_Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../css/HealthChart.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
const HealthChart = () => {
    const data = useContext(DataContext);
    const infant = localStorage.getItem("currentInfant")
    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    const [show,setShow] = useState(false)
    const date = new Date()

    // 비동기로 가져온 값을 저장하는 state
    const [name,setName] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [temp1,setTemp1] = useState("");
    
    // 이름을 가져오는 함수
    const getInfantData = async () => {
        const docRef = doc(db, "infant", infant);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setName(docSnap.data().name);
        }
    }
    // 이름을 가져오는 useEffect
    useEffect(()=>{
        if(infant){
            data.action.setLogin(true)
            getInfantData()
        }else{
            data.action.setLogin(false)
        }
    },[infant])

    // 파이어베이스에서 measures값을 가져오는 함수
    const getMeasures = async () => {
        const docRef = doc(db, "infant", infant);   
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setHeight(docSnap.data().height);
            setWeight(docSnap.data().weight);
            setTemp1(docSnap.data().temperature);
            }
    }
    
    // measures값이 변할때마다 마운트하는 useEffect
    useEffect(()=>{
        if(data.state.ismeasures){
            getMeasures()
        }
    },[data.state.login,data.state.ismeasures,data.state.mesureToggle])

    // 정상 미열 고열 저장 state
    const [temp1_name, setTemp1_name] = useState("");
    // 정상 미열 고열 분별함수
    const fever = function() {
        if(temp1 >= 39 ){
            setTemp1_name("고열") 
        } else if(temp1 >= 37.5 ){
            setTemp1_name("미열")
        } else if(temp1 >= 35.5){
            setTemp1_name("정상")
        } else {
            setTemp1_name("정상")
        }
    }
    useEffect(() => {
        fever()
    },[temp1])

    const isCheckMeasures = async () => {
        const docRef = doc(db,"infant",infant);
        const measures = (await getDoc(docRef)).data()
        if(measures.height||measures.weight||measures.temperature){
            data.action.setIsMeasures(true)
        }else {
            data.action.setIsMeasures(false)
        }
    }
    // measures값이 있는지 확인하는 useEffect
    useEffect(()=>{
        if(data.state.login){
            isCheckMeasures()
        }
    },[infant])


    return (  
            <div className='first_box'>
                {data.state.ismeasures ? (
                    <>
                        <div className='health_box'>
                        {height ? (
                            <>
                                <div className='height_box clearfix'>
                                    <div style={{float:"left"}}>
                                        <p className='health_date'>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                                        <p className='height_desc'>키 {height} cm</p>
                                        <p>축하합니다!</p>
                                        <p>키가 {height}cm를 넘었어요</p>
                                    </div>
                                    <div className='height_img_box'>
                                        <img className='height_img' src={`${process.env.PUBLIC_URL}/images/height.jpg`} alt="아이키 사진"  />
                                    </div>
                                </div>
                            </>
                        ):(
                            <></>
                        ) 
                        }
                        {weight ? (
                            <div className='height_box clearfix'>
                                <div style={{float:"left"}}>
                                    <p className='health_date'>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                                    <p className='height_desc'>몸무게 {weight} kg</p>
                                    <p>축하합니다!</p>
                                    <p>키가 {weight}kg를 넘었어요</p>
                                </div>
                                <div className='height_img_box'>
                                    <img className='weight_img' src={`${process.env.PUBLIC_URL}/images/weight.jpg`} alt="체중계 사진"  />
                                </div>
                            </div>
                        ):(
                            <></>
                        )
                            
                        }
                        {temp1 ? (
                            <>
                                <div className='height_box clearfix'>
                                    <div style={{float:"left"}}>
                                        <p className='health_date'>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                                        <p className='height_desc'>체온 {temp1} °C</p>
                                        <p className='health_temp_name'>
                                            {temp1_name == "정상" ? "정상 체온입니다" : temp1_name == "미열" ? "미열 상태입니다" : "고열 상태입니다"}
                                        </p>
                                    </div>
                                    <div className='height_img_box'>
                                        <img className='temp_img' src={temp1_name == "정상" ? `${process.env.PUBLIC_URL}/images/temp1.jpg` : temp1_name == "미열" ? `${process.env.PUBLIC_URL}/images/temp2.jpg` : `${process.env.PUBLIC_URL}/images/temp3.jpg` } alt="체온계 사진"/>
                                    </div>
                                </div>
                            </>
                        ):(
                            <></>
                        )} 
                        </div>
                        <button className='plus_btn' onClick={()=>{
                            setShow(true)
                        }}><div className='font_plus'><FontAwesomeIcon style={{color:"white"}} icon={faPlus} /></div></button>
                        {show && <Health_Modal setShow={setShow}/>}
                            </>
                        ):(
                            data.state.login ? (
                            <>
                                <div className='My_row'>
                                    <ul>
                                        <li className='f_title'>{name}의 건강 피드를 생성해주세요</li>
                                        <li>우측하단에 버튼을 누르면</li>
                                        <li className='bold'>키/몸무게/체온/해열제/처방전</li>
                                        <li>을 등록할 수 있어요~</li>
                                    </ul>

                                    <button className='plus_btn' onClick={()=>{
                                        setShow(true)
                                    }}><div className='font_plus'><FontAwesomeIcon style={{color:"white"}} icon={faPlus} /></div></button>
                                    {show && <Health_Modal setShow={setShow}/>}
                                </div>  
                            </>
                        ):(
                            <>
                                <Preview content={preview1} />
                            </>
                        )
                                )}
                </div>
    );
}
 
export default HealthChart;