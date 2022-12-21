import { useContext, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
import DataContext from "../data/DataContext";
import ReviewModal from "./ReviewModal";

const Review = () => {
    const data = useContext(DataContext);
    // const [revisit, setRevisit] = useState();

    return (
        <>
       
         <div style={{ width: "390px", height: "844px", marginTop : "5em"}}>
             <hr />
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

            <Row style={{marginLeft : "55px"}}>
                 <div> 이 병원을 {data.state.comments.map((id, index) => (index+1))}명이 재방문하고 싶어해요 </div>
            </Row>

            <Row style={{ overflow: "auto", width : "100%"}}>
                <Row style={{ border : "3px solid #1b4542", borderRadius : "10px", maxWidth : "340px", marginLeft : "50px", marginTop : "20px"}}> 
                    

                    {data.state.comments.map((id) => (
                        <div style={{backgroundColor : "#feb546", borderRadius : "10px", marginTop : "10px", marginBottom : "10px"}}>
                            <Row>
                                <Star setCount={id.countStar}/>
                            </Row>
                            <Row style={{display : "flex"}}>
                                <div>
                                    <span style={{padding : "0.2em 0.5em", 
                                                fontSize : "0.7em", margin : "0.3em", 
                                                    backgroundColor : "white",  borderRadius : "10px"}}> 진료결과 |  {id.btn1} </span>
                                    <span style={{padding : "0.2em 0.5em", fontSize : "0.7em",
                                                margin : "0.3em", backgroundColor : "white", borderRadius : "10px"}}> 서비스 |{id.btn2} </span>
                                </div>
                                <div>
                                    <span style={{padding : "0.2em 0.5em", backgroundColor : "white", 
                                                fontSize : "0.7em", margin : "0.3em", borderRadius : "10px"}}> 시설/장비 | {id.btn3} </span>
                                    <span style={{padding : "0.2em 0.5em", fontSize : "0.7em", 
                                                backgroundColor : "white", margin : "0.3em", borderRadius : "10px"}}> {id.yesNo}</span>
                                </div>
                            </Row>
                            <Row>
                                <div style={{backgroundColor : "white", margin : "10px", borderRadius : "10px", padding : "5px" }}>  
                                {id.review}
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