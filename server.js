const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

const application = express();
application.use(bodyParser.json());






application.get('/api/customer/items', (response, request) => {

});

application.post('/api/customer/items/:itemId/purchases', (response, request) => {

});

application.get('/api/vendor/purchases', (response, request) => {

});

application.get('/api/vendor/money', (response, request) => {

});

application.put('/api/vendor/items', async (response, request) => {

    var description = request.body.description;
    var cost = request.body.cost;
    var quantity = request.body.quantity;

    var newItem =  await models.item.create({
        description: description,
        cost: cost,
        quantity: quantity
    });

    response.json(newItem);

});

application.put('/api/vendor/items/:itemId', (response, request) => {




});

module.exports = application;
//GET /api/customer/items - get a list of items
//POST /api/customer/items/:itemId/purchases - purchase an item
//GET /api/vendor/purchases - get a list of all purchases with their item and date/time
//GET /api/vendor/money - get a total amount of money accepted by the machine
//POST /api/vendor/items - add a new item not previously existing in the machine
//PUT /api/vendor/items/:itemId - update item quantity, description, and cost