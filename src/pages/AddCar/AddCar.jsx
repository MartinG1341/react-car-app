import React from 'react'

export default function AddCar() {
  return (
    <div>
        <h1>Addcar</h1>
    <form>
        <label>
            Brand:
            <input type="text" />
        </label>
        <label>
            Model:
            <input type="text" />
        </label>
        <label>
            Year:
            <input type="year" />
        </label>
        <label>
            HP:
            <input type="number" />
        </label>
        <label>
            Fuel:
            <input type="text" />
        </label>
        <label>
            Consumption:
            <input type="number" />
        </label>                                
    </form>
    </div>       
)
}
