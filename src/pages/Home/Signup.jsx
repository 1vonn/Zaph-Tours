import './home.css';

const Signup = () => {
    

    return (
        <div className="signup-container">
            <h2>Sign up for Zaph Tours Newsletter</h2>
            <p>Get weekly email updates on safaris and adventures.</p>
            <form className='form-content' >
                <input className='form-input'
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className='submit-button'>Sign Up</button>
            </form>

        </div>
    
    )
}
export default Signup;