import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function BioDataForm() {
    const navigate = useNavigate()
    const click = () =>{
        navigate('/scan-a-face')
    }
  return (
    <div className='AdminPage'>
        <div className="logo">

        </div>

        <h3 className='title'>Student Bio data Form</h3>
        <form action="">
            <div className="input-con">
                <label htmlFor="">Surname</label>
                <input type="text" />
            </div>

            <div className="input-con">
                <label htmlFor="">First Name</label>
                <input type="text" />
            </div>

            <div className="input-con">
                <label htmlFor="">Other name(s)</label>
                <input type="text" />
            </div>

            <div className="input-con">
                <label htmlFor="">Reg Number</label>
                <input type="text" />
            </div>

        <div className="input-con submit-btn" onClick={click}>
                <input type="submit" value='Next'  />
            </div>
            


        </form>
    </div>
  )
}

export default BioDataForm