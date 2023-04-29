import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gpuMining from '../../assets/gpu-mining.svg';
import './AdSection.scss';

const AdSection = () => {
  return (
    <section className="ad-section">
      <Container>
        <Row>
          <Col md={6}>
            <img className='kfacts-illustration' src={gpuMining} alt='GPU mining crypto' />
          </Col>
          <Col md={6}>
            <div className="content">
              <h2>Why you should choose KryptoKoin</h2>
              <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, or fake reviews.</p>
              <Button>Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AdSection;
