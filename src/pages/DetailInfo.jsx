import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../data/DataContext";

const DetailInfo = () => {
    const data = useContext(DataContext);

    return (     
        <div>
            <div>  
                <h2> {data.state.h_name}</h2>
                <p> {data.state.h_address}</p>
                <p> {data.state.h_num}</p>
                <p>{data.state.h_major}</p>
            </div>
            
        </div>  
        );
}
 
export default DetailInfo;