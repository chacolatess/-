function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    let iSwaped= false;
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]]= [arr[j] , arr[i]];
        iSwaped= true;
        
      }
      
    }
    if(!iSwaped){
      break;
    }
  }
  
}
