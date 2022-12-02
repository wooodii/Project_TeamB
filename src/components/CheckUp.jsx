import Preview from './Preview';
import { useSelector } from 'react-redux';
import { useContext} from "react";
import DataContext from "../context/DataContext";
import OnLogin_CheckUp from './OnLogin_CheckUp';

const CheckUp = () => {
    const data = useContext(DataContext);
    
    
    const preview2 = useSelector((state)=>(state.checkUp.preview2))
    return (  
        <>
        {data.state.login ? (
            <>
                <OnLogin_CheckUp/>
            </>
        ):(
            <Preview content={preview2} />
        )}
        </>
    );
}
 
export default CheckUp;