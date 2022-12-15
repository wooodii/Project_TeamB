<<<<<<< HEAD
=======
import { useContext } from "react";
>>>>>>> 9333d1fa8e8ce0053ee22171654a6ea54beb7aa2
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Star from "../components/Star";
<<<<<<< HEAD
import WriteReview from "./WriteReview";

const Review = (props) => {
    const {countStar} = props; 
    console.log(countStar);

    const [reviewBtn, setReviewBtn] = useState([
            { btnId : 1, ChooseBtn : "효과없어요" }, 
            { btnId : 2, ChooseBtn : "보통이에요" }, 
            { btnId : 3, ChooseBtn : "효과좋아요" }, 
            { btnId : 4, ChooseBtn : "불친절해요" }, 
            { btnId : 5, ChooseBtn : "친절해요" }, 
            { btnId : 6, ChooseBtn : "노후되었어요" }, 
            { btnId : 7, ChooseBtn : "신규장비에요" }
        ])

=======
import DataContext from "../Context/DataContext";
import ReviewModal from "./ReviewModal";

const Review = () => {
    const data = useContext(DataContext);
>>>>>>> 9333d1fa8e8ce0053ee22171654a6ea54beb7aa2
    return (
        <>
         <div style={{ width: "390px", height: "844px", border: "2px solid black"}}>
            <Row style={{marginTop : "2vh"}}> 
<<<<<<< HEAD
                <Col xs={3} style={{marginBottom : "2vh"}}><h2>리뷰</h2></Col>
                <Col> <WriteReview/> </Col>
            </Row>
            <Row>
                <div> 이 병원을 {}가 재방문하고 싶어해요 </div>
            </Row>
            <Row style = {{ marginBottom : " 5vh"}}>
                <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "360px", marginLeft : "3vw"}}>
                    <Col xs={6}>
                        평점 / 별점 
                    </Col>
                    <Col xs={3} style={{display : "block" }}>  
                        <Row> 매우만족 </Row> 
                        <Row> 만족 </Row> 
                        <Row> 보통 </Row> 
                        <Row> 별로 </Row> 
                        <Row> 매우별로 </Row> 
                    </Col>
                    <Col xs={3}>
                        dsfd
                    </Col>
                </Row>
            </Row>
            <Row style={{backgroundColor : "lightgray", borderRadius : "10px", width : "340px", marginLeft : "3vw"}}>
                <Row >
                    <Star/>
                </Row>
                <Row>방문 미인증 | 재방문 할래요</Row>
                <Row>
                    <textarea name="" id="" cols="10" rows="5"></textarea>
                </Row>
            </Row>
=======
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
            
>>>>>>> 9333d1fa8e8ce0053ee22171654a6ea54beb7aa2
        </div>
        </>
    );
}

export default Review;