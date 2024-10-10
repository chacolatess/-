function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++){
      let insert=arr[i];
      let curr=arr[j];
      if(curr> insert){
        [arr[i],arr[j]= [arr[j],arr[i]];
        
      }
    }
  }
  
}
