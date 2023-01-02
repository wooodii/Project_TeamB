import { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
import DataContext from "../data/DataContext";
import ReviewModal from "./ReviewModal";
import '../css/ReviewModal.css';
import { IoIosStar } from "react-icons/io";
import { IconContext } from "react-icons";

const Review2 = () => {
    const data = useContext(DataContext);

    const [revisitCount, setRevisitCount] = useState();
    

    useEffect(() => {
        setRevisitCount(data.state.comments.length)
    }, [data.state.comments.length]);


    return (
        <>
        <div style={{ width: "390px", height: "400px", marginTop : "5em" , marginLeft:"16px"}}>
        <hr />
            <Row style={{marginTop : "2vh"}}> 
                <Row>
                    <Col><h4 style={{margin : "0 auto", fontSize : "1.5em"}}> 방문후기</h4></Col>
                </Row>
            </Row>
            <Row>
                <div style={{marginLeft:"0px", marginTop : "2em"}}> 이 병원에 대해 {revisitCount} 명이 후기를 남겼어요 </div>
            </Row>
            <Row>
                <div style={{width : "345px", backgroundColor : "#eee", borderRadius : "10px", margin : "5px 16px 5px 16px"}}>
                            <div style={{padding : "2.3em 0 2em 0"}}>
                    <Row>
                        <Col xs={4}>
                             <Row>
                             <IconContext.Provider value={{ color: "#1b4542", size : "3.7em"}}>
                                <IoIosStar/>
                            </IconContext.Provider>
                            </Row>
                             <Row>
                                <div style={{fontSize : "20px"}}> 4.9 </div>
                            </Row>
                        </Col>
                        <Col xs={7} style={{backgroundColor:"white", borderRadius : "10px"}}>
                            <Row  style={{fontSize: "14px", marginTop : "11px", marginLeft : "2px"}}>
                            {" "}  진료결과 | 효과좋아요{" "}(89%)
                            </Row> 
                            <Row  style={{fontSize: "14px",marginLeft : "2px"}}>
                            {" "} 서비스  {" "} | 친절해요{" "}(85%)
                            </Row> 
                            <Row  style={{fontSize: "14px", marginLeft : "2px"}}>
                            {" "} 시설/장비 | 보통이에요{" "}(75%)
                            </Row> 
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                            </div>
                    <Row style={{marginBottom : "1em"}}>
                        <ReviewModal/>
                    </Row>
                </div>
            </Row>
            
            <Row className="reviewBox">
                <Row className='reviewBoxPrint' 
                    style={{ msOverflowStyle: "none",  border : "3px solid #1b4542", 
                        scrollbarWidth : "none", overflowY: "scroll", borderRadius : "10px", 
                            height : "500px", maxWidth : "350px", marginLeft : "16px",marginTop : "20px"}}>   
                    {data.state.comments.map((id) => (
                        <div style={{backgroundColor : "#B7CFC6", borderRadius : "10px", 
                        marginTop : "8px", maxHeight : "180px"}}>
                            <Row>
                                {
                                    id.countStar 
                                    ?
                                    <div style={{margin : "10px 10px 10px 0px"}}>
                                    <Star setCount={id.countStar}/>
                                    </div> 
                                    : 
                                    null
                                }
                            </Row>
                            <Row style={{display : "flex"}}>
                                <div style={{marginLeft : "4px", marginBottom : "2px", marginTop : "4px", marginBottom : "1px"}}>
                                    {
                                        id.btn1 ? <span style={{padding : "0.2em 0.5em", 
                                                    fontSize : "0.7em", margin : "0.3em", 
                                                    backgroundColor : "white",  borderRadius : "10px"}}> 진료결과 |  {id.btn1} 
                                                </span> : null
                                    }
                                    {
                                        id.btn2 ? <span style={{padding : "0.2em 0.5em", fontSize : "0.7em",
                                                    margin : "0.3em", backgroundColor : "white", borderRadius : "10px"}}> 서비스 | {id.btn2} 
                                                </span> : null
                                    }
                                </div>
                                <div  style={{marginLeft : "4px", marginBottom : "8px"}}>
                                    {
                                        id.btn3 ? <span style={{padding : "0.2em 0.5em", backgroundColor : "white", 
                                                fontSize : "0.7em", margin : "0.3em", borderRadius : "10px"}}> 시설/장비 | {id.btn3} 
                                                </span> : null
                                    }
                                    {
                                        id.yesNo ? <span style={{padding : "0.2em 0.5em", fontSize : "0.7em", 
                                                backgroundColor : "white", margin : "0.3em", borderRadius : "10px"}}> {id.yesNo}
                                    </span> : null
                                    }
                                </div>
                            </Row>
                            <Row>
                                <div style={{marginRight : "5px"}}>
                                    {
                                        id.review ? <div style={{backgroundColor : "white", maxHeight : "150px", 
                                                    margin : "10px", borderRadius : "10px", 
                                                    padding : "5px", fontSize : "0.9em" }}>  {id.review} 
                                    </div>:null
                                    }
                                </div>
                            </Row>
                        </div>
                        ) )}
                </Row>
            </Row>
        </div>
        </>
    );
}

export default Review2;