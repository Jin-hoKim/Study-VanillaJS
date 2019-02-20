
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



// console.log( arrDays );
