// 示例1
var test = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
test.then(() => {
  console.log(3)
})
console.log(4)

// 问题分析：因为Promise的构造函数是同步执行的，而.then()是异步执行的，所以打印信息是：1 - 2 - 4 - 3


// 示例2
var test = new Promise((resolve, reject) => {
  resolve("success1")
  reject("error")
  resolve("success2")
})
test.then((res) => { console.log(res) })
  .catch((err) => { console.log(err) })

// 问题分析：Promise的状态一经改变，就不会再发生变化，构造函数里的3条不同处理逻辑只会执行第1条并相应更改状态，打印的信息是：success1


// 示例3
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    console.log(err)
  })
  .then((res) => {
    console.log(res)
  })

// 问题分析：因为直接执行的是resolve(1)，所以下面执行的是第一个.then()，没有reject()所以不会执行.catch()，继续执行第二个.then()，打印的信息是：1 - 2


// 示例4
var test = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("once")
    resolve("success")
  }, 1000)
})
var start = Date.now()
test.then((res) => {
  console.log(res, Date.now() - start)
})
test.then((res) => {
  console.log(res, Date.now() - start)
})

// 问题分析：因为一个Promise对象只能被修改一次状态，所以第二次执行.then()时test已经变为了resolve状态，相当于同步执行了第二个.then的内容。输出为：once - 1000 - 1001


// 示例5
var pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success")
  }, 1000)
})
var pr2 = pr1.then((res) => {
  throw new Error("error!")
})
console.log("pr1", pr1)
console.log("pr2", pr2)
setTimeout(() => {
  console.log("pr1", pr1)
  console.log("pr2", pr2)
}, 2000)

// 问题分析：因为pr2的构造中使用了pr1.then()，构造时会执行，但pr1中有1s的定时器；pr2构造中会报错，所以报提示信息；
// 流程是：1. 构造pr2时 pr1.then()开始执行，但延时1s，接下来打印信息pr1,pr2，都是出于pending状态 
//        2. 1s后pr1进入resolve状态，同时使得pr2构造报错，打印报错信息，pr2进入reject状态
//        3. 2s后再次打印pr1和pr2，输出pr1(resolve状态)，pr2(reject状态)
// 输出内容为:  pr1(pending状态)，pr2(pending状态) - error! - pr1(resolve状态)，pr2(reject状态)