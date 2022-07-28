

import { Bus } from "./Bus"
import { Car } from "./Car"
import { Truck } from "./Truck"
import './Counter.css'



export const Counter = () => {


  return (
    <>
      <div className="counter">
        <Car/>
        <Bus/>
        <Truck/>

      </div>
      
    </>
  )
}