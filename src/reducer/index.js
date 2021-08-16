const initialState = {
    id: null,
    tickets: [],
    content: []
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
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
            };
        case 'SHOW_SOME_CONTENT':
            const items = state.tickets.slice(0, 5);
            return {
                ...state,
                content: items
            };
        case 'SHOW_THE_CHEAPEST':
            console.log('hi');
            const lastIndex = state.tickets.length;
            const cheapItems = state.tickets.map(item => {
                const res = item.price;

                return res;
            });
            const cheapestSort = cheapItems.sort();
            const cheapest = cheapestSort.slice(0, 5);
            return {
                ...state,
                content: [
                    ...state.content.slice(lastIndex),
                    cheapest
                ]
            };
        case 'SHOW_MORE': 
            const n = state.content.length;
            const moreItems = state.content.slice(n + 1, (n + 5));
            return {
                ...state,
                moreItems
            }
            
        default:
            return state;
    }
}

export default reducer;