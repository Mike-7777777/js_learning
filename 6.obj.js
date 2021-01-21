// create a obj
const human = {
    // properties
    name: 'me',
    len: 10,
    isAlive: true,

    // methods
    born: function(name){
        this.name = name
        this.isAlive = true
        return this
    },
    death: function(){
        this.isAlive = false
        return 'dead'
    }
}
// create a obj with new Object()
const being = new Object()
being.surname = 'two'
being.height = 175
being.isAlive = true

being.born = function(name){
    this.surname = name
    this.isAlive = true
    return this
}
being.kill = function(){
    this.isAlive = false
    return 'dead'
}
// 2 ways to access properties(attributes)
console.log(human.name, being['surname']); // me two
// acceess methods
console.log(human.born, being['born']); // [Function: born] [Function (anonymous)]
// use methods & prints obj by this
console.log(human.born('mike'), being['kill']()); // {...} dead
// prints global obj
console.log(function () {return this}());
// this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this