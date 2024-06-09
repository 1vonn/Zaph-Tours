import './home.css'
import mtkenyaImg from "../../assets/mtkenya.jpg";
import mtruweImg from "../../assets/mtruwe.jpg";
import nakuruImg from "../../assets/nakuru.jpg";
import tsavoImg from "../../assets/tsavo.jpg";
import nairobiImg from "../../assets/nairobi.jpg";
import mombasaImg from "../../assets/mombasa.jpg";
const Destinations = () => {
    return(
        <section className='destination'>
            <h2 className='title'>Perfect Holidays</h2>
            <div className='destination-list-items'>
            <div className='destination-list'>
                <img src={mtkenyaImg} alt='image' width='410px'></img>
                <h2 className='destination-place'>Mt.Kenya</h2>
                <p className='destination-description'>The second highest mountain in Africa after Mt.Kilimanjaro</p>
                <p className='destination-price'>Ksh.10,000</p>
            </div>
            <div className='destination-list'>
                <img src={mtruweImg} alt='image' width='410px'></img>
                <h2 className='destination-place'>Mt.Ruwenzori</h2>
                <p className='destination-description'>Mountain of moons. It has permanent snoow and glaciers near equator</p>
                <p className='destination-price'>Ksh.13,000</p>
            </div>
            <div className='destination-list'>
                <img src={nakuruImg} alt='image' width='410px'></img>
                <h2 className='destination-place'>Lake Nakuru</h2>
                <p className='destination-description'>Famous for its large flocks of flamingos and a sanctuary of rhinos.</p>
                <p className='destination-price'>Ksh.8,000</p>
            </div>
            <div className='destination-list'>
                <img src={tsavoImg} alt='image' width='410px' height="300px"></img>
                <h2 className='destination-place'>Tsavo Park</h2>
                <p className='destination-description'>Home to one of the largest game reserves in the world.</p>
                <p className='destination-price'>Lsh.12,000</p>
            </div>
            <div className='destination-list'>
                <img src={nairobiImg} alt='image' width='410px' height="290px"></img>
                <h2 className='destination-place'>Nairobi Park</h2>
                <p className='destination-description'>Proximity to a major capital city and has diverse range of wildlife.</p>
                <p className='destination-price'>Ksh.6,000</p>
            </div>
            <div className='destination-list'>
                <img src={mombasaImg} alt='image' width='410px' height="300px"></img>
                <h2 className='destination-place'>Coastal Kenya</h2>
                <p className='destination-description'>Pristine white sandy beaches and vibrant coral reefs.</p>
                <p className='destination-price'>Ksh.15,000</p>
            </div>
            </div>
        </section>
    )
}
export default Destinations;