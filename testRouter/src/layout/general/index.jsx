import React from 'react'
import { Link } from 'react-router-dom'

export default function GeneralIndex() {
  return (
    <div>
        <h1>Index General</h1>
        <Link to="/admin">Admin</Link>
    </div>
  )
}
