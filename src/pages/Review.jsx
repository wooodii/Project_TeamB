import { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
import DataContext from "../data/DataContext";
import ReviewModal from "./ReviewModal";

const Review = () => {
    const data = useContext(DataContext);
    return (
        <>
        <div style={{ width: "390px", height: "844px", border: "2px solid black"}}>
            <Row style={{marginTop : "2vh"}}> 
                <Col xs={3} style={{marginBottom : "2vh"}}>
                    <Row>
                        <Col><h5>리뷰</h5></Col>
                    </Row>
                </Col>
                <Col xs={9}> 
                <ReviewModal /> 
                </Col>
            </Row>

            <Row style={{marginBottom : "1em"}}>
                {/*<div> 이 병원을 {data.state.comments.map((id, index) => (index+1))}명이 재방문하고 싶어해요 </div>*/}
            </Row>

            <div style={{ overflow: "auto", width : "100%", height : "setPeople"}}>
                <Row style={{ backgroundColor : "lightgray", borderRadius : "10px", width : "340px", marginLeft : "3vw"}}>
                <Row>
                {data.state.comments.map((id, index) => (
                    <div style={{border : "2px solid black", borderRadius : "10px", margin : "0.5em"}}>
                        <Row>
                            <Star setCount={id.countStar}/>
                        </Row>
                        <Row style={{display : "flex"}}>
                            <div>
                                <span style={{fontSize : "0.9em", margin : "0.3em", backgroundColor : "white",  borderRadius : "10px"}}>진료결과 |  {id.btn1} </span>
                                <span style={{fontSize : "0.9em", backgroundColor : "white", borderRadius : "10px"}}> 서비스 |{id.btn2} </span>
                            </div>
                            <div>
                                <span style={{backgroundColor : "white",fontSize : "0.9em", margin : "0.3em", borderRadius : "10px"}}>시설/장비 | {id.btn3} </span>
                                <span style={{fontSize : "0.9em", backgroundColor : "white", borderRadius : "10px"}}> {id.yesNo}</span>
                            </div>
                        </Row>
                        <Row>
                            <hr></hr>
                            <div>  
                            {id.review}
                            </div>
                        </Row>
                    </div>
                ) )}
                </Row>
                </Row>
            </div>
            
        </div>
        </>
    );
}

export default Review;