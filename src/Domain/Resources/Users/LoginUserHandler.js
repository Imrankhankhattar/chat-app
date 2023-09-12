const { setData, getData } = require('../../../Services/redis')
const { generateOTP, validateOTP } = require('../../../Services/SpeakEasy')
class LoginUserHandler {
    constructor(dataService) {
        this.store = dataService;
    }

    async execute(data) {
        if (data.contact) {
            if (data.otp) {
            }
        }

    }
}

module.exports = LoginUserHandler;