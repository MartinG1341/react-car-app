import React from 'react'
import styles from './Garage.module.css'
import { useEffect, useState } from 'react'

export default function Garage() {
  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/cars')
    .then((res) => res.json)
    .then((data) => {
      setCars(data)
    })
  }, [])


  return (
    <div>
    <p>Garage</p>
    <h1>{cars.length} car</h1>
    </div>
  )
}
