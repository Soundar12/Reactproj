import React from 'react'
import Footer from './Footer'

const Details=()=>{
    // var d=document.getElementByid('main');
    // console.log(d);
    return (
        
        <div className='details'>
        <table className='maintab' id='maintab'>
           <tr>
            <td>
            Account holder Name
                </td>
                <td>Soundar Raj</td>
           </tr>
           <tr>
            <td>
           Account balance
                </td>
                <td> INR 10000.00</td>
           </tr>
           <tr>
            <td>
           Branch Name
                </td>
                <td>Coimbatore</td>
           </tr>
           <tr>
            <td>
            IFSC Code
                </td>
                <td>KKNM8907</td>
           </tr>


            
        </table>
        <table className='sub'>
            <tr>
            <th>Date</th>
            <th>Details</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Balance</th>
            </tr>
         <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>100</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>16 MAR 2023</td>
            <td>GOOGL PAY</td>
            <td></td>
            <td>400</td>
            <td>6500</td>
            </tr>
            <tr>
            <td>10 MAR 2023</td>
            <td>PHONE PAY</td>
            <td>1000</td>
            <td></td>
            <td>6000</td>
            </tr>
            <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>100</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td></td>
            <td>5000</td>
            <td>8000</td>
            </tr>
            <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td></td>
            <td>340</td>
            <td>2000</td>
            </tr>
            <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>100</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>17 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>566</td>
            <td></td>
            <td>2000</td>
            </tr>
            <tr>
            <td>13 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>1000</td>
            <td></td>
            <td>200</td>
            </tr>
            <tr>
            <td>1 MAR 2023</td>
            <td>ATM WITHDRWAL</td>
            <td>1600</td>
            <td></td>
            <td>20000</td>
            </tr>



            
        </table>
        {/* <Footer/> */}
        </div>
        
    )
}
export default Details