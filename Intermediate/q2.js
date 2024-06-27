// 12. Create an `async` function that performs three asynchronous operations sequentially and logs the result of each.

const tasks = async() =>{
const op1 = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve('This is operation one')
    })
})
const op2 = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve('This is operation two')
    })
})
const op3 = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve('This is operation three')
    })
})

const result1 = await op1 
const result2 = await op2
const result3 = await op3
console.log(`${result1}\n${result2}\n${result3}`)

}

tasks();

