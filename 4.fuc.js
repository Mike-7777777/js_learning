// fuctions

// In addition of _ and $, name can't include any other special characters.
// lower camel case
function name_(params) {
    let a = params
    console.log('name fuction is being called.')
    return a
}

const variable_ = name_(1)

// arrow func
// arrow func dont have 'this' 'arguments' 'super' or 'new.target'
// 'this' in arrow func is parent's context.
// must be assigned to a variable, or immediately used
const add = (a,b) => a+b
const sub = (a,b) => {
    // big parantheses should be appear with 'return'
    return a - b
}
console.log(add(1,2), sub(1,2))