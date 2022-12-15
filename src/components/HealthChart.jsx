import Preview from './Preview';
import { useSelector } from 'react-redux';
import {useState, useContext} from "react";
import DataContext from "../data/DataContext";
import Health_Modal from './Health_Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../css/HealthChart.css'
const HealthChart = () => {
    const data = useContext(DataContext);
    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    const [show,setShow] = useState(false)
    const measures = data.state.measures;
    const date = new Date()
    return (  
            <div className='first_box'>
            {data.state.ismeasures ? (
                <>
                {measures.height ? (
                    <div>
                        <p>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                        <p>키 {measures.height} cm</p>
                        <p>축하합니다!</p>
                        <p>키가 {measures.height}cm를 넘었어요</p>
                    </div> 
                ):(
                    <></>
                ) 
                }
                {measures.weight ? (
                    <div>
                        <p>{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()}</p>
                        <p>몸무게 {measures.weight} kg</p>
                        <p>축하합니다!</p>
                        <p>몸무게가 {measures.weight}kg 넘었어요</p>
                    </div>
                ):(
                    <></>
                )
                    
                }  
                    <button className='plus_btn' onClick={()=>{
                                setShow(true)
                    }}><FontAwesomeIcon icon={faPlus} /></button>
                    {show && <Health_Modal setShow={setShow}/>}
                </>
            ):(
                data.state.login ? (
                    <>
                        <div className='My_row'>
                            <ul>
                                <li className='f_title'>{data.state.infant.name}의 건강 피드를 생성해주세요</li>
                                <li>우측하단에 버튼을 누르면</li>
                                <li className='bold'>키/몸무게/체온/해열제/처방전</li>
                                <li>을 등록할 수 있어요~</li>
                            </ul>

                            <button className='plus_btn' onClick={()=>{
                                setShow(true)
                            }}><FontAwesomeIcon icon={faPlus} /></button>
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