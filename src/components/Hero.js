import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>Design your <br/>
            comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore nemo veniam voluptate. Tempore consequuntur, necessitatibus vel facere delectus, eaque obcaecati veniam, sit laudantium possimus nulla iure? Aliquid, ea doloribus.
        </p>
        <Link to="/products" className="btn hero-btn" aria-label="see our products now">
            shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" aria-label="nice table" className="main-img"/>
        <img src={heroBcg2} alt="person at work" aria-label="person at work" className="accent-img"/>
      </article>
    </Wrapper>  
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-2);
    font-size: 1rem;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: var(--clr-primary-2);
    background: var(--clr-primary-8);
  }
  .hero-btn:hover, .hero-btn:focus{
    background: var(--clr-primary-6);
    color:var(--clr-white) ;
   }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color: var( --clr-primary-2);
      background: var(--clr-primary-8);
    }
    .hero-btn:hover, .hero-btn:focus{
      background: var(--clr-primary-6);
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
