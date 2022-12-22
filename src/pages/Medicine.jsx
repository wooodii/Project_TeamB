/** 복약관리 페이지입니다 (서아)
 * 로그인한 유저 > 유저정보와 연결해서 직접 약 등록과 수정, 삭제 기능만 (리덕스)
 * firebase db에는 저장 안 함
 */

import { useContext, useEffect, useState } from "react";
import { FloatingLabel, Form, Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "../modules/medicine";
import DataContext from "../data/DataContext";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase";

const Medicine = () => {
    const data = useContext(DataContext);
    const user = localStorage.getItem("currentUser");
    const [name, setName] = useState();
    const [pills, setPills] = useState("");

    const getSingleData = async () => {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setName(docSnap.data().name);
        }
    }
    // +리덕스로 medicine.js 값 가져와서 map으로 출력
    const medicine = useSelector((state)=>(state.medicine));
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            data.action.setIsLoginned(true)
            getSingleData();
        } else {
            data.action.setIsLoginned(false)
        }
    }, [user]);
    //console.log(pills);

    return ( 
        <div className="mx-5 mt-5">
                    <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="이름"
                        className="mb-3">
                        <Form.Control type="text" value={name} 
                        style={{border:"none", borderBottom:"1px solid lightgray"}}
                        onChange={(e)=>{setName(e.target.value)}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="복용하는 약을 작성해주세요">
                        <Form.Control
                        as="textarea" onChange={(e)=>{setPills(e.target.value)}}
                        style={{ height: '100px' }} />
                    </FloatingLabel>
                    </>
            <br />
            <Button variant="outline-primary"
            onClick={()=>{dispatch(addMedicine({ name: name, pills: pills }));}}
            >작성</Button>
            <hr />
            <h4>복용하는 약</h4> <br />
            <Card style={{ width:"80%" }}>
                <ListGroup variant="flush">
                    {
                        medicine.map((medicine)=> (
                        <div key={medicine.pillId}>
                            <PrintMedicine medicine={medicine} />
                        </div> 
                        ))
                    }
                </ListGroup>
            </Card>
        </div>
    );
}

export default Medicine;


// +추가
// 복약관리 내역을 출력할 공간 ui - 컴포넌트로 작성
// react-bootstrap 의 ListGroup.Item에 출력하고자 함
const PrintMedicine =({medicine})=> {
    return (
        <ListGroup.Item>
            <b>{medicine.name}</b>
            <br />
            {medicine.pills}
        </ListGroup.Item>
    )
}

