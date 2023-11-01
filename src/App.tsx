// import { useState } from 'react'
import FooterSection from './features/FooterSection'
import HeaderSection from './features/HeaderSection'
import NavbarSection from './features/NavbarSection'
import ServiceSection from './features/ServiceSection'
import TextSlider from './features/SliderSection'

function App() {
  return (
   <main>
      <HeaderSection />
      <NavbarSection />
      <TextSlider />
      <ServiceSection />
      <FooterSection />
   </main>
  )
}

export default App
