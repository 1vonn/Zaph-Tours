import Hero from "./Hero";
import About from "./About";
import Destinations from "./Destinations";
import Testimonials from "./Testimonials";
import Signup from "./Signup";
import './home.css'
const Home = () => {
    return(
        <section className="home">
            <Hero/>
            <About/>
            <Destinations/>
            <Testimonials/>
            <Signup/>
            </section>
    )
}
export default Home;