import React from "react";
import "./Navigaion.css";
import LiveImg from "../../assets/images/live2.gif";
import logo from "../../assets/images/logo.webp";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import MegaMenu from "../MegaMenu/MegaMenu";
import { Link } from "react-router-dom";

function Navigaion() {
  return (
    <header id="headerWrapper">
      <div className="top-bar">
        <Container>
          <Row className="align-items-center">
            <Col lg={9}>
              <div className="dateAndTime">
                <p>
                  <i className="fa-solid fa-location-pin"></i> ঢাকা
                  <i className="fa-solid fa-calendar"></i> মঙ্গলবার , ০১ নভেম্বর
                  ২০২২, ১৬ অগ্রহায়ণ ১৪২৯, ০৬ রবিউস সানি ১৪৪৪
                </p>
              </div>
            </Col>

            <Col lg={3}>
              <div className="topSocial">
                <ul>
                  <li className="fb-icon">
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="yt-icon">
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li className="tw-icon">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="link-icon">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="en-icon">
                    <a href="#">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                  <li className="liveImg">
                    <a href="#">
                      <img src={LiveImg} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* headerLogo start */}
      <div className="headerLogo p-lg-4">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </Col>
            <Col lg={9}></Col>
          </Row>
        </Container>
      </div>

      {/* headerLogo end */}
      {/* headerNav  Start*/}

      <div className="headerNav">
        <Container>
          <Row>
            <Col>
              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      <Link to="/">প্রচ্ছদ</Link>
                      <Link to="/national">জাতীয়</Link>
                      <Link to="/politics">
                        রাজনীতি <i className="fa-solid fa-caret-down"></i>
                        <ul className="dropDown">
                          <li>
                            <Link to={"/politics/awami-league"}>
                              আওয়ামী লীগ
                            </Link>
                          </li>
                          <li>
                            <Link to={"/politics/bnp"}> বিএনপি</Link>
                          </li>
                          <li>
                            <Link to={"/politics/others"}> অন্যান্য</Link>
                          </li>
                        </ul>
                      </Link>
                      <Link to="/international">
                        আন্তর্জাতিক <i className="fa-solid fa-caret-down"></i>
                        <ul className="dropDown">
                          <li>
                            <Link to={"/international/america"}>আমেরিকা</Link>
                          </li>
                          <li>
                            <Link to={"/international/europe"}> ইউরোপ</Link>
                          </li>
                          <li>
                            <Link to={"/international/australia"}>
                              অস্ট্রেলিয়া
                            </Link>
                          </li>
                          <li>
                            <Link to={"/international/asia"}> এশিয়া</Link>
                          </li>
                          <li>
                            <Link to={"/international/africa"}> আফ্রিকা</Link>
                          </li>
                          <li>
                            <Link to={"/international/middle-east"}>
                              মধ্যপ্রাচ্য
                            </Link>
                          </li>
                        </ul>
                      </Link>
                      <Link to="/economy">
                        অর্থনীতি <i className="fa-solid fa-caret-down"></i>
                        <ul className="dropDown">
                          <li>
                            <Link to={"/economy/commercial"}>কর্পোরেট</Link>
                          </li>
                        </ul>
                      </Link>
                      <Link to="/sports">
                        খেলা <i className="fa-solid fa-caret-down"></i>
                        <ul className="dropDown">
                          <li>
                            <Link to={"/sports/cricket"}> ক্রিকেট </Link>
                          </li>
                          <li>
                            <Link to={"/sports/football"}> ফুটবল </Link>
                          </li>
                          <li>
                            <Link to={"/sports/other"}> অন্যান্য </Link>
                          </li>
                        </ul>
                      </Link>
                      <Link to="/entertainment">বিনোদন</Link>
                      <Link to="/countries">
                        সারাদেশ <i className="fa-solid fa-caret-down"></i>
                        <ul className="dropDown">
                          <li>
                            <Link to={"/countries/dhaka"}>ঢাকা</Link>
                          </li>
                          <li>
                            <Link to={"/countries/chattogram"}>চট্টগ্রাম</Link>
                          </li>
                          <li>
                            <Link to={"/countries/khulna"}>খুলনা</Link>
                          </li>
                          <li>
                            <Link to={"/countries/rajshahi"}>রাজশাহী</Link>
                          </li>
                          <li>
                            <Link to={"/countries/sylhet"}>সিলেট</Link>
                          </li>
                          <li>
                            <Link to={"/countries/barishal"}>বরিশাল</Link>
                          </li>
                          <li>
                            <Link to={"/countries/rangpur"}>রংপুর</Link>
                          </li>
                          <li>
                            <Link to={"/countries/mymensingh"}>ময়মনসিংহ</Link>
                          </li>
                        </ul>
                      </Link>
                      <Link to="/lifestyle">লাইফস্টাইল</Link>
                      <Link to="/photo-story">ছবির গল্প</Link>
                      <Link to="/video">ভিডিও গ্যালারি</Link>
                      <Link className="mega" to="#link">
                        সব <i className="fa-solid fa-bars"></i>
                        <div className="megaMenuWrapper">
                          <MegaMenu />
                        </div>
                      </Link>
                    </Nav>
                    <div className="search ms-3">
                      <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
      {/* headerNav end*/}
    </header>
  );
}

export default Navigaion;
