/*You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.

All async functions have following interface

type Callback = (error: Error, data: any) => void
type AsyncFunc = (
   callback: Callback,
   data: any
) => void
Your sequence() should accept AsyncFunc array, and chain them up by passing new data to the next AsyncFunc through data in Callback.

Suppose we have an async func which just multiple a number by 2

const asyncTimes2 = (callback, num) => {
   setTimeout(() => callback(null, num * 2), 100)
}
Your sequence() should be able to accomplish this

const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)
asyncTimes4((error, data) => {
   console.log(data) // 4
}, 1)
Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

Follow up

Can you solve it with and without Promise?

yu

*/
function sequence(funcs){
  function next(callback,input,i){
    if(i=== funcs.length){
    return   callback(undefined,input);
    }
    funcs[i]((err,data)=>{
      if(err) return callback(err);
      next(callback,data,i+1);
    }, input)
    
    
  }
  return function (callback,input){
    next(callback,input,0);
  }
}
