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

const showContent = (arr) => {
    return {
        type: 'SHOW_SOME_CONTENT',
        payload: arr
    }
}

const showTheCheapest = () => {
    console.log('helloEba');
    return {
        type: 'SHOW_THE_CHEAPEST'
    }
}

const showFiveMore = () => {
    console.log('sss');
    return {
        type: 'SHOW_MORE'
    }
}

export {
    getId,
    getTicket,
    showContent,
    showTheCheapest,
    showFiveMore
}