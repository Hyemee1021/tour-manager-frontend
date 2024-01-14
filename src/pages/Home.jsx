import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
const Home = () => {
  return (
    <>
      <Container>
        <section>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"For your perfect getaways"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  What is your perfect travel{" "}
                  <span className="highlight">for this memmory?</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur facere ad modi ab ipsum ducimus molestiae harum
                  pariatur sapiente maxime.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-3">
                <video src={heroVideo} alt="" controlsList="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            {/* search bar */}
            <SearchBar />
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;
