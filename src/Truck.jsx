import { useCount } from "./hooks/useCount"
import truck from "./assets/img/truck.png"
import './Truck.css'
import { useEffect } from "react"


export const Truck = () => {
  const {counter, increment,decrement,reset}=useCount(
    Number(localStorage.getItem('counter2'))
    )

    useEffect(() => {
      localStorage.setItem('counter2', counter)
    },[counter])

  return (
    <>
      <div className="truck">
        
        <img src={truck} alt="" className="img-truck" onClick={ increment }/>
        <h1>Camiones: { counter }</h1>
        <br />

        <button onClick={ increment } >+1</button>
        <button onClick={ reset } >reset</button>
        <button onClick={ decrement } >-1</button>

      </div>
    </>
  )
}
