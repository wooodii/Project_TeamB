import { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
import DataContext from "../data/DataContext";
import ReviewModal from "./ReviewModal";
import '../css/ReviewModal.css';

const Review = () => {
    const data = useContext(DataContext);

    const [revisitCount, setRevisitCount] = useState();
    

    useEffect(() => {
        setRevisitCount(data.state.comments.length)
    }, [data.state.comments.length]);


    return (
        <>
        <div style={{ width: "390px", height: "400px", marginTop : "5em"}}>
        <hr />

            <Row style={{marginTop : "2vh"}}> 
                <Col xs={4} style={{marginBottom : "2vh"}}>
                    <Row>
                        <Col><h3 style={{marginLeft : "1em"}}>방문후기</h3></Col>
                    </Row>
                </Col>
                <Col xs={8}> 
                <ReviewModal style={{marginLeft : "-10px"}}/>
                </Col> 
            </Row>
            <Row style={{marginLeft : "55px"}}>
                <div> 이 병원에 대해 {revisitCount} 명이 후기를 남겼어요 </div>
            </Row>
            <Row className="reviewBox">
                <Row className='reviewBoxPrint' 
                    style={{ msOverflowStyle: "none",  border : "3px solid #1b4542", 
                        scrollbarWidth : "none", overflowY: "scroll", borderRadius : "10px", 
                            height : "500px", maxWidth : "340px", marginLeft : "35px", marginTop : "20px"}}>   
                    {data.state.comments.map((id) => (
                        <div style={{backgroundColor : "#B7CFC6", borderRadius : "10px", margin : "10px 10px 10px 10px", maxHeight : "200px"}}>
                            <Row>
                                {
                                    id.countStar 
                                    ?
                                    <div style={{margin : "10px 10px 10px 75px"}}>
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

export default Review;