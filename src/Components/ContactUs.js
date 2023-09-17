import {React, useState} from 'react'
import '../Styles/ContactUs.css'
import youtubeIcon from '../Assets/Images/youtubeIcon.png'
import telegramIcon from '../Assets/Images/telegram-icon.png'
import whatsAppIcon from '../Assets/Images/whatsapp-icon.png'
import facebookIcon from '../Assets/Images/facebook-icon.png'
import instagramIcon from '../Assets/Images/instagram-icon.png'
import clipboardCopy from 'clipboard-copy'

function ContactUs() {
    const [message, setMessage] = useState(false)

    const copyNumber = () => {
        clipboardCopy(6281137198);
        console.log("text copied");
        // alert('Text copied to clipboard!'); // Show an alert after successful copy
        console.log('message is true');
        setMessage(true)
        setTimeout(() => {
            setMessage(false); // Hide the message after 30 seconds
            console.log('message is false');
        }, 30000); // 30 seconds in milliseconds
    }

  return (
    <div className='contact-us-main-container'>
        <div className='info-container'>
            <h1 className='info-heading'>info@ <span className='span-text'> Tanvika Solutions </span> </h1>
            <p className='info-heading'> Contact No:{' '}
                <span className="span-text2" onClick={copyNumber}>
                    6281137198
                </span>{' '}
            </p>
            {message ? <p className='info-heading'>Mobile number Copied to clipboard</p> : "" }
        </div>
        <div className='icons-container'>
            <a  href="https://wa.me/8978400607" target='_blank'><img className='icons' src={whatsAppIcon} alt="" /></a>
            <a  href=""><img className='icons' src={youtubeIcon} alt="" /></a>
            <a  href=""><img className='icons' src={instagramIcon} alt="" /></a>
            <a  href=""><img className='icons' src={facebookIcon} alt="" /></a>
            <a  href="https://t.me/YourTelegram@UNooB" target='_blank'><img className='icons' src={telegramIcon} alt="" /></a>
        </div>
    </div>
  )
}

export default ContactUs