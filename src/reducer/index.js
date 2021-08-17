const initialState = {
    id: null,
    tickets: [],
    content: [],
    active: 'none',
    changes: null
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
            const lastIndexCheapest = action.payload.length;
            const cheapestSort = state.tickets.sort((a, b) => a.price > b.price ? 1 : -1);
            const cheapest = cheapestSort.slice(0, lastIndexCheapest);
            return {
                ...state,
                content: cheapest,
                active: 'cheapest'
            };
        case 'SHOW_THE_FASTEST':
            const lastIndexFastest = action.payload.length;
            const fastestSort = state.tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1);
            const fastest = fastestSort.slice(0, lastIndexFastest);
            return {
                ...state,
                content: fastest,
                active: 'fastest'
            };
        case 'SHOW_OPTIMAL':
            const lastIndexOpti = action.payload.length;
            const optimalSort = state.tickets.sort((a, b) => ((a.price + a.segments[0].duration) / 2) > ((b.price + b.segments[0].duration) / 2) ? 1 : -1);
            const optimal = optimalSort.slice(0, lastIndexOpti);
            return {
                ...state,
                content: optimal,
                active: 'opti'
            };
        case 'WITHOUT_CHANGES':
            const lastIndexZeroChng = action.payload.length;
            const zeroChangesSort = state.tickets.filter(item => (item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0));
            const zeroChanges = zeroChangesSort.slice(0, lastIndexZeroChng)
            return {
                ...state,
                tickets: zeroChangesSort,
                content: zeroChanges
            };
        case 'ONE_CHANGE':
            const lastIndexOneChng = action.payload.length;
            const oneChangesSort = state.tickets.filter(item => (item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1));
            const oneChanges = oneChangesSort.slice(0, lastIndexOneChng)
            return {
                ...state,
                tickets: oneChangesSort,
                content: oneChanges
            };
        case 'SHOW_MORE': 
            const n = action.payload.length;
            const moreItems = state.tickets.slice(0, (n + 5));
            return {
                ...state,
                content: moreItems
            };
        default:
            return state;
    }
}

export default reducer;