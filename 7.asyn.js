// method of dealing asyn problem
//  1. promise obj

// put the ops(function) need to run in 'new Promise(*put ops here*)'
// if ops succeeds, execute codes in .then(*here*) -> which is callback function
// if ... fails, execute codes in .catch(*here*) -> which is callback function

// way to use promise obj is - write a function in promise, and use it with .then .catch
// a function can be written in promise, which means it will **return a Promise object**.

// Model
// read an article -> if it's longer than 50 pages or shorter than 5 pages, throw error.
function read_(page) {
  // return a Promise object
  // function resolve will executes when function read_ succeeds.
  // function reject will executes when it has error.
  return new Promise((resolve, reject) => {
    if (page >= 50) {
      // unsucceeds, call reject
      let error = "This article is too long.";
      // parameters will pass to outside function through reject
      reject(error);
    } else if (page <= 4) {
      // unsucceeds, call reject
      let error = "This article is too short.";
      reject(error);
    } else {
      let time = 200 * page;
      // succeeds, and call resolve
      setTimeout(resolve, time);
    }
  });
}
// burn an article (don't do it in real life)
function burn_(page) {
  return new Promise((resolve, reject) => {
    if (page >= 40) {
      // unsucceeds, call reject
      let error = "This article is too long.";
      // parameters will pass to outside function through reject
      reject(error);
    } else if (page <= 5) {
      // unsucceeds, call reject
      let error = "This article is too short.";
      reject(error);
    } else {
      let time = 200 * page;
      // succeeds, and call resolve
      setTimeout(resolve("finish burning"), time);
    }
  });
}

// Controller
read_(5)
  // .then is used to run the function.
  .then(
    // no input, cuz read_ didn't give resolve function any parameter,
    // callback function of read_
    () => {
      console.log("v1 - " + "finish reading");
      // chaining, return another promise object
      return burn_(5);
    }
  )
  // This .then will be called after the upper .then finish
  .then(
    // response is used to get the input, which is the result of burn_() here.
    (response) => {
      // pass string 'finish burning' as a result of runing burn_(),
      // and get the result.
      console.log("v1 - " + response); // 'finish burning'
    }
  )
  // .catch(callback) === .then(null, callback)
  .catch((reason) => {
    console.log("v1 - error! " + reason);
  });

// 2. Async/Await **recommended**
// you still need promise objs, but could use them in diff way.

// with .then .then .then
function run() {
  burn_(6).then((res) => {
    console.log("v2 - " + res);
  });
}
run();

// with async&await
async function run_() {

  // with let res
  let res = await burn_(6);
  console.log("v3 - " + res);

  // with try catch finally
  try {
    console.log("v4 - read_ start");
    // change inpout value from 5 to 3, you can get the error message.
    // add a "let" or "const" to get&store the more
    // detailed error/succeed message from read_().
    // let response = await read_(5)

    // or just do this below
    // console.log("direct log - " + await read_(3))

    // or just never save the return value, cuz when read_ runs good, it dont have one.
    await read_(5);
  } catch (e) {
    // console.log(response)
    console.log("v4 - error from read_");
  } finally {
    console.log("v4 - read_ end");
  }
  
  // example of bug
  console.log(burn_(6)); // Promise { 'finish burning' }
  // add 'await' if you get output like this ↑
}
run_();
