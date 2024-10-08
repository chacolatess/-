const invoke = (fn,...args) => typeof fn ==="function" && fn(...args);
const once = (fn) => (...args)=> {
  invoke(fn,...args);fn=null;
}

const wrap = port =>{
  const fascade ={};
  fascade.postMessage=(message,reply)=>{
    port.postMessage(
      {message,reply}
    )
  }
  port.onMessage =({message,reply})=>{
    invoke(fascade.onMessage,message,once(reply))
  }
  return fascade;
}
class BetterChannel{
  constructor(){
    const {port1,port2}= new SomeChannel();
    this.port1= wrap(port1);
    this.port2= wrap(port2);
  }
}
