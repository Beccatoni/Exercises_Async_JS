// 2. Create a function that takes a callback and executes it after 3 seconds using `setTimeout`.

function randomFun(callback){
    setTimeout(()=>{
        callback();
    },3000)
}


const callbackFun = () =>{
    console.log('God is good all the time!')
}
randomFun(callbackFun)

