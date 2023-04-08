import React from 'react'
import { Link } from 'react-router-dom'

const Personal=()=>{
    return (
        <>
        <div className='login'>
        <div><label>Enter User Name:</label>
                        <input type="text"></input></div>
                    <div>
                        <label>Enter Password      : </label>
                        <input type="password" style={{}}></input>
                    </div>
                    <div>
                    <Link to='/Details'><button type='submit'>Login</button></Link>                    </div>
                    
        </div>
        <div className='gapping'></div>
        {/* <Footer/> */}
        </>
    )
}
export default Personal