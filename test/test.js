const request = require("supertest");
const express = require('express');
const assert = require("assert");
const application = require("../server");

describe('PUT', function () {
  it('should create new item quantity, description, and cost in vending machine', function (done) {
    request(application)
      .put('/api/vendor/items/:ItemId')
      .send({ description: 'snickers' ,cost: .80, quantity: 20})
      .expect(200)
      .expect(function  (response) {
        assert.equal(response.body,{ description: 'snickers' ,cost: .80, quantity: 20});
      })
      .end(done);
  })
})

describe('POST', function () {
  it('should add an item not already in the vending machine', function (done) {
    request(application)
      .put('/api/vendor/items')
      .send({ description: 'snickers' ,
              cost: 1.25, 
              quantity:10})
      .expect(200)
      .expect(function  (response) {
        assert.equal(response.body,{ description: 'snickers' , cost: 1.25, quantity:10});
      })
      .end(done);
  })
})


describe("GET /api/customer/items", function () {
  it("should return successfully all the items", function (done) {
    request(application)
     .get("/api/customer/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (response) {
        assert.equal(response.body,{ snickers : 5}, {cheetos: 3});
      })
      .end(done);
  })
})

describe("GET /api/vendor/money", function () {
  it("it should return a total of money accepted by the machine", function (done) {
    request(application)
      .get("/api/vendor/money")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (response) {
        assert.equal(response.body['fritos'], "sprite");
      })
      .end(done);
  })
})