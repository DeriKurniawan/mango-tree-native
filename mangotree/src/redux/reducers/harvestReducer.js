const initialState = {
    harvest: 0
}

const HarvestReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_HARVEST' :
            return {
                harvest: action.payload.harvest
            }
        default:
            return state
    }
}

export default HarvestReducer