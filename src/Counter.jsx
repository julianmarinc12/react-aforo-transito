
import { Bus } from "./Bus"
import { Car } from "./Car"
import { Truck } from "./Truck"
import { Aforotransito } from "./Name"
import './Counter.css'
import { By } from "./By"




export const Counter = () => {
  return (
    <>
      <div>
        <Aforotransito/>
      </div>
      <div className="counter">
        <Car/>
        <Bus/>
        <Truck/>
      </div>
      <div className="hecho">
        <By/>
      </div>
      
    </>
  )
}