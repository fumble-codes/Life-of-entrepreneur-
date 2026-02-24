import { Navbar } from "./components/ui/Navbar"
import { Hero } from "./sections/Hero"
import { TheProblem } from "./sections/TheProblem"
import { SkillsGrid} from "./sections/SkillsGrid"
import { Pricing } from "./sections/Pricing"      
import { FinalCTA } from "./sections/FinalCTA"
import { Footer } from "./components/ui/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheProblem />
      <SkillsGrid/>
      <Pricing/>
      <FinalCTA/> 
      <Footer/>
  
    </>
  )
}

export default App