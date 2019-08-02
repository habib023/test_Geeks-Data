module.exports = (app) => {
    const synonymes = require('../controleur/synonyme.controller');

    // Create a new synonymes
    app.post('/synonymes', synonymes.create);

    // Retrieve all synonymeId
    app.get('/synonymes', synonymes.findAll);

    // Retrieve a single car with synonymeId
    app.get('/synonymes/:synonymeId', synonymes.findOne);

    // Update a Note with synonymeId
    app.put('/synonymes/:synonymeId', synonymes.update);

    // Delete a Note with synonymeId
    app.delete('/synonymes/:synonymeId', synonymes.delete);
}