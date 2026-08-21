import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <h2>Carly</h2>
        <div className={styles.links}>
            <Link to='/'>Home</Link>
            <Link to='/garage'>Garage</Link>
            <Link to='/add-car'>Add Car</Link>
        </div>
    </nav>


  )
}
