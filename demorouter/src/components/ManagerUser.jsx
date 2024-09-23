import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ManagerUser() {
  const location = useLocation();
  console.log(location);
  console.log("user name", location.state);
  
  return (
    <div>
      <h2>User Name: {location.state.userName}</h2>
    </div>
  )
}
