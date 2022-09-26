'use strict'

var sayHello = 'Hello';

function     person() {
    var first = 'David';
    var last = 'Shariff';
        
    function firstName() {
        return first;
    } 
    function lastName() {
        return last;
    } 
    alert(sayHello + ' ' + firstName() + ' ' + lastName());
}

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa

var test = obj.prop.getFullname;

console.log(test());                    