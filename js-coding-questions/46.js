function once(func){
  let result;
  let iscalled=false;
  return function(...args){
    if(!iscalled){
      called=true;
      result=func.apply(this,args);
    }
  }
    return result;
}
