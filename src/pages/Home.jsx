import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Bean Buzz - Your daily dose of freshly brewed happiness. Serving the best artisanal coffee in town."
      />
      <Hero />
      <Menu />
    </>
  )
}

export default Home