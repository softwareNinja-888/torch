import './index.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {

  return (
    <>
      <div className="bg-primary h-full mb-[1000px] max-w-screen">
        <Header/>
        <Hero/>
      </div>

    </>
  )
}

export default App
