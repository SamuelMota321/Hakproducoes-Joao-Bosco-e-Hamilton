import Header from './components/Header/index'
import Banner from './components/Banner/index'
import ImageCarousel from './components/ImageCarousel/index'
import CountdownTimer from './components/CountdownTimer/index'
import Highlight from './components/Highlight/index'
import VideoSection from './components/VideoSection/index'
import Sectors from './components/Sectors/index'
import Box from './components/Box/index'
import Footer from './components/Footer/index'
import { carousel1, carousel2 } from './data/images'

import './styles/index.css'



function App() {

  return (
    <>

      <Header />
      <Banner />
      <CountdownTimer />
      <ImageCarousel images={carousel1}/>
      <Highlight />
      <VideoSection />
      <Sectors />
      <Box />
      <ImageCarousel  images={carousel2} title={'Espaço AABB'}/>
      <VideoSection />
      <Footer />
      
    </>
  )
}

export default App
