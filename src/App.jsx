import React from "react"
import homeBackground from "./assets/backgroundHome.webp"
import Hero from "./component/Hero"
import Header from "./component/Header"
import { Helmet } from "react-helmet"
import Footer from "./component/footer"


function App() {

  return (
    <>
    <Helmet>
      <title> {`Restaurant | Home`}</title>
      <style>
        {`
          body {
            background :  url("${homeBackground}") no-repeat center bottom;
            background-size : contain;    
          }
        `}
      </style>
    </Helmet>
      <Header selected="home"/>
      <Hero />
      <Footer />
    </>
  )
}


export default App
