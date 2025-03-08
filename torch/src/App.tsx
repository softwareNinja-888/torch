import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { FeatureOne } from './components/FeatureOne'
import { FeatureTwo } from './components/FeatureTwo'
import { Testimonals } from './components/Testimonials'

function App() {

  return (
    <>
      <div className="bg-primary h-full mb-[1000px] max-w-screen">
        <Header/>
        <Hero/>
        <Benefits/>
        <FeatureOne/>
        <FeatureTwo/>
        <Testimonals/>
      </div>

    </>
  )
}

export default App
