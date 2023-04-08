
import React from 'react'
import { RiWhatsappFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'

const Footer=()=>{
    return (
<div className='socmediaicons'>
                <p>Contract us through</p>
                <div className='icons'>

                    <RiWhatsappFill color='black' size='25px'></RiWhatsappFill>
                    <RiInstagramFill color='black' size='25px'></RiInstagramFill>
                    <RiLinkedinBoxFill color='black' size='25px'></RiLinkedinBoxFill>
                    <RiTwitterFill color='black' size='25px'></RiTwitterFill>
                </div>
                <p className='cpyright'>copyright@2022mybank.com</p>


            </div>
    )
}
export default Footer