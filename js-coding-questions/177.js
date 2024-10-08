function ObjectGroupBy(items,callbackfn)
{
const map = Object.create(null);
  if(!Array.isArray(items))
  {
    throw new Error(" should contain iterables");
    
  }
for(let i= 0;i<=items.length){
  let value = items[i];
  let key = calback(value);
  if(map[key] === undefined)
  {
    map[key]=[];
  }
  map[key].push(value);
}
  return map;
  
  
}
