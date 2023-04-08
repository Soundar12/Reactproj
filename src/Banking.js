import React from 'react'

const Banking =()=> {
    return (
           <div className='banking'>
           <div className='bankitems'>
            <li>Payments/Transfer</li>
            <ul>
                <li>Funds Transfer</li>
                <li>Intra-Bank Transfer</li>
                <li>RTGS/NEFT</li>
                <li>Credit Card(VISA)</li>
                <li>IMPS Payments</li>
            </ul>
           </div>
           <div className='bankitems'>
            <li>E-Deposits</li>
            <ul>
                <li>E-TDR/e-STDR</li>
                <li>E-TDR under income tax saving scheme</li>
                <li>RTGS/NEFT</li>
                <li>E-Annutity Deposits Scheme</li>
                <li>E-Recurring Deposits</li>
            </ul>
           </div>
           <div className='bankitems'>
            <li>E-Tickets</li>
            <ul>
                <li>Home loan Provosonal Certificate</li>
                <li>Credit card visa bill pay</li>
                <li>Pay tax using cum card</li>
                <li>SSC and UPSC Online Fee Collection</li>
                <li>Mutual Funds Invstments</li>
            </ul>
           </div>
           <div className='bankitems'>
            <li>Tax credit Statement</li>
            <ul>
                
                <li>Form 26A</li>
                <li>Pension Slip Enquiry</li>
                <li>TDS Enquiry</li>
                <li>PRTC and PETC enquiry</li>
                <li>Prfessional payment</li>
            </ul>
           </div>
           </div>
    )
}

export default Banking