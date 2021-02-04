export const RECEIVE_ORIGIN = "RECEIVE_ORIGIN";
export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";
export const REST_ORI_DEST = `REST_ORI_DEST`

const recOri = cord =>{
    return{
        type: RECEIVE_ORIGIN,
        cord: cord
    }
}

const recDest = cord =>{
    return{
        type: RECEIVE_DESTINATION,
        cord: cord
    }
}

const reset = ()=>{
    return{
        type: REST_ORI_DEST
    }
}


export const originToState = (coordinates)=>dispatch=>{
    return dispatch(recOri(coordinates));
}

export const destinationToState = (coordinates)=>dispatch=>{
    return dispatch(recDest(coordinates));
}

export const resetTaskForm = ()=> dispatch=>{
    return dispatch(reset());
}