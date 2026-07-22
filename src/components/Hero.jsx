import './Hero.css'

function Hero() {
  return (
    <section className="hero">
     <img src="/spag2.png" alt="AE Cups coffee" className="spag-img" />
      <div className="hero-text">
        <h1 className="hero-title">Fuck "U" Spag</h1>
        <p className="hero-subtitle">Dished to perfection</p>
        <button className="hero-cta">Go to Menu</button>
      </div>
    </section>
  )
}

export default Hero