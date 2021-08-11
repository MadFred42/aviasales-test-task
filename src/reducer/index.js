const initialState = {
    id: null,
    tickets: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ID':
            return {
                ...state,
                id: action.payload
            };
        case 'GET_TICKET':
            console.log(action.payload);
            return {
                ...state,
                tickets: action.payload
            }
        default:
            return state;
    }
}

export default reducer;