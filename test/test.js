const request = require('supertest');
const server = require('../server/server.js');


describe('API endpoints', () => {
    let api;
    beforeAll(() => {
        api = server.listen(5000, () => console.log('Test server running on port 5000'));
    });

    afterAll(done => {
        console.log('Gracefully stopping test server');
        api.close(done)
    })

    it('responds to /', done => {
        request(api)
            .get('/')
            .expect(200, done);
    });

    it('responds to GET /results', done => {
        request(api)
            .get('/results')
            .expect(200, done);
    });

    it('responds to GET /results/random', done => {
        request(api)
            .get('/results/random')
            .expect(200, done);
    });

    it('404 everything else', done => {
        request(api)
            .get('/anythingelse')
            .expect(404, done);
    });
});