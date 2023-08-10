import React from 'react'
import '../components/styling/style.css'
import face from '../assets/img.png'
function AdminSignUp() {
  return (
    <div className='AdminPage'>
       <div className='top'>

           <img src={face} alt="" />
          
       </div>

       <div className="bottom">
      
            <form action="">
            <h3>Admin Sign Up</h3>

                <div className="input-con">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>

                <div className="input-con">
                    <label htmlFor="">E-mail</label>
                    <input type="text" />
                </div>

                <div className="input-con">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>

                <div className="input-con">
                    <label htmlFor=""> Confirm Password</label>
                    <input type="password" />
                </div>

                <div className="input-con submit-btn">
                    <input type="submit" value='Continue' />
                </div>


            </form>
       </div>
    </div>
  )
}

export default AdminSignUp