import HeroImage from "/Hero.png"
import "./styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <img src={HeroImage} alt="Hero" className="heroImage" />
      <div className="heroContent">
        <h1>GRAFIX</h1>
      </div>
    </section>
  )
}
