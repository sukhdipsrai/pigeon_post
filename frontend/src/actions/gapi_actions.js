export const RECEIVE_ORIGIN = "RECEIVE_ORIGIN";
export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";


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


export const originToState = (coordinates)=>dispatch=>{
    return dispatch(recOri(coordinates))
}

export const destinationToState = (coordinates)=>dispatch=>{
    return dispatch(recDest(coordinates))
}