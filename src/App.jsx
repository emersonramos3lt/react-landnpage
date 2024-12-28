import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PricingSection from "./components/PricingSection"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"

const App = () => {
  return (
   <>
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <PricingSection />
    <Testimonials />
    <Footer />
   </>
  )
}

export default App