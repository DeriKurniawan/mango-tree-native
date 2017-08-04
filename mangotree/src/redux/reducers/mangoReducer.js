const initialState = {
    name: '',
    maxAge: 10,
    incrementAge: 5,
    age: 0,
    harvest: 0
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

