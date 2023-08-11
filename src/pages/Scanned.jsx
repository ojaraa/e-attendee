import React from 'react'
import { useNavigate } from 'react-router-dom'
import scan2 from '../assets/scan2.png'
function Scanned() {
    const navigate = useNavigate()
    const click = () =>{
        navigate('/')
    }
  return (
 
    <div className='scanPage'>
        <h3 style={{textTransform:'capitalize', marginBottom:'1rem', fontSize:'1.4rem'}}>Successful!!</h3>
        <p className='para'>You are successfully registered and addded to the face template</p>

        <div className="scan-box">
            {/* <div className="scan-circle"> */}
                <img src={scan2} alt="" />
            {/* </div> */}
        </div>

        <button style={{marginTop:'4rem'}} onClick={click}>Back to home</button>
    </div>
  )
}

export default Scanned