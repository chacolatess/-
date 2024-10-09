function decode(message){
  let i=0,j=0;
  let ans ='';
  while(message[i] && message[i][j]){
 ans+=   message[i+1] ? i++:i--;
    j++;
    }
  return ans;
}
