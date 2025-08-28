
import '../Icons/style.css'
import { FaInstagram, FaWhatsapp, FaFacebookSquare   } from "react-icons/fa";

export default function Icons(){
    return(
        <div className='icons'>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram/></a>
        <a href='/https://web.whatsapp.com'><FaWhatsapp /></a>
        <a href='/https://www.instagram.com'><FaFacebookSquare /></a>
        </div>
    )
}