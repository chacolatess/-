const invoke = (fn,...args) => typeof fn ==="function" && fn(...args);
const once = (fn) => {
  let called = false; // Track if the function has already been called
  return (...args) => {
    if (!called) {
      called = true;
      invoke(fn, ...args);
    }
  };
};

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
