import {React, useState} from 'react'
import '../Styles/ContactUs.css'
import youtubeIcon from '../Assets/Images/youtubeIcon.png'
import telegramIcon from '../Assets/Images/telegram-icon.png'
import whatsAppIcon from '../Assets/Images/whatsapp-icon.png'
import facebookIcon from '../Assets/Images/facebook-icon.png'
import instagramIcon from '../Assets/Images/instagram-icon.png'
import clipboardCopy from 'clipboard-copy'

function ContactUs() {
    const [message, setMessage] = useState(false);
    const [emailMessage, setEmailMessage] = useState(false);


    const copyNumber = () => {
        clipboardCopy(6281137198);
        console.log("text copied");
        // alert('Text copied to clipboard!'); // Show an alert after successful copy
        console.log('message is true');
        setMessage(true)
        setTimeout(() => {
            setMessage(false); // Hide the message after 30 seconds
            console.log('message is false');
        }, 10000); // 30 seconds in milliseconds
    }

    const copyNumber2 = () => {
        clipboardCopy(8978400607);
        setMessage(true)
        setTimeout(() => {
            setMessage(false); // Hide the message after 30 seconds
            console.log('message is false');
        }, 10000); // 10 seconds in milliseconds
    }
    const copyEmail = () => {
        clipboardCopy("Tanvikasolutions23@gmail.com");
        setEmailMessage(true)
        setTimeout(() => {
            setEmailMessage(false); // Hide the message after 30 seconds
            console.log('message is false');
        }, 10000); // 10 seconds in milliseconds
    }

  return (
    <div className='contact-us-main-container'>
        <div className='info-container'>
            <p className='info-heading'>Address: Flat No: 437, Padmavathi plaza, KPHB main road, <br/> Kukatpally, Hyderabad. info@ <span className='span-text'> Tanvika Solutions </span> </p>
            <p className='info-heading'>Email: <span className='span-text2' onClick={copyEmail}> Tanvikasolutions23@gmail.com </span></p>
            {emailMessage ? <p className='message-text'>Email ID Copied to clipboard</p> : "" }
            <p className='info-heading'>Contact No: <span className='span-text2' onClick={copyNumber2}>8978400607</span> </p>
            <p className='info-heading'> Contact No:{' '}
                <span className="span-text2" onClick={copyNumber}>
                    6281137198
                </span>{' '}
            </p>
            {message ? <p className='message-text'>Mobile number Copied to clipboard</p> : "" }
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