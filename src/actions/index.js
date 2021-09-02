const getId = (id) => {
    return {
        type: 'GET_ID',
        payload: id
    }
}

const getTicket = (arr) => {
    return {
        type: 'GET_TICKET',
        payload: arr
    }
}

const showContent = () => {
    return {
        type: 'SHOW_SOME_CONTENT'
    }
}

const showTheCheapest = (data) => {
    return {
        type: 'SHOW_THE_CHEAPEST',
        payload: data
    }
}

const showTheFastest = (data) => {
    return {
        type: 'SHOW_THE_FASTEST',
        payload: data
    }
}

const showOpti = (data) => {
    return {
        type: 'SHOW_OPTIMAL',
        payload: data
    }
}

const showFiveMore = (data) => {
    return {
        type: 'SHOW_MORE',
        payload: data
    }
}

const showChanges = (data, id) => {
    return {
        type: 'CHANGES',
        payload: data,
        id
    }
}

const showAllChanges = (data, id) => {
    return {
        type: 'ALL_CHANGES',
        payload: data,
        id
    }
}

export {
    getId,
    getTicket,
    showContent,
    showTheCheapest,
    showFiveMore,
    showTheFastest,
    showOpti,
    showChanges,
    showAllChanges
}