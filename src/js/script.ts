//styles
import "../less/style.less";

//game
import "./menu"; 
// import txt from './filename.txt';
// import txt from 'raw-loader!./filename.txt';
// const txt = require('raw-loader!./filename.txt')
// console.log(txt);
// import * as fs  from 'fs';
// import { readFileSync } from 'fs'; 
// const file = readFileSync('./filename.txt', 'utf-8');
// console.log('To je plik',file);
// var x = require('fs').readFileSync('./filename.txt', 'utf8');
// var fs = require('fs');
// const x = require('./filename.txt')
// const file2 = fs.readFileSync('./filename.txt', 'utf-8');
var x = require('./data.json');
console.log('To je plik',x);
// fetch('./filename.txt')
//   .then(response => response.json())
  // .then(data => console.log('kk',data));
  // //  const file = readFileSync('./filename.txt', 'utf-8');
// console.log('To je plik',file)
// var fs = require('fs');
// const fs = typeof window !== 'object'
//     ? null
//     : eval('require("fs")')
// fetch('https://kubam97-api.herokuapp.com')
//   .then(response => response.json())
//   .then(data => console.log('kk',data));
//  fetch('https://kubam97-api.herokuapp.com', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify({id: 345, ft: 'FF'}) // body data type must match "Content-Type" header
//   });
  
// const file = readFileSync('./filename.txt', 'utf-8');
// console.log('To je plik',file);
//starts playing background music
import { unmuteBackgroundSound } from "./menu/sound";
unmuteBackgroundSound(); 
