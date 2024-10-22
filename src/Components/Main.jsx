import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}

export default Main