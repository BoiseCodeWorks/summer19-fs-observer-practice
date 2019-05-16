import ThankYouCard from "../models/ThankYouCard.js";

let _state = {
    thankYouCards: []
}

let _subscribers = {
    thankYouCards: []
}

function _setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn())
}


export default class ThankYouService {
    constructor() { }

    get ThankYouCards() {
        return _state.thankYouCards.map(tc => new ThankYouCard(tc))
    }    

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    addThankYouCard(thankYou) {
        let thankYouCard = new ThankYouCard(thankYou)
        let newThankYouCards = [thankYouCard, ..._state.thankYouCards]
        _setState('thankYouCards', newThankYouCards)
    }
}