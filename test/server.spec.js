var chai = require('chai'),
    chaiHttp = require('chai-http');
var app = require('../index');

chai.use(chaiHttp);
chai.request(app);

describe("Given a server", function () {
    describe("when requesting GET /", function () {
        it("returns status code 200", function () {
            app
                .get('/', function (error, response, body) {
                    expect(res)
                        .to
                        .have
                        .status(200);
                    done();
                });
        });
    });
});