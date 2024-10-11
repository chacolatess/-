import {useRef,useEffect} from 'react';
export function useClickoutside(callback){
const outsideClickRef= useRef(null);
  useEffect(()=>{
  const handleClickoutside=(e)=>{
    if(outsideClickRef.current && ! outsideClickRef.current.contains(e.target)){
    callback();
    }
        }
    document.addEventListener('mousedown',handleClickoutside);
       
       return ()=>{
    document.removeEventListener('mousedown',handleClickoutside);
            } 
  },[callback]);
  return outsideClickRef;
}
