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

export {
    getId,
    getTicket
}