import React from 'react'
import Navbar from './components/navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'
import BannerText from './components/banner/BannerText'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <main className='overflow-x-hidden'>
     
     <UpdateFollower
     mouseOptions={{
      backgroundColor:'white',
      zIndex:999,
      followSpeed:1,
     }}
     >
     <Navbar/>
     <Hero/>
     </UpdateFollower>
     <UpdateFollower
     mouseOptions={{
      backgroundColor:'black',
      zIndex:999,
      followSpeed:1,
     }}
     >
 <Services/>
 <Banner/>
 <BannerText/>
 <Blogs/>
 <Footer/>
     </UpdateFollower>
    
    </main>
  )
}

export default App
