'use strict';

var should = require('should');
var loader;
var load;

describe('simple-loader', function() {
  describe('module load', function() {
    it('should return a setup function', function() {
			loader=require("simple-loader");
			loader.should.be.type('function');
		});
	});
  describe('loader', function() {
    it('should return context load function', function() {
      load=loader(global);
      load.should.be.type('function');
    });
  });

  describe('load', function() {
    it('should load a javascript file into given context', function() {
			load("test/resources/included.js");
      ok.should.be.type('string');
      ok.should.match(/Ok var defined in included.js/);
		});
	});

});
