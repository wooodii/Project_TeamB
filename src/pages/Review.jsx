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
                        <Col><h3 style={{marginLeft : "1em"}}>리뷰</h3></Col>
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
                <Row style={{ border : "3px solid #1b4542", borderRadius : "10px", width : "340px", marginLeft : "3vw"}}>
                <Row>
                {data.state.comments.map((id) => (
                    <div style={{backgroundColor : "#feb546", borderRadius : "10px", margin : "0.5em"}}>
                        <Row>
                            <Star setCount={id.countStar}/>
                        </Row>
                        <Row style={{display : "flex"}}>
                            <div>
                                <span style={{padding : "0.2em 0.5em", fontSize : "0.7em", margin : "0.3em", backgroundColor : "white",  borderRadius : "10px"}}>진료결과 |  {id.btn1} </span>
                                <span style={{padding : "0.2em 0.5em", fontSize : "0.7em",margin : "0.3em", backgroundColor : "white", borderRadius : "10px"}}> 서비스 |{id.btn2} </span>
                            </div>
                            <div>
                                <span style={{padding : "0.2em 0.5em", backgroundColor : "white", fontSize : "0.7em", margin : "0.3em", borderRadius : "10px"}}>시설/장비 | {id.btn3} </span>
                                <span style={{padding : "0.2em 0.5em", fontSize : "0.7em", backgroundColor : "white", margin : "0.3em", borderRadius : "10px"}}> {id.yesNo}</span>
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