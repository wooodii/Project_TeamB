import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "../data/DataContext";

const Medicine = () => {
    const data = useContext(DataContext);
    
    useEffect(()=>{
        console.log(data.state.user[0].medicine);
    },[])
    return ( 
        <>
        <h1>복약관리 페이지</h1>

        </>
     );
}
 
export default Medicine;