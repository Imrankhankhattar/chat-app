const Users = require('../DatabaseObjects/User')
class UserDAO {

    constructor() { }

    async AddUser(data) {
        const newUser = new Users(data)
        const res = await newUser.save() 
        if(res && res._id){
            return {success:true,status: 200,  message:"User created successfully"}
        }
        return {success:false, message:"User creation failed"}
    }

}

module.exports =  UserDAO