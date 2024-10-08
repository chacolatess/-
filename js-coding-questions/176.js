// ?? -> nullish coalescing
// in js arrays , functions and alll thise thing consdider as a object here 
function undefinedToNull(arg){
  //in js arrays and functions consider as an object here insted of that thing by means 
  // so non object structure will be came here the thing instead 
  // 
  if(typeof arg!=="object" || arg===null){
    return arg ?? null;
    // here the retirn statement arh snd that thing non objects shpuld return null when its left handed when its was right handed null or undefined
    
  }
  for (const [key,value] of Object.entries(arg)){
    // returns the arrays of key value pairs 

    if(arg[key] === undefined){
      arg[key] =null;
    }
    else {
      arg[key] = undefineToNull(value);
    }
    
  }
  return arg;
  
}
