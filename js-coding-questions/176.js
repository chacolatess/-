// ?? -> nullish coalescing
// in js arrays , functions and alll thise thing consdider as a object here 
function undefinedtoNull(arg){
  //in js arrays and functions consider as an object here insted of that thing by means 
  // so non object structure will be came here the thing instead 
  // 
  if(type of arg!=="object" || arg===""){
    return arg ?? null;
    // here the retirn statement arh snd that thing non objects shpuld return null when its left handed when its was right handed null or undefined
    
  }
  for (const [key,value] of Object.entries(arg)){
    // returns the arrays of key value pairs 

    if(arg[key] === undefined){
      arg[key] =null;
    }
    else {
      arg[key] = undefinedtoNull(value);
    }
    
  }
  return arg;
  
}
