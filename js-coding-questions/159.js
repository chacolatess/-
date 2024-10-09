function promisify(func){
  return function(...args){
    return new Promise(resolve,reject){
      const callbck =(err,data)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(data)
        }
      }
      func.apply(this,..args,callbck);
      
    }
  }
}
