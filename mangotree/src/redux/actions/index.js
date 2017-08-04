function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const growthCount = () => {
    return {
        type: 'GROWTH_COUNT',
        payload: {
            count: getRandomInt(2, 15)
        }
    }
}

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        payload: {
            name: name
        }
    }
}

export const getHarvest = () => {
    return {
        type: 'GET_HARVEST',
        payload: {
            harvest: getRandomInt(5, 10)
        }
    }
}

