
import { useEffect } from 'react'
import './App.css'
import Aos from 'aos'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
 useEffect(()=>{
  Aos.init({
    duration:800,
    once:true,
  })
 },[])

  return (
    <>
     
    </>
  )
}

export default App
