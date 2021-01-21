// method of dealing asyn problem
//  1. promise obj

// put the ops(function) need to run in 'new Promise(*put ops here*)'
// if ops succeeds, execute codes in .then(*here*) -> which is callback function
// if ... fails, execute codes in .catch(*here*) -> which is callback function

// way to use promise obj is - write a function in promise, and use it with .then .catch
// a function can be written in promise, which means it will **return a Promise object**.

// read an article -> if it's longer than 50 pages or shorter than 5 pages, throw error.
function read_(page) {
    // return a Promise object
    // function resolve will executes when function read_ succeeds.
    // function reject will executes when it has error.
    return new Promise((resolve, reject) => {
        if (page >= 50) {
            // unsucceeds, call reject
            let error = "This article is too long."
            // parameters will pass to outside function through reject
            reject(error)
        }else if(page <=4){
            // unsucceeds, call reject
            let error = "This article is too short."
            reject(error)
        }else{
            let time = 200 * page
            // succeeds, and call resolve
            setTimeout(resolve,time)
        }
    })
}
// burn an article (don't do it in real life)
function burn_(page) {
    return new Promise((resolve, reject) => {
        if (page >= 40) {
            // unsucceeds, call reject
            let error = "This article is too long."
            // parameters will pass to outside function through reject
            reject(error)
        }else if(page <=5){
            // unsucceeds, call reject
            let error = "This article is too short."
            reject(error)
        }else{
            let time = 200 * page
            // succeeds, and call resolve
            setTimeout(resolve("finish burning"),time)
        }
    })
}
read_(5)
    // .then is used to run the function.
    .then(
        // no input, cuz read_ didn't give resolve function any parameter, 
        // callback function of read_
        () => {
            console.log('finish reading');
            // chaining, return another promise object
            return burn_(5)
        }
    )
    // This .then will be called after the upper .then finish
    .then(
        // response is used to get the input, which is the result of burn_() here.
        (response) => {
        console.log(response);
        }
    )
    // .catch(callback) === .then(null, callback)
    .catch((reason) => {
        console.log('error! '+reason);
    })


// 2. Async/Await **recommended**
