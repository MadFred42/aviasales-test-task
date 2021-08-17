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

const showZeroChanges = (data) => {
    return {
        type: 'WITHOUT_CHANGES',
        payload: data
    }
}

const showOneChange = (data, changes) => {
    return {
        type: 'ONE_CHANGE',
        payload: data,
        changes
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
    showZeroChanges,
    showOneChange
}