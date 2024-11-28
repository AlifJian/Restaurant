import React from "react"
import homeBackground from "./assets/backgroundHome.webp"
import Hero from "./component/Hero"
import Header from "./component/Header"
import { Helmet } from "react-helmet"


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
            height : 100vh;
            overflow : hidden;       
          }
        `}
      </style>
    </Helmet>
      <Header selected="home"/>
      <Hero />
    </>
  )
}


export default App
