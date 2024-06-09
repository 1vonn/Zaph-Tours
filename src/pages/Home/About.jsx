import './home.css';
import kenyaImg from "../../assets/hero-zaph.jpg";
const About = () => {
    return(
        <section className="about-content">
            <div className='about-description'>
                <h2 className='title'>About Us</h2>
                <p className='about-description-p'>No matter what sort of trip you are thinking of,you can be sure we have
                the expertise to make planning it a breeze. So, whatever your travel needs,we are here to help</p>
                <button className='contact-us'>Contact US</button>
            </div>
            <div className='about-image'>
                <img src={kenyaImg} alt='image' width="400px"></img>
            </div>
        </section>
    )
}
export default About;