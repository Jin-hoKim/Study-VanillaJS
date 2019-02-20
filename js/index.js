
const arrDays = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat"];

for (let day of arrDays)
{
  console.log(day);
}

const obj = {
  name: "JH",
  age: 37,
  gender: "Male"
};

for( let prop in obj )
{
  console.log(prop, obj[prop]);
}

// js - function
function sayHello( name )
{
  console.log( "Gretting, ", name, "!" );
  console.log( `Hello, ${name}` );
}

sayHello("JHK");

// js - function return
function sayHello2( name )
{
  return `Hello, ${name}!!`;
}

console.log(sayHello2("JHK"));

const calculator = {
  plus: function(a,b)
  {
    return a + b;
  },
  minus: function(a,b)
  {
    return a-b;
  },
  divider: function(a,b)
  {
    return a/b;
  }
}

console.log( `plus: ${calculator.plus(5,2)},\nminus: ${calculator.minus(5,2)},\ndivider: ${calculator.divider(6,3)}` );

const title = document.getElementById("title");
title.innerHTML = "Hello, JS (from JS)";
title.style.color = "red";
console.log( title );
console.dir( title );

const title2 = document.querySelector("#title");
title2.innerHTML = "Hello2";
