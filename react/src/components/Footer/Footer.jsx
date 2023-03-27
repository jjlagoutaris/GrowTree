import React from "react";
import "./Footer.scss";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import mastercard from "../../assets/mastercard.png";
import bitcoin from "../../assets/bitcoin.png";
import visa from "../../assets/visa-logo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="footer-top">
        <Col>
          <img src={logo} alt="KryptoKoin logo" className="footer-logo" />
        </Col>
        <Col>
          <Stack
            gap="3"
            direction="vertical"
            className="footer-links-container"
          >
            <h3 className="app__title-small footer-links-header">
              Quick Links
            </h3>
            <Link className="footer-link" to={"/"}>
              Home
            </Link>
            <Link className="footer-link" to={"/Info"}>
              Info
            </Link>
            <Link className="footer-link" to={"/Features"}>
              Features
            </Link>
            <Link className="footer-link" to={"/Contact"}>
              Contact
            </Link>
          </Stack>
        </Col>
        <Col>
          <Stack
            gap="3"
            direction="vertical"
            className="footer-links-container"
          >
            <h3 className="app__title-small footer-links-header">Resources</h3>
            <Link className="footer-link">Download Whitepaper</Link>
            <Link className="footer-link">Smart Token</Link>
            <Link className="footer-link">Blockchain Explorer</Link>
            <Link className="footer-link">Crypto API</Link>
            <Link className="footer-link">Interest</Link>
          </Stack>
        </Col>
        <Col>
          <Row>
            <h3 className="app__title-large footer-payments-title">We accept the following payment methods</h3>
          </Row>
          <Stack
            gap="3"
            direction="horizontal"
            className="footer-payment-methods app__flexCenter"
          >
            <button className="footer-payment-method-container">
              <img
                src={visa}
                alt="visa logo"
                className="footer-payment-method-image"
              />
            </button>
            <button className="footer-payment-method-container">
              <img
                src={mastercard}
                alt="mastercard logo"
                className="footer-payment-method-image"
              />
            </button>
            <button className="footer-payment-method-container">
              <img
                src={bitcoin}
                alt="bitcoin logo"
                className="footer-payment-method-image"
              />
            </button>
          </Stack>
        </Col>
      </Row>
      <Row className="footer-bottom">
        <Col className="app__flexCenter footer-copyright">
          <p>©2023 KryptoKoin. All rights reserved. Site by <a href="https://johnlagoutaris.netlify.app">John Lagoutaris</a>.</p>
        </Col>
        <Col className="app__flexCenter footer-socials">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
          <FaLinkedin />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
