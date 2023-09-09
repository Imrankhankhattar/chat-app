const UserDAO = require('../PersistenceDataLayer/DataAccessLayers/UserDAO');

function DataService(data) {
    this.data = data;

    this.Users = {
        data: this.data,

        addUser: async function (userData) {
            return await new UserDAO().AddUser(userData);
        }


    }
}

module.exports = DataService;