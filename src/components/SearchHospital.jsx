import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import DataContext from "../data/DataContext";


const SearchHosptial = ({전화번호, 주소, 사업장,진료과목내용명}) => {
    const navigate = useNavigate();
    const data = useContext(DataContext);

    
    return (
        <div onClick={(e)=>{e.preventDefault()
            data.action.setH_name(`${사업장 && 사업장}`)
            data.action.setH_num(`${전화번호 && 전화번호}`)
            data.action.setH_address(`${주소 && 주소}`)
            data.action.setH_major(`${진료과목내용명 && 진료과목내용명}`)
            navigate('/detailinfo')

        }}  style={{ width: "300px", height: "110px", border: "2px solid black" }}>
            <div>{사업장 && 사업장}</div>
            <div>{전화번호 && 전화번호}</div>
            <div>{주소 && 주소}</div>
            <div style={{display:"none"}}>{진료과목내용명&&진료과목내용명} </div>
        </div>
    );
}

export default SearchHosptial;