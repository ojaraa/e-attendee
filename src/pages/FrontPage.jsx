import React from 'react'
import '../components/styling/style.css'
function FrontPage() {
  return (
    <div className='homepage'>
        <h1>E-ATTENDEE</h1>
        <p>A platform for student facial recognition authentication</p>

        <div className="user-start-page">
            <div className="box-grid">
                <div className="box">
                    <h4>Admin Login</h4>
                </div>

                <div className="box">
                    <h4>Add Student bio data</h4>
                </div>

                <div className="box">
                    <h4>Scan a face</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontPage