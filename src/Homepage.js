import React from 'react'

import Footer from './Footer'
import firstimg from './images/img1.jpg'
import prod1 from './images/prod1.jpg'
import prod2 from './images/prod2.jpg'
import prod3 from './images/prod3.jpg'
import prod4 from './images/prod4.jpg'
import prod5 from './images/prod5.jpg'
import prod6 from './images/prod6.jpg'
import prod7 from './images/prod7.jpg'
import prod8 from './images/prod8.jpg'
import prod9 from './images/prod9.jpg'
import profpic from './images/1.jpg'
import { RiWhatsappFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'

const Homepage = () => {
    return (
        <div>
            <div className="carsoul">
                <img src={firstimg} alt='carsoul img'></img>
            </div>
            <div className='applynow'>
                <div id='heading'>APPLY NOW</div>
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
            </div>
            <div className="contactus">
                <div className='contacttext'>
                    <h1>Contact Us</h1>
                    <p>(By filing this form, Our custoer service person will contact you within 2hrs)</p>
                </div>

                
                    {/* <div><label>Enter Name:</label>
                        <input type="text"></input></div>
                    <div>
                        <label>Enter Email:</label>
                        <input type="email"></input>
                    </div>
                    <div>
                        <label>Enter Phone Number:</label>
                        <input type="phone"></input></div>
                    <div>
                        <label>Message:</label>
                        <input type="textbox"></input>
                    </div>
                    <div>
                        <a href='#'><button type='submit'>Submit</button></a>
                    </div> */}
 <form class="row g-3">                 
   <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=" Eg: 1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Eg: Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose</option>
      <option>Tamil Nadu</option>
      <option>Delhi</option>
      <option>Kerala</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

                


            </div>

            <div className='aboutus'>

                <div className='heading'><span>About us</span></div>
                <img src={profpic} alt='mypic'></img>





                <div className='abtus'>
                    <p>This is My Bank app developed by Soundar Raj.I am passionate about development.I am a both hard and smart worker . I love to learn the new things.
                        About this app: This app is a banking which is build for users to perform all type of functions in banking
                        This was developed mainly to reduce the work of users by standing in a line in the app.By this feature itself user can create account , get account statement , apply loan cards and insurances
                        I am looking forward to my intern period</p>
                    <p>National Electronic Fund Transfer (NEFT)

                        National Electronic Funds Transfer (NEFT) is a nation-wide payment system facilitating one-to-one funds transfer. Under this Scheme, individuals, firms and corporates can electronically transfer funds from any bank branch to any individual, firm or corporate having an account with any other bank branch in the country participating in the Scheme. Individuals, firms or corporates maintaining accounts with a bank branch can transfer funds using NEFT. Even such individuals who do not have a bank account (walk-in customers) can also deposit cash at the NEFT-enabled branches with instructions to transfer funds using NEFT. However, such cash remittances will be restricted to a maximum of Rs.50,000/- per transaction. NEFT, thus, facilitates originators or remitters to initiate funds transfer transactions even without having a bank account. Presently, NEFT operates in hourly batches - there are twelve settlements from 8 am to 7 pm on week days (Monday through Friday) and six settlements from 8 am to 1 pm on Saturdays.</p>
                    <p>Real Time Gross Settlement (RTGS)

                        RTGS is defined as the continuous (real-time) settlement of funds transfers individually on an order by order basis (without netting). 'Real Time' means the processing of instructions at the time they are received rather than at some later time; 'Gross Settlement' means the settlement of funds transfer instructions occurs individually (on an instruction by instruction basis). Considering that the funds settlement takes place in the books of the Reserve Bank of India, the payments are final and irrevocable. The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is 2 lakh. There is no upper ceiling for RTGS transactions. The RTGS service for customer's transactions is available to banks from 9.00 hours to 16.30 hours on week days and from 9.00 hours to 14:00 hours on Saturdays for settlement at the RBI end. However, the timings that the banks follow may vary depending on the customer timings of the bank branches.</p>
                </div>

            </div>
            <div className='footersec1' id='footsec'>
                <a className='footersecitems'>RBI Retail direct portal</a>
                <a className='footersecitems'>Block ATM Card</a>
                <a className='footersecitems'>Customer Request and Complaint</a>
                <a className='footersecitems'>Banking Forms</a>
                <a className='footersecitems'>Linking of Pan with Aadhar</a>
                <a className='footersecitems'>General Insurance document</a>
                <a className='footersecitems'>RBI FastTag</a>
                <a className='footersecitems'>Salary Account</a>
                <a className='footersecitems'>NRI Services</a>
                <a className='footersecitems'>Fair Landing</a>
                <a className='footersecitems'>Demat Account</a>
                <a className='footersecitems'>Customer care</a>
                <a className='footersecitems'>Complaint Register</a>
                <a className='footersecitems'>Loans Section</a>
                <a className='footersecitems'>Savings Account</a>
                <a className='footersecitems'>Fixed Deposit</a>
                <a className='footersecitems'>Recurring Deposit</a>
                <a className='footersecitems'>Cumulative Returns</a>
                <a className='footersecitems'>Interest Rates</a>
                <a className='footersecitems'>Account Closure</a>

            </div>
            {/* <Footer/> */}


        </div>


    )
}
export default Homepage