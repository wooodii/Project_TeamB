import DataContext from "../context/DataContext";
import { useState, useContext } from "react";
import { useSelector } from 'react-redux';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

import '../css/OnLogin_CheckUp.css'

const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);
    const hchecks = useSelector((state)=>(state.checkUp.hchecks))  

    const [btn,setBtn] = useState(true);
    const [dname,setDName] = useState("")

    const health_check = function(){
        if(data.state.month >= 71){
            data.action.setHcheck(7);
        } else if (data.state.month >= 60){
            data.action.setHcheck(6);
        } else if (data.state.month >= 48){
            data.action.setHcheck(5);
        } else if (data.state.month >= 36){
            data.action.setHcheck(4);
        } else if (data.state.month >= 24){
            data.action.setHcheck(3);
        } else if (data.state.month >= 12){
            data.action.setHcheck(2);
        } else if (data.state.month >= 6){
            data.action.setHcheck(1);
        }
    }
    const inoculation_check = function(){
        if(data.state.month > 144) {
            data.action.setIcheck(38);
            setDName("일본뇌염, 파상풍")
        } else if(data.state.month > 72 ) {
            data.action.setIcheck(34);
            setDName("파상풍, 폴리오, 홍역, 일본뇌염")
        } else if(data.state.month > 35 ) {
            data.action.setIcheck(32);
            setDName("일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 23 ) {
            data.action.setIcheck(29);
            setDName("A형간염, 일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 18 ) {
            data.action.setIcheck(25);
            setDName("b형레모필루스인플루엔자, 폐렴구균, 홍역, 수두")
        } else if(data.state.month > 15 ) {
            data.action.setIcheck(20);
            setDName(" B형간염, 파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균,  로티바이러스RV5")
        } else if(data.state.month > 6 ) {
            data.action.setIcheck(15);
            setDName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스RV1,로티바이러스RV5")
        } else if(data.state.month > 4 ) {
            data.action.setIcheck(9);
            setDName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스RV1, 로티바이러스RV5")
        } else if(data.state.month > 2 ) {
            data.action.setIcheck(3);
            setDName("B형간염")
        } else if(data.state.month > 1 ) {
            data.action.setIcheck(2);
            setDName("결핵, B형간염")
        } 
    }
    health_check()
    useEffect(() => {
        inoculation_check()
    },[dname])

    // 탭메뉴
    const [content, setContent] = useState("first");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };

    const selectComponent = {
        first:  <>
                    {hchecks.filter((el)=> el.id < data.state.hcheck).map((el)=>(
                    <div className="h_box clearfix" key={el.id}>
                        <div className="left_box">
                            <h2 className="h_title">{el.id}차 건강검진</h2>
                            <p>생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                        </div>
                        <div className="right_box">
                            <FontAwesomeIcon className="icon active" icon={faStethoscope} />
                            <p className="check">검진완료</p>
                        </div>
                    </div>
                    ))}
                    {hchecks.filter((el)=> el.id >= data.state.hcheck).map((el)=>(
                    <div className="h_box clearfix" key={el.id}>
                        <div className="left_box">
                            <h2 className="h_title">{el.id}차 건강검진</h2>
                            <p>생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                        </div>
                        <div className="right_box">
                            <FontAwesomeIcon className="icon" icon={faStethoscope} />
                            <p className="check">검진필요</p>
                        </div>
                    </div>
                    ))}
                </>,
        second: <>
                    {hchecks.filter((el)=> el.id >= data.state.hcheck).map((el)=>(
                    <div className="h_box clearfix" key={el.id}>
                        <div className="left_box">
                            <h2 className="h_title">{el.id}차 건강검진</h2>
                            <p>생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                        </div>
                        <div className="right_box">
                            <FontAwesomeIcon className="icon" icon={faStethoscope} />
                            <p className="check">검진필요</p>
                        </div>
                    </div>
                    ))}
                </>,
        third:  <>
                    {hchecks.filter((el)=> el.id < data.state.hcheck).map((el)=>(
                    <div className="h_box clearfix">
                        <div className="left_box">
                            <h2 className="h_title">{el.id}차 건강검진</h2>
                            <p>생후 {el.s_month}개월 ~ {el.e_month}개월</p>
                        </div>
                        <div className="right_box">
                            <FontAwesomeIcon className="icon active" icon={faStethoscope} />
                            <p className="check">검진완료</p>
                        </div>
                    </div>
                    ))}
                </>,
        fourth: <>

                </>,
        fifth: <>
                    
                </>,
        sixth: <>
                    
                </>,
      };
    return (
        <>  
        <div className="box">
            <div className="padding_box">
                <div className="btn_box">
                    <button className={btn ? "active" : null} onClick={()=>{
                        setBtn(true)
                        setContent("first")
                    }}>영유아검진</button>
                    <button className={btn ? null : "active"} onClick={()=>{
                        setBtn(false)
                        setContent("fourth")
                    }}>예방접종</button>
                </div>
                {btn ? (
                    <> 
                        <h2 className="s_title">현재 {data.state.hcheck}차 건강검진 기간입니다</h2>
                        <div className="progressbar_box clearfix">
                            <p >검진율</p>
                            <ProgressBar className="progressbar" now={parseInt(data.state.hcheck*14.29) } label={`${parseInt(data.state.hcheck*14.29)}%`} variant="warning" />
                        </div>
                        <ul className="tab clearfix">
                            <li className={content=='first' && "active"}><a href="#" name="first" onClick={handleClickButton}>전체 7</a></li>
                            <li className={content=='second' && "active"}><a href="#" name="second" onClick={handleClickButton}>미검진 {7-data.state.hcheck}</a></li>
                            <li className={content=='third' && "active"}><a href="#" name="third" onClick={handleClickButton}>검진완료 {data.state.hcheck}</a></li>
                        </ul>
                        {content && <>{selectComponent[content]}</>}
                    </>
                ):(
                    <>
                        <h2 className="s_title">현재 {dname}건의 접종기간입니다</h2>
                        <div className="progressbar_box clearfix">
                            <p >접종률 </p>
                            <ProgressBar now={parseInt(data.state.icheck*2.44)} label={`${parseInt(data.state.icheck*2.44)}%`} variant="warning"/>
                        </div>
                        <ul className="i_tab clearfix">
                            <li className={content=='fourth' && "active"}><a href="#" name="fourth" onClick={handleClickButton}>전체 41</a></li>
                            <li className={content=='fifth' && "active"}><a href="#" name="fifth" onClick={handleClickButton}>미접종 {41-data.state.icheck}</a></li>
                            <li className={content=='sixth' && "active"}><a href="#" name="sixth" onClick={handleClickButton}>접종완료 {data.state.icheck}</a></li>
                        </ul>
                    </>
                )}
            </div>
        </div>
       </> 
    );
}
 
export default OnLogin_CheckUp