import './trip.css';
import honeymoonImg from "../../assets/honeymoon.jpg";
import familyImg from "../../assets/family.jpg";
import cultureImg from "../../assets/culture.jpg"
import culinaryImg from "../../assets/culinary.jpg";
import ecotoursImg from "../../assets/ecotours.jpg";
import retreatImg from "../../assets/retreats.jpg";
import beachImg from "../../assets/beach.jpg";
const Triptpes = () => {
    return(
        <section className='trip-types'>
            <div className='trip-types-list'>
                <div className='tip-type-item'>
                    <img src={honeymoonImg} alt='image' width="400px" height="400px"></img>
                    <h2 className='package-name'>Honey moon</h2>
                    <p className='package-description'>Honeymoon vacations are romantic getaways for newlyweds to celebrate their marriage. These trips
                         often involve luxurious accommodations, intimate settings, and activities designed for couples.</p>
                    <p className='pricing'>Ksh.130,000</p>
                </div>
                <div className='tip-type-item'>
                    <img src={familyImg} alt='image' width="400px" height="400px"></img>
                    <h2 className='package-name'>Family Adventure</h2>
                    <p className='package-description'>Family adventure vacations are tailored to families looking for activities that are fun and engaging for all ages. These trips can include outdoor activities like hiking,
                         zip-lining, kayaking, and visits to amusement parks or historical sites. </p>
                    <p className='pricing'>Ksh.95,000</p>
                </div>
                <div className='tip-type-item'>
                    <img src={cultureImg} alt='image' width="400px" height="400px"></img>
                    <h2 className='package-name'>Culture</h2>
                    <p className='package-description'>Cultural tours are designed to immerse travelers in the local culture, traditions, and history of
                         a destination. These tours often include visits to historical landmarks, museums, traditional performances, and artisan workshops.</p>
                    <p className='pricing'>Ksh.85,000</p>
                </div>
                <div className='tip-type-item'>
                    <img src={culinaryImg} alt='' width="400px" height="400px"></img>
                    <h2 className='package-name'>Culinary arts</h2>
                    <p className='pricing'>These tours often include visits to local markets, cooking classes, wine tastings, and dining experiences at renowned restaurants. Participants get to taste traditional dishes, 
                        learn about the culinary heritage, and sometimes meet local chefs and food producers.</p>
                        <p className='pricing'>Ksh.80,000</p>
                </div>
                <div className='tip-type-item'>
                    <img src={ecotoursImg} alt='image' width="400px" height="370px"></img>
                    <h2 className='package-name'>Ecotours</h2>
                    <p className='package-description'>Eco tours focus on sustainable travel that minimizes the impact on the environment. These tours emphasize the conservation of natural habitats and the promotion of biodiversity. Activities might include wildlife viewing,
                         hiking in protected areas, and staying in eco-friendly accommodations.</p>
                    <p className='pricing'>Ksh.90,000</p>
                </div>
                <div className='tip-type-item'>
                    <img src={retreatImg} alt='image' width="400px" height="410px"></img>
                    <h2 className='package-name'>Retreat</h2>
                    <p className='package-description'>Wellness retreats are designed to rejuvenate the mind, body, and spirit. These retreats often take place in serene locations and 
                        offer activities like yoga, meditation, spa treatments, and holistic therapies</p>
                    <p className='pricing'>Ksh.100,000</p>
                </div>
                <div className='tip-type-item'>
                        <img src={beachImg} alt='image' width="400px" height="400px"></img>
                    <h2 className='package-name'>Coastal areas</h2>
                    <p className='package-description'>Beach holidays are perfect for those looking to relax by the sea. These vacations typically involve staying at coastal resorts or beachfront properties where travelers can enjoy 
                        sunbathing, swimming, water sports, and exploring nearby coastal towns.</p>
                    <p className='pricing'>Ksh.120,000</p>
                </div>
            </div>
        </section>
    )
}
export default Triptpes;