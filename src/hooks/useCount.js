import { useState } from "react"


export const useCount = (initialValue = 0) => {

  const [counter, setcounter] = useState(initialValue);

  const increment = ()=>{
    setcounter(counter + 1)
    
  }

  const decrement = ()=>{
    if(counter === 0) return;
    setcounter(counter - 1)
  }

  const reset = ()=>{
    setcounter(initialValue=0)
  }

  return{ 

    counter,
    increment,
    decrement,
    reset
  }
    
  
}
