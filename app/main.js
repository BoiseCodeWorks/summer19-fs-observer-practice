import ThankYouController from "./components/thank-you-controller.js";


class App {
    constructor() {
        this.controllers = {
            thankYouController: new ThankYouController()
        }
    }
}

window.app = new App()