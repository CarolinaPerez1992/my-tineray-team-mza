import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="h90 glassform grow green">
            <h1>My Tinerary</h1>
            <h3>The best of trips is the next one </h3>
            <ul>
                <Link className="link" to="/hotels"><li className="btn" href="">Cities</li></Link>
                <Link className="link" to="/cities"><li className="btn" href="">Hotel</li></Link>
            </ul>

    </div>

  )
}
