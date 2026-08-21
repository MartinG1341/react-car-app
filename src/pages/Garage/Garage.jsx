import React from 'react'
import styles from './Garage.module.css'
import { useEffect, useState } from 'react'

export default function Garage() {
  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/cars')
    .then((res) => res.json())
    .then((data) => {
      setCars(data)
    })
  }, [])

  const handleDelete = async (id) => {
      id.preventDefault()
      await fetch(`http://localhost:3001/cars/${id}`,
        {
          method: 'DELETE'
        }
      )
  }

  return (
    <div className={styles.page}>
    <p>Garage</p>
    <h1>{cars.length === 0 ? "Don't have cars" : `${cars.length} ${cars.length === 1 ? 'car' : 'cars'}`} </h1>
    <div className={styles.carsGrid}>
    {cars.map((car) => (
      <div className={styles.carCard} key={car.id}>
        <h2>{car.brand} {car.model}</h2>
        <p>Year: {car.year}</p>
        <p>HP: {car.horsepower}</p>
        <p>Fuel: {car.fuel}</p>
        <p>Consumption: {car.consumption} L/100km</p>
        <button className={styles.deleteButton} onClick={() => handleDelete(car.id)}>Delete car</button>
      </div>
    ))}
  </div>
    </div>
  )
}
