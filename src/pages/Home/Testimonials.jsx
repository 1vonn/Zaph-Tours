import './home.css';
import cardImg from "../../assets/card.jpg";
const Testimonials = () => {
    return(
        <section className='testimonials'>
            <h2 className='testimonial-title'>Testimonials</h2>
<div className='testimonial-list'>
    <div className='testimonial-list-item'>
        <p className='description'>This was the first time i had travelled with Zaph tours.The company
        specializes in expert led cultural tours in Kenya</p>
        <div className='card-img'>
        <img src={cardImg} alt='image' width="100px" height="100px"></img>
        </div>
        <h2 className='testimonial-name'>Evyonn Mwangi</h2>
       
    </div>
    <div className='testimonial-list-item'>
        <p className='description'>This was the first time i had travelled with Zaph tours.The company
        specializes in expert led cultural tours in Kenya</p>
        <div className='card-img'>
        <img src={cardImg} alt='image' width="100px" height="100px"></img>
        </div>
        <h2 className='testimonial-name'>Cynthia Mwangi</h2>
       
    </div>
    <div className='testimonial-list-item'>
        <p className='description'>This was the first time i had travelled with Zaph tours.The company
        specializes in expert led cultural tours in Kenya</p>
        <div className='card-img'>
        <img src={cardImg} alt='image' width="100px" height="100px"></img>
        </div>
        <h2 className='testimonial-name'>Annastasia Kisasa</h2>
        
    </div>
</div>
        </section>
    )
}
export default Testimonials;