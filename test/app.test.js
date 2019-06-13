const chai = require('chai');
const chaiHttp = require('chai-http');
const describe = require('mocha').describe;

const { app } = require('../app.js');



chai.use(chaiHttp);
chai.should();

describe("Todo's", () => {
  describe("GET /doesnotexist", () => {
    it("should redirect to the home page if a non-existent path is used.", (done) => {
      chai.request(app)
        .get('/doesnotexist')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.redirect;
          done();
        });
    });
  });
  describe("GET /todo", () => {
    it("should render the web page with the todolist present.", (done) => {
      chai.request(app)
        .get('/todo')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe("POST /todo", () => {
    it("should create a todo and redirect to the /todo html page.", (done) => {
      chai.request(app)
        .post('/todo')
        .set('Content-Type', 'application/json')
        .type('form')
        .send({ "newtodo": "value1" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.redirect;
          done();
        });
    });
  });
  describe("PUT /todo/:id", () => {
    it("should create a todo and redirect to the /todo html page.", (done) => {
      const id = 0;
      chai.request(app)
        .put('/todo' + id)
        .set('Content-Type', 'application/json')
        .type('form')
        .send({ "updatetodo": "value2" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.redirect;
          done();
        });
    });
  });
  describe("GET /todo/:id", () => {
    it("should get a single todo", (done) => {
      const id = 0;
      chai.request(app)
        .get('/todo/' + id)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should not get a todo that does not exist and should throw an error.", (done) => {
      const id = 100;
      chai.request(app)
        .get('/todo/' + id)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.text.should.eql('The id provided does not exist.');
          done();
      });
    });
  });
});
