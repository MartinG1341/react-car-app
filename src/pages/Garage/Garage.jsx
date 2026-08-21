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

  return (
    <div className={styles.page}>
    <p>Garage</p>
    <h1>{cars.length === 0 ? "Don't have cars" : `${cars.lenght} ${cars.lenght === 1 ? 'car' : 'cars'}`} </h1>
    </div>
  )
}
