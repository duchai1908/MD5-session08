import React, { useEffect } from 'react'
import { replace, useNavigate } from 'react-router-dom'

export default function DashBoard() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/admin/manager-user", {state :{userName: "Hihi username"}});
    // replace:true, 
  }

  useEffect(()=>{

  })
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handleRedirect}>Manager User</button>
    </div>
  )
}
