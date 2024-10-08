function clz32(num){
  num=num >>> 0;
  return num ? 32-num.toString(2).length :32;
  
}
