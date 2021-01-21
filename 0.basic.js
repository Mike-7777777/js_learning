// use var in string
const place = 'World';
const greeting = "Hello";
console.log("%s %s", greeting, place);

// template literals are formed by using backticks
console.log(`${greeting} ${place}`);

// declare var in js

// Scope always larger, could use in all parts of an function, 
// can be use before declare(you can declare it in line 10, but call it in line 1, 
// when you do this, you will get a undefined), changeable.
// 作用域为整个函数内，可以在定义前使用（在第十行声明第一行就可用，但读取到的是undefined），可读写
var one = 1; 
// Scope is smaller and saver for using (can use in block), can only use it after declare, changeable.
// 作用域为块（大括号），只能在定义后使用，可读写
let two = 2;
// similar to 'let', read-only.
// 与let相似，但只读
const three = 3;
// suggest: only use const(default use) and let(use for loop).
// 建议：尽量使用const，循环中使用let，不使用var

// 模板字符串使用` `，在之中使用${ }包裹变量，在大括号内不仅可以包裹变量也可以对其进行操作

console.log(`${!true}`); // false
console.log(`${1+1}`); // 2

// Types in js: number, string, bool, date, function, array and objcet.
// *in js, there is only one type of number, which is float.
// special types: nan(not a number), null, undefined.
// checking type by using: typeof & instanceof (是否被这样创建), arrays is object.
const people = ["var1","var2"];
const one_constracted_from_value = 1; // or '= Number(1)'
const one_constracted_from_Number = new Number(1);

console.log(typeof people); // object
console.log(people instanceof Array); // ture
console.log(typeof one_constracted_from_value); // number
console.log(one_constracted_from_value instanceof Number); // false
console.log(typeof one_constracted_from_Number); // object
console.log(one_constracted_from_Number instanceof Number); // true

// types can change
// when using "==", js will coerce both sides to same type and compare them.
// when using "===", js will not coerce and compare directly.

// convert strings to numbers
console.log(
    // 使用parseInt时,特殊字符后的数字会被忽略
    `
    ${parseInt('100')} = 100
    ${parseInt("ABC")} = NaN
    ${parseInt('0xF')} = 15
    ${parseFloat('1.01')} = 1.01
    ${parseInt('1.5')} = 1
    ${parseInt('1+1')} = 1
    ${(150).toString()} = '150'
    ${(1.50).toString()} = '1.50'
    `
);

// exception, error, and throwing an exception
// dealing with uncaught exceptions by try&catch
// 与JAVA类似
try{
    criticalCode();
}
catch(ex){
    console.log('got an error');
}
// btw ending sentence with ';' is unnecessary in js.

