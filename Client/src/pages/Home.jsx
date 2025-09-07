import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='bg-gradient-to-b from-[black] via-[cyan] to-[yellow]'>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </div>
  )
}

export default Home
