class AddUserHandler {
    constructor(dataService) {
        this.store = dataService;
    }

    async execute(data) {
        let userResp = await this.store.Users.addUser(data);
        console.log(userResp);
    }
}

module.exports = AddUserHandler;