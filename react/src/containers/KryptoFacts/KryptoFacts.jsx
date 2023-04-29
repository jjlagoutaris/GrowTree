import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GoGraph, GoGlobe } from 'react-icons/go'
import { BsPersonFill } from 'react-icons/bs'
import gpuMining from '../../assets/gpu-mining.svg';
import './KryptoFacts.scss'

import { AdSection } from '../../components'

const KryptoFacts = () => {
  const iconSize = 50;
  return (

    // <AdSection />
    <Container fluid id='kfacts'>

      <div id="kfacts-numbersbanner">
        <div className="kfacts-block">
          <div className="kfacts-icon-container">
            <GoGraph size={iconSize} className='kfacts-icon'/>
          </div>
          <div className="kfacts-numbers-container">
            <div className="kfacts-numbers-header app__h3">$30B</div>
            <div className="kfacts-numbers-subtext">
              Digital Currency Exchanged
            </div>
          </div>
        </div>
        <div className="kfacts-block">
          <div className="kfacts-icon-container">
            <BsPersonFill size={iconSize}/>
          </div>
          <div className="kfacts-numbers-container">
            <div className="kfacts-numbers-header app__h3">10M+</div>
            <div className="kfacts-numbers-subtext">
              Trusted Wallet Investors
            </div>
          </div>
        </div>
        <div className="kfacts-block">
          <div className="kfacts-icon-container">
            <GoGlobe size={iconSize}/>
          </div>
          <div className="kfacts-numbers-container">
            <div className="kfacts-numbers-header app__h3">195</div>
            <div className="kfacts-numbers-subtext">
              Countries Supported
            </div>
          </div>
        </div>
      </div>

      <div id="kfacts-ad-container">
        <div className="kfacts-illustration-container">
          <img className='kfacts-illustration' src={gpuMining} alt='GPU mining crypto' />
        </div>
        <div className="kfacts-ad-text-container">
          <div className="kfacts-ad-text-header app__h2">Why you should choose KryptoKoin</div>
          <div className="kfacts-ad-text-description">Experience the next generation cryptocurrency platform. No financial borders, extra fees, or fake reviews.</div>
          <div className="kfacts-ad-text-btn-container">
            <button className="kfacts-ad-text-btn">Learn More</button>
          </div>
        </div>
      </div>


    </Container>
  )
}

export default KryptoFacts

{/* <Row id="kfacts-numbersbanner">
        <Col md={4} className="kfacts-numbersbanner-slot">
          <Col className='kfacts-numbersbanner-icon-container'>
            <GoGraph size={iconSize}/>
          </Col>
          <Col className='kfacts-numbersbanner-numbers-container'>
            <Row className='kfacts-numbersbanner-numbers-header app__h3'>$30B</Row>
            <Row className='kfacts-numbersbanner-numbers-subtext'>Digital Currency Exchanged</Row>
          </Col>
        </Col>
        <Col md={4} className="kfacts-numbersbanner-slot">
          <Col className='kfacts-numbersbanner-icon-container'>
            <BsPersonFill size={iconSize}/>
          </Col>
          <Col className='kfacts-numbersbanner-numbers-container'>
            <Row className='kfacts-numbersbanner-numbers-header app__h3'>10M+</Row>
            <Row className='kfacts-numbersbanner-numbers-subtext'>Trusted Wallet Investors</Row>
          </Col>
        </Col>
        <Col md={4} className="kfacts-numbersbanner-slot">
          <Col className='kfacts-numbersbanner-icon-container'>
            <GoGlobe size={iconSize}/>
          </Col>
          <Col className='kfacts-numbersbanner-numbers-container'>
            <Row className='kfacts-numbersbanner-numbers-header app__h3'>195</Row>
            <Row className='kfacts-numbersbanner-numbers-subtext'>Countries Supported</Row>
          </Col>
        </Col>
      </Row> */}