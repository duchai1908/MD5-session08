import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import TopCards from '../../components/sections/dashboard/top-card/index.jsx'
import SecondLine from '../../components/sections/dashboard/second/index.jsx'

export default function Dashboard() {
  return (
    <div className='p-[16px]'>
        <h1>Dashboard</h1>
        <TopCards/>
        <SecondLine/>
    </div>
  )
}
