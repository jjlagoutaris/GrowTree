import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import bitcoinIllustration from "../../assets/bitcoinIllustration.png";
import "./Header.scss";

const Header = () => {
  return (
    <Container fluid className="header">
      <Row className="header-row">
        <Col className="app__flexColumn header-left-container">
          <div className="header-top-btn">
            <div className="header-top-btn-left app__flexCenter">SAVE 75%</div>
            <div className="header-top-btn-right app__flexCenter">
              during the Black Friday weekend
            </div>
          </div>
          <h1 className="app__h1 header-left-header">Fastest & Safest Crypto Platform Guaranteed</h1>
          <p className="header-subtext">Buy and sell cryptocurrencies. Trusted by 10M wallets with over $30 billion in transactions.</p>
          <Button className="header-try-btn">Try for FREE <FaRegArrowAltCircleRight/></Button>
        </Col>
        <Col className="app__flexCenter header-right-container">
          <img
            src={bitcoinIllustration}
            alt="bitcoin illustration"
            className="header-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
