import React from 'react'
import { useState } from 'react'
import styles from './AddCar.module.css'

export default function AddCar() {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [horsepower, setHorsepower] = useState('')
    const [fuel, setFuel] = useState('')
    const [consumption, setConsumption] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(brand, model, year, horsepower, fuel, consumption)
        const car = {
            brand,
            model,
            year,
            horsepower,
            fuel,
            consumption
        }

        setIsPending(true)

        await fetch('http://localhost:3001/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })

        setIsPending(false)

    }
  return (
    <div className={styles.page}>
        <h1>Addcar</h1>
    <form onSubmit={handleSubmit} className={styles.form}> 
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
        {!isPending && <button>Add Car</button>}
        {isPending && <button>Adding</button>}                                
    </form>
    </div>       
)
}
