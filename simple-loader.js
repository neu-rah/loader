/*
 * simply loads and executes a js script into a context
 * works like and include for js
 *
 *    require('loader')(global)("test.js");
 *
 * MIT license.
 *
 * Rui Azevedo (Feb2015) ruihfazevedo@gmail.com
 */

var fs=require("fs");
var vm=require("vm");

function loader(ctx) {
  ctx=vm.isContext(ctx)?ctx:vm.createContext(ctx);
  return (function(file) {
    vm.runInContext(fs.readFileSync(file, 'utf-8').toString(),ctx,{"filename":file});
  }).bind(ctx);
}

module.exports=loader;
