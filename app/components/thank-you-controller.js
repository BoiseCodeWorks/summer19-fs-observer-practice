import ThankYouService from "./thank-you-service.js";

let _thankYouService = new ThankYouService()

function _drawCards() {
    let cards = _thankYouService.ThankYouCards
    let template = ''
    cards.forEach(c => {
        template += `
        <div class="col-4">
            <div class="card thank-you-card m-2">
                <div class="card-body">
                    <p>${c.Message}</p>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector('.thank-you-dropzone').innerHTML = template
}

export default class ThankYouController {
    constructor() {
        _thankYouService.addSubscriber('thankYouCards', _drawCards)
    }
    
    addThankYouCard(e) {
        e.preventDefault()
        let form = e.target
        let thankYou = {
            to: form.to.value,
            gift: form.gift.value
        }
        _thankYouService.addThankYouCard(thankYou)
    }
}