import React from 'react'
import { useState } from 'react'

export default function AddCar() {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [horsepower, setHorsepower] = useState('')
    const [fuel, setFuel] = useState('')
    const [consumption, setConsumption] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)

    }
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
            value={model}
            onChange={(e) => setModel(e.target.value)} />
        </label>
        <label>
            Year:
            <input type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)} 
            />
        </label>
        <label>
            HP:
            <input type="number"
            value={horsepower}
            onChange={(e) => setHorsepower(e.target.value)}
             />
        </label>
        <label>
            Fuel:
            <input type="text"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
             />
        </label>
        <label>
            Consumption:
            <input type="number"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            />
        </label>                                
    </form>
    {!isPending && <button onSubmit={handleSubmit}>Add Car</button>}
    {isPending && <button>loading</button>}
    </div>       
)
}
