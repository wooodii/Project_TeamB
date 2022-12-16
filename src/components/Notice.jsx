import { useSelector } from 'react-redux';
import { useContext} from "react";
import DataContext from "../data/DataContext";
import Preview from './Preview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../css/Notice.css'
import { useState, useEffect } from 'react';
import Notice_Modal from './Notice_Modal';

const Notice = () => {
    const preview4 = useSelector((state)=>(state.temperature.preview4))

    const data = useContext(DataContext);
    const [show,setShow] = useState(false);
    const [name,setName] = useState("");
    const temp = data.state.measures.temperature;
    const fever = function() {
        if(temp >= 39 ){
            setName("고열")
        } else if(temp >= 37.5 ){
            setName("미열")
        } else if(temp >= 35.5){
            setName("정상")
        }    
    }
    useEffect(() => {
        fever()
    },[temp])
    return (  
        <div className='first_box'>
        {data.state.measures.temperature ? (
            <>
                {data.state.measures.temperature}°C
                <p>현재(최근): {name} 상태</p>
                {name == "고열" ? 
                (
                    <>
                        <p>{name} 상태로 병원 진료 필요가 필요해요</p>
                        <ul>
                            <li>{name}상태 입니다. </li>
                            <li>높은 실내온도,수분부족 등에 의해서도 체온 상승할 수 있으니...</li>
                            <li>수분섭취를 충분히 해 주세요</li>
                            <li>옷은 가볍게 입히고 가벼운 이불 ...</li>
                        </ul>
                    </>
                ):(
                    <>
                        <p>{name} 상태로 병원 진료는 필요하지 않아요</p>
                        <ul>
                            <li>{name}상태 입니다. 1시간뒤 체온상태에 따라 해열제...</li>
                            <li>높은 실내온도,수분부족 등에 의해서도 체온 상승할 수 있으니...</li>
                            <li>수분섭취를 충분히 해 주세요</li>
                            <li>옷은 가볍게 입히고 가벼운 이불 ...</li>
                        </ul>
                    </>
                )}
               <button className='plus_btn' onClick={()=>{
                    setShow(true)
                }}><FontAwesomeIcon style={{color:"white"}} icon={faPlus} /></button>
                {show && <Notice_Modal setShow={setShow} />}
            </>
        ):(
            data.state.login ? (
                <>
                    <div className='My_row'>
                        <ul>
                            <li className='title'>{data.state.infant.name}의 현재체온을 등록해주세요</li>
                            <li>우측하단에 버튼을 누르면</li>
                            <li><strong className='bold' >현재 체온 </strong>을 등록할 수 있어요</li>
                        </ul>
                        <button className='plus_btn' onClick={()=>{
                            setShow(true)
                        }}><div className='font_plus'><FontAwesomeIcon style={{color:"white"}} icon={faPlus} /></div></button>
                        {show && <Notice_Modal setShow={setShow} />}
                </div>  
                </>
            ):(
                <>
                    <Preview content={preview4} />
                </>
            )
        )}
        </div>
    );
}
 
export default Notice;