import DataContext from "../data/DataContext";
import { useContext, useEffect, useState } from "react";
import "../css/OnLogin_Singup.css"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

const OnLogin_Singup = () => {
    const data = useContext(DataContext)
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");

    const infant = localStorage.getItem("currentInfant")
    const getInfantData = async () => {
        const docRef = doc(db, "infant", infant);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        setName(docSnap.data().name);
        setAge(docSnap.data().age);
        setGender(docSnap.data().gender);
        }
    }

    useEffect(()=>{
        getInfantData()
    },[infant])
    
    const date1 = new Date(age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();
    const date = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
    
    return (  
        <>
            <div className="infant_img clearfix">
            {gender == "남" ? (
                <img src={`${process.env.PUBLIC_URL}/images/male.jpg`} alt="남자아이프로필" />
            ):(
                <img src={`${process.env.PUBLIC_URL}/images/female.jpg`} alt="여자아이프로필" />
            )}
            </div>
            <ul>
                <li className="bold">{name}</li>
                <li>{age.substr(0,4)+"/"+age.substr(5,2)+"/"+data.state.age.substr(8)} ({gender})</li>
                <li className="bold">D+{date}/ {month}개월</li>
            </ul>
        </>
    );
}
 
export default OnLogin_Singup;