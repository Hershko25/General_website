import '../Css/Button.css';
import '../Css/HeroSection.css';

export default function HeroSection() {
  return (
      <div className="hero-container" >
        <h1 >New Adventure</h1>
        <p >What are you waiting for?</p>
        <button  className="btns btn--outline btn--large">Get Started</button>
        <button className="btns btn--primary btn--large" ButtonSize='btn--large' >Watch Now</button>
      </div>
  )
}
