import React from 'react'
import { useState } from 'react'

export default function AddCar() {
    const [brand, setBrand] = useState('')
    const [isPending, setIsPending] = useState('false')
  return (
    <div>
        <h1>Addcar</h1>
    <form>
        <label>
            Brand:
            <input type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}/>
        </label>
        <label>
            Model:
            <input type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)} />
        </label>
        <label>
            Year:
            <input type="number"
            value={brand}
            onChange={(e) => setBrand(e.value.target)} 
            />
        </label>
        <label>
            HP:
            <input type="number"
            value={brand}
            onChange={(e) => setBrand(e.value.target)}
             />
        </label>
        <label>
            Fuel:
            <input type="text"
            value={brand}
            onChange={(e) => setBrand(e.value.target)}
             />
        </label>
        <label>
            Consumption:
            <input type="number"
            value={brand}
            onChange={(e) => setBrand(e.value.target)}
            />
        </label>                                
    </form>
    {!isPending && <button>Add Car</button>}
    {isPending && <button>loading</button>}
    </div>       
)
}
