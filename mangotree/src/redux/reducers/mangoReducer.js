const initialState = {
    age: 0
}

const MangoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GROWTH_COUNT':
            return {
                age: action.payload.count
            }
        default:
            return state
    }
}

export default MangoReducer
