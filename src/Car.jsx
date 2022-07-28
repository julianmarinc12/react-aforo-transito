import { useCount } from "./hooks/useCount"
import car from "./assets/img/car.png"
import './Car.css'
import { useEffect } from "react"





export const Car = () => {

 const initialValue = Number(localStorage.getItem('counter'))
  const {counter, increment,decrement,reset}=useCount(initialValue)

    useEffect(() => {
      localStorage.setItem('counter',counter )
    },[counter])

  return (
    <>
      <div className="car" >
        
        <img src={car} alt="" className="img-car" onClick={ increment }/>
        <h1>Carros: { counter }</h1>
        <br />

        <button onClick={ increment } >+1</button>
        <button onClick={ reset } >reset</button>
        <button onClick={ decrement } >-1</button>

      </div>
    </>
    
      
  )
}
