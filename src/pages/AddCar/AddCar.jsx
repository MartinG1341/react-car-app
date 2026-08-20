import React from 'react'
import { useState } from 'react'

export default function AddCar() {
    cosnt [brand, setBrand] = useState('')

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
            <input type="number" />
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
    <button>Add Car</button>
    </div>       
)
}
