import React from 'react'
import { Container } from 'react-bootstrap'
import './Trading.scss'
import Form from '../../components/Form/Form'

const Trading = () => {
  return (
    <Container fluid id='trading'>

      <div className="trading-top">
        <h2 className='trading-top-header app__h2'>
          Check how much you can earn
        </h2>
        <p className='trading-top-description app__title-small'>Let’s check your hash rate to see how much you will earn today. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>

      <div className="trading-rate-calculator">
        <div className="trading-form">
          <Form />
        </div>
      </div>

      <div className="trading-cards">
        
      </div>
    </Container>
  )
}

export default Trading