const initialState = {
    height : [
        {height_id:1, date:"", input:""}
    ]
}
let height_id = 2;
function measures(state = initialState, action){
    switch(action.type) {
        case "addHeight" :
            const newHeight = {...action.payload, height_id:height_id}
            height_id++;
            const newHeightArr = state.height.concat(newHeight);
            return newHeightArr
        default:
            return state
    }
}
export const addHeight =(height)=> ({type:"addHeight", payload:height});

export default measures;