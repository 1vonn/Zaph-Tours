import './contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
const Contact = () => {
    return(
        <section className='contact-page'>
            <div className='contact-content'>
                <div className='contact-form'>
                <form className='contact-form' >
                <h2 className='title-contact'>Contact Form</h2>
                <input className='form-input'
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <input className='form-input'
                    type="text"
                    placeholder="Enter your message"
                    required
                />
                <button type="submit" className='submit-button'>Sign Up</button>
            </form>
                </div>
                <div className='contact-information'>
                    <h2 className='contact-title'>Contact Information</h2>
                    <div className='icon'>
                        <a href=''><MdEmail /></a>
                    </div>
                    <p className='email-address'>zaphtours@gmail.com</p>
                    <div className='icon'>
                        <a href=''><FaPhoneAlt /></a>
                    </div>
                    <p className='phone-number'>+254,798778928</p>

                </div>
                <div className='office'>
                    <h2 className='title'>Office hours</h2>
                    <div className='icon'><a href=''><Ri24HoursLine /></a></div>
                    <p className='working-hours'>Monday to Friday</p>
                    <p className='working hours'>From 8pm to 6pm</p>
                </div>
                <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50826.27875226353!2d37.13277308443656!3d-0.7071941761026365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang&#39;a%2C%20Kenya!5e0!3m2!1sen!2snl!4v1717908411081!5m2!1sen!2snl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>
            </div>
        </section>
    )
}
export default Contact;