// 11. Write a function that chains two Promises together, where the second Promise depends on the result of the first.
const promise = () =>{
    new Promise((resolve) => {
        resolve('I am the first');
    })
} 

promise()
    .then((data)=>{
        console.log(data);
        return 'I am the second'
    })
    .then(data2=>{
        console.log(data2);
    })