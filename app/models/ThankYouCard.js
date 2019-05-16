export default class ThankYouCard {
    constructor({ to = "", gift = "" }) {
        this.to = to.trim()
        this.gift = gift.trim()
    }

    get Message() {
		return `Dear ${this.to}, 
		Thanks so much for coming to my graduation and for the thoughtful ${this.gift}!
		Best, Porter`
	}
}