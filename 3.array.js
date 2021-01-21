// create arrays
let arr = ["A",true,1]
let arr_ = Array(3)
// when creating arrays, 'new' can be ignored. 
// -Nicholas C. Zakas, Professional JavaScript for Web Developers
// let arr3 = new Array(5) 
arr[3]="offset"
arr_[3]="offset_"
console.log(
    // add values
    arr[3], // offset
    arr_[3], // offset_
    // pop & push
    //remove the last one and return it
    arr.pop(), // offset
    arr.push("end","return len"), // 5
    arr[3], // end 
    arr[4], // return len
    // shift & unshift
    arr.shift(), // A
    arr.unshift('front','return len_'), // 6
    // concat
    arr_.concat(['tails','___']) // [ <3 empty items>, 'offset_', 'tails','___' ]
)

// Traverse in js
const object = [1,2]
for (const iterator of object) {
    console.log(iterator)
}