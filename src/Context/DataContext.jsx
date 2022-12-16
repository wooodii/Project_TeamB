import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext(); 
const DataProvider = ({children}, props) => {
    const [user, setUser] = useState({name : "sss",  review :  null, likelist : []});

    // 리뷰작성
    const [comments, setComments] = useState([
        {
            commentId : 1, 
            name : "user",
            comment : "comment"
        },
    ]);
    const [commentCount, setCommentCount] = useState(2); 

    // 재방문버튼
    const value = {
        state :  {user, comments, commentCount},
        action :  {setUser, setComments, setCommentCount}
    }

    return <DataContext.Provider value={value} > {children} </DataContext.Provider>
}

export{DataProvider}
export default DataContext;