
import React from 'react'
import Footer from './Footer'
import prod1 from './images/prod1.jpg'
import prod2 from './images/prod2.jpg'
import prod3 from './images/prod3.jpg'
import prod4 from './images/prod4.jpg'
import prod5 from './images/prod5.jpg'
import prod6 from './images/prod6.jpg'
import prod7 from './images/prod7.jpg'
import prod8 from './images/prod8.jpg'
import prod9 from './images/prod9.jpg'
const Services=()=>{
    return (
<div className='applynow'>
                {/* <div id='heading'>APPLY NOW</div> */}
                <div className='applynow1'>

                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod1} alt='homeloan'></img></div>
                        <a href='#'>Home Loan </a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod2} alt='vehicleloan'></img></div>
                        <a href='#'>Vehicle Loan</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod3} alt='personalloan'></img></div>
                        <a href='#'>Personal loan</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod4} alt='lieinsurance'></img></div>
                        <a href='#'>Life Insurance</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod5} alt='healthinsurance'></img></div>
                        <a href='#'>Health Insurance</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod6} alt='generalinsurance'></img></div>
                        <a href='#'>General Insurance</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod7} alt='credcard'></img></div>
                        <a href='#'>Credit Card</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod8} alt='Debitcard'></img></div>
                        <a href='#'>Debit Card</a>
                    </div>
                    <div className='prod1'>
                        <div className='prod1img'> <img src={prod9} alt='Emicard'></img></div>
                        <a href='#'>EMI Card</a>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
    )

}

export default Services

