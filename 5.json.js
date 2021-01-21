const book = {
    title:"1984",
    author:"george orwell",
    isAvailable:false,
}
// object to json
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
// multi-iten array to json
const booklist = [
    book,
    book,
    {title:"other", author:"other"}
]
const bljason = JSON.stringify(booklist)
console.log(bljason)

// json to obj
const json = '{"title":"1984","author":"george orwell","isAvailable":false}'
const book_ = JSON.parse(json)
console.log(book_.title)