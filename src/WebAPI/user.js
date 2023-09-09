var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const Users = require('../Domain/Resources/Users');
const DataService = require('../SystemLayer/DataLayers');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('wellcome to chat-app');
});

router.post('/create-user', jsonParser, async (request, response) => {
  let res = await new Users.AddUserHandler(new DataService(request.body)).execute(request.body);
  if (res.status == 'success') {
    processResponse('user', 'created', 'Service created.', response);
  } else {
    response.send(new ResponseModel().getFailureResponse('Service not created.', 400, null, res.message))
  }
});

module.exports = router;
