import React from 'react'
import { useNavigate } from 'react-router-dom'
import scan1 from '../assets/scan1.png'
function Scan() {
    const navigate = useNavigate()
    const click = () =>{
        navigate('/scanned')
    }
  return (
    <div className='scanPage'>
        <h3>Complete your registration by scanning your face</h3>

        <div className="scan-box">
            <div className="scan-circle">
                <img src={scan1} alt="" />
            </div>
        </div>

        <button onClick={click}>Scan my face</button>
    </div>
  )
}

export default Scan