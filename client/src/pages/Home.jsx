import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="bg-indigo-100">
        <Navbar />
        <div className="pt-20">
          <Hero />            
        </div>
        <Footer />
    </div>
  )
}
export default Home