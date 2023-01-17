import React from 'react'


import { Footer,Blog,Possibility,Whatproj1,Header} from './Containers'
import {Navbar , Brand ,CTA,Feature} from './components'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
         
          <Navbar />
          <Header/>
        </div>
        
        <Brand />
        <Whatproj1/>
        <Feature/>
        <Possibility />
        <CTA/>
        <Blog />
        <Footer />

    </div>
  )
}

export default App