const initialState = {
    id: null, // id полученные с апишки
    tickets: [], // все билеты полученные с апишки
    sorted: [], //сортирует данные по выбранному критерию
    filtered:[], // фильтрует данные по выбранным чекам
    content: [], // выводит контент со всеми изменениыми сортировки или фильтров
    active: 'none', // выбор какая кнопка активная
    changes: null
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'GET_ID':
            return {
                ...state,
                id: action.payload
            };
        case 'GET_TICKET':
            return {
                ...state,
                tickets: action.payload,
                sorted: action.payload,
                filtered: action.payload
            };
        case 'SHOW_SOME_CONTENT':
            const items = state.tickets.slice(0, 5);
            return {
                ...state,
                filtered: state.tickets,
                content: items
            };
        case 'SHOW_THE_CHEAPEST':
            const lastIndexCheapest = action.payload.length;
            const cheapestSortTicket = state.tickets.sort((a, b) => a.price > b.price ? 1 : -1);
            const cheapestSort = state.filtered.sort((a, b) => a.price > b.price ? 1 : -1);
            const cheapest = cheapestSort.slice(0, lastIndexCheapest);
            return {
                ...state,
                sorted: cheapestSortTicket,
                filtered: cheapestSort,
                content: cheapest,
                active: 'cheapest'
            };
        case 'SHOW_THE_FASTEST':
            const lastIndexFastest = action.payload.length;
            const fastestSortTicket = state.tickets.sort((a, b) => {
                return a.segments[0].duration > b.segments[0].duration ? 1 : -1;
            });
            const fastestSort = state.filtered.sort((a, b) => {
                return a.segments[0].duration > b.segments[0].duration ? 1 : -1;
            });
            const fastest = fastestSort.slice(0, lastIndexFastest);
            return {
                ...state,
                sorted: fastestSortTicket,
                filtered: fastestSort,
                content: fastest,
                active: 'fastest'
            };
        case 'SHOW_OPTIMAL':
            const lastIndexOpti = action.payload.length;
            const optimalSortTicket = state.tickets.sort((a, b) => {
                return ((a.price + a.segments[0].duration) / 2) > ((b.price + b.segments[0].duration) / 2) ? 1 : -1;
            });
            const optimalSort = state.filtered.sort((a, b) => {
                return ((a.price + a.segments[0].duration) / 2) > ((b.price + b.segments[0].duration) / 2) ? 1 : -1;
            });
            const optimal = optimalSort.slice(0, lastIndexOpti);
            return {
                ...state,
                sorted: optimalSortTicket,
                filtered: optimalSort,
                content: optimal,
                active: 'opti'
            };
        case 'CHANGES':
            const lastIndexChng = action.payload.length;

            if (action.id.length < 1) {
                return {
                    ...state,
                    filtered: state.tickets,    
                };
            }

            const filterSorting = action.id.map(elem => {
                return state.sorted.filter((item) => {
                    return item.segments.every(item => {
                        return item.stops.length === +elem
                    })
                });
            });            
            const some = filterSorting.flat();
            const changesSort = some.slice(0, lastIndexChng);

            return {
                ...state,
                filtered: some,
                content: changesSort
            };
        case 'SHOW_MORE': 
            const addFiveMore = action.payload.length;
            const moreItems = state.filtered.slice(0, (addFiveMore + 5));
            return {
                ...state,
                content: moreItems
            };
        default:
            return state;
    }
}

export default reducer;