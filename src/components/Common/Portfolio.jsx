import React, { useState, useEffect } from 'react'
import '../Assets/CSS/Background.css'
import PortfolioItem from './PortfolioItem'
import data from '../../data/data.json'

const Portfolio = (props) => {
  const [portfolioData, setPortfolioData] = useState([])
  useEffect(() => {
    setPortfolioData(data.portfolio)
  }, [portfolioData])
  return (
    <section
      className="page-section bg-light"
      id="portfolio"
      ref={props.section}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
        </div>
        <div className="row" style={{ backgroundColor: 'white' }}>
          {portfolioData.map((item, index) => {
            return <PortfolioItem {...item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Portfolio
