let nombre = process.env.NOMBRE || 'with out name'
let web = process.env.MI_WEB || 'i dont have a web'

console.log( `hola ${nombre}`);
console.log( `mi web es  ${web}`);