'use strict'

const Template = require("@11ty/eleventy/src/Template");
const TemplateRender = require("@11ty/eleventy/src/TemplateRender");

function BinarioADecimal(num) {
  // tu codigo aca
  let bin = num.split("").reverse();
  let decim = 0;
  for(let i=0 ; i<bin.length; i++) {
    decim += bin[i] * (2 ** i)
  }
  return decim;
}

console.log(BinarioADecimal(11011));

function DecimalABinario(num) {
  // tu codigo aca
  /*let y = parseInt(num, 2);
  return y; */
  let rest = num;
  let binar = [];
  while (rest > 0) {
    binar.unshift(rest%2);
    rest = Math.floor(rest/2)
  }
  return binar.join("");
  
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}