import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [infant,setInfant] = useState({name:"홍길동", age:"2020-11-23", gender:"남"})
    const [measures,setMesures] = useState({height:0, 
    weight:0, temperature:0, medicine:"" })
    const [ismeasures,setIsMeasures] = useState(false) 
    const [login,setLogin] = useState(true)
    const [hcheck,setHcheck] = useState(0);
    const [icheck,setIcheck] = useState(0);

    const age = String(infant.age)
    const date1 = new Date(infant.age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();

    const date = Math.floor(Math.abs(diffDate /  ( 1000 * 60 * 60 * 24 )));
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));


    const value = {
        state : {infant, login, hcheck, icheck, date, month, age, measures, ismeasures},
        action : {setInfant, setLogin, setHcheck, setIcheck, setMesures, setIsMeasures}
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export { DataProvider }

export default DataContext;

