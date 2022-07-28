import { useCount } from "./hooks/useCount"
import bus from "./assets/img/bus.png"
import './Bus.css'
import { useEffect } from "react"

export const Bus = () => {

  
  const {counter, increment,decrement,reset}=useCount(
    Number(localStorage.getItem('counter1'))
    )

    useEffect(() => {
      localStorage.setItem('counter1', counter)
    },[counter])

    

 
  return (
    <>
      <div className="bus">
        
        <img src={bus} alt="" className="img-bus" onClick={ increment }/>
        <h1>Autobuses: { counter }</h1>
        <br />

        <button onClick={ increment }>+1</button>
        <button onClick={ reset }>reset</button>
        <button onClick={ decrement }>-1</button>

      </div>
    </>
  )
}
