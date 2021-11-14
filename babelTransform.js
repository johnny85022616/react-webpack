var babel = require("@babel/core");

var es6Code = "let x = n => n + 1";
console.log(es6Code);

var reactCode = `var reactCode = ()=>{var a = 1 ; return (<></>)}`

var es6CodeToEs5Code = babel.transform(es6Code, {
    presets: ["@babel/preset-env"]
  }).code;

var reactCodetoEs5Code = babel.transform(reactCode , {
  presets: ["@babel/preset-react"]
}).code

var promiseCode = "const promisCode = ()=>{return new Promise((resolve,reject)=>{})}"
var es6PromiseCodeToEs5Code = babel.transform(promiseCode, {
  presets: ["@babel/preset-env"]
}).code;


console.log(es6PromiseCodeToEs5Code);
