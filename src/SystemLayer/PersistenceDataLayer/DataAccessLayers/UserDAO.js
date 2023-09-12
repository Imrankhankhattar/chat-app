const Users = require('../DatabaseObjects/User')
const senOtp = require('../../../Services/twilio')
class UserDAO {

    constructor() { }

    async AddUser(data) {
        const newUser = new Users(data)
        const res = await newUser.save() 
        if(res && res._id){
            senOtp(data.contact)
            return {success:true,status: 200,  message:"OTP sent!"}
        }
        return {success:false, message:"User creation failed"}
    }

}

module.exports =  UserDAO