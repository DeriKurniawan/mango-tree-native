const initialState = {
    name: ''
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_NAME' :
            return {
                name: action.payload.name
            }
        default:
            return state
    }
}

export default userReducer