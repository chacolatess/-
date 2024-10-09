/*
The firstBadVersion function is designed to find the first "bad" version in a sequence of versions using a binary search approach. The function accepts a checking function isBad, which determines if a specific version is bad. It returns a closure that takes a version number and identifies the first bad version in the range from 0 to that version.

*/

function FirstBadVersion(isBad){
  return (version)=>{
  let start =0;
  let end = version ;
    while(start<=end){
      let mid = Math.floor((start+end)/2)
      if(isBad(mid)){
      end=mid-1;
        
      }
      else{
        start= mid+1;
      }
    }
    return start<=version ? start:-1;
    }
}
