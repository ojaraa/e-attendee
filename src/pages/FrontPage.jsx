import React from 'react'
import '../components/styling/style.css'
import { useNavigate } from 'react-router-dom'
function FrontPage() {
    const navigate = useNavigate()
    const admin = () =>{
        navigate('/admin-login')
    }

    const data = () =>{
        navigate('/bio-form')
    }

    const scan = () =>{
        navigate('/scan-a-face')
    }
  return (
    <div className='homepage'>
        <h1>E-ATTENDEE</h1>
        <p>A platform for student attendance using facial recognition authentication</p>

        <div className="user-start-page">
            <div className="box-grid">
                <div className="box" onClick={admin}>
                    <h4>Admin Login</h4>
                </div>

                <div className="box" onClick={data}>
                    <h4>Add Student bio data</h4>
                </div>

                <div className="box" onClick={scan}>
                    <h4>Scan a face</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontPage