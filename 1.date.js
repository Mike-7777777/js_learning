// Date object
const now = new Date(2021, 0, 19, 17, 37, 58)
// 默认输出GMT时间 即本地北京时间-8小时
console.log(now)
// 月从0开始
console.log(now.getMonth())
// getTime会返回从1970年1月1日的毫秒数
console.log(now.getTime())
// getDay会返回星期几(周日为0)
console.log(now.getDay())
// 当前的GMT时间
console.log(new Date())