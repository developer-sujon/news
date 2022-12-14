// External Import
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LeadPhoto from "../../assets/images/budget-1654768200-1667242636.jpg";

// Internal Import
import "./Home.css";
import LazyLoader from "../../components/LazyLoader/LazyLoader";
import SelectForm from "../../components/SelectForm/SelectForm";
const VideoTab = lazy(() => import("../../components/VideoTab/VideoTab"));
const SportsGridThree = lazy(() =>
  import("../../components/SportsGrid-3/SportsGridThree"),
);
const EnterTainmentGrid = lazy(() =>
  import("../../components/EntertainmentGrid/EnterTainmentGrid"),
);
const Sidebar = lazy(() => import("../../components/Sidebar/Sidebar"));
const LeadNewsList = lazy(() =>
  import("../../components/LeadNewsList/LeadNewsList"),
);
const NewsGrid = lazy(() => import("../../components/NewsGrid/NewsGrid"));
const NamazTime = lazy(() => import("../../components/NamazTime/NamazTime"));
const SectionTitle = lazy(() =>
  import("../../components/SectionTitle/SectionTitle"),
);
const Slider = lazy(() => import("../../components/Slider/Slider"));
const Layout = lazy(() => import("../../components/Layout/Layout"));
const SportsGridTwo = lazy(() =>
  import("../../components/SportsGrid-2/SportsGridTwo"),
);

function HomePage() {
  const newsLists = useSelector((state) => state.News.NewsLists);

  //  Demo img
  let img =
    "https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/sadhan-chandra-mozumder-1644240534-1664108366-1667662970.jpg";

  return (
    <Layout>
      <main className="mt-3">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="leadNewsWrapper bg-light">
                <Row>
                  <Col lg={7} className={"border-inner-right"}>
                    <Link to={"/:id"}>
                      <div className="leadNews">
                        <Card
                          className="bg-light border-0"
                          style={{ width: "100%" }}
                        >
                          <Card.Img variant="top" src={LeadPhoto} />
                          <Card.Body>
                            <Link to={"/:id"}>
                              ????????????????????? ??????????????? ???????????????????????????: ???????????? ??????????????????????????? ??????????????????
                              ???????????? ??? ???????????????
                            </Link>
                          </Card.Body>
                        </Card>
                      </div>
                    </Link>
                  </Col>
                  <Col lg={5}>
                    <div className="LeadNewsList">
                      {newsLists &&
                        newsLists.map((item, index) => (
                          <Link to={"/:id"}>
                            <LeadNewsList
                              thumb={item.videoThumb}
                              title={item.title}
                            />
                          </Link>
                        ))}
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col className="my-2 border-inner-right" lg={4}>
                  <NewsGrid />
                </Col>
                <Col className="my-2 border-inner-right" lg={4}>
                  <NewsGrid />
                </Col>
                <Col className="my-2" lg={4}>
                  <NewsGrid />
                </Col>
                <Col className="my-2 border-inner-right" lg={4}>
                  <NewsGrid />
                </Col>
                <Col className="my-2 border-inner-right" lg={4}>
                  <NewsGrid />
                </Col>
                <Col className="my-2" lg={4}>
                  <NewsGrid />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className={"border-inner-left"}>
              <div className="Sidebar mt-4">
                <Sidebar />
                <div className="allnews">
                  <a href="">
                    <p>
                      ?????? ????????? <i className="fas fa-angle-double-right"></i>
                    </p>
                  </a>
                </div>
                <NamazTime />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="country">
          <Container>
            <SectionTitle title={"???????????????"} />
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={6}>
                    <NewsGrid />
                  </Col>
                  <Col lg={6}>
                    <NewsGrid />
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <div className="headline">
                  {newsLists &&
                    newsLists.map((item, index) => (
                      <Link to={"/:id"}>
                        <LeadNewsList
                          thumb={item.videoThumb}
                          title={item.title}
                        />
                      </Link>
                    ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="politics">
          <Container>
            <SectionTitle title={"?????????????????????"} />
            <Row>
              <Col lg={6} className={"border-inner-right"}>
                <NewsGrid />
              </Col>
              <Col lg={3}>
                <div className="LeadNewsList">
                  {newsLists &&
                    newsLists.map((item, index) => (
                      <Link to={"/:id"}>
                        <LeadNewsList
                          thumb={item.videoThumb}
                          title={item.title}
                        />
                      </Link>
                    ))}
                </div>
              </Col>
              <Col lg={3} className={"border-inner-left"}>
                <div className="LeadNewsList">
                  {newsLists &&
                    newsLists.map((item, index) => (
                      <Link to={"/:id"}>
                        <LeadNewsList
                          thumb={item.videoThumb}
                          title={item.title}
                        />
                      </Link>
                    ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="home-slider">
          <Container>
            <SectionTitle title={"????????????????????? 24 ?????????????????????"} />
            <div className="slider mb-5">
              <Slider />
            </div>
          </Container>
        </div>

        <div className="sports-section">
          <Container>
            <SectionTitle title={"????????????"} />
            <div className="sports-section-top py-4">
              <Row>
                <Col className="border-inner-right">
                  <div className="sports-grid">
                    <Link to={":id"}>
                      <SportsGridTwo />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div className="sports-grid">
                    <Link to={":id"}>
                      <SportsGridTwo />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="sports-section-bottom py-4">
              <Row>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="entertaiment_section">
          <Container>
            <SectionTitle title={"??????????????????"} />
            <div className="entertainment-top py-4">
              <Row>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}></Link>
                  <NewsGrid />
                </Col>
                <Col lg={6} className={"border-inner-right"}>
                  <Link to={":id"}>
                    <EnterTainmentGrid />
                  </Link>
                </Col>
                <Col lg={3}>
                  <Link to={":id"}></Link>
                  <NewsGrid />
                </Col>
              </Row>
            </div>

            <div className="entertainment-bottom py-4">
              <Row>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3} className={"border-inner-right"}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
                <Col lg={3}>
                  <Link to={":id"}>
                    {" "}
                    <SportsGridThree />
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="international-tech-section py-5">
          <Container>
            <Row>
              <Col lg={6}>
                <SectionTitle title={"?????????????????????????????????"} />
                <Row>
                  <Col lg={6} className={"border-inner-right"}>
                    <Link to={":id"}>
                      <EnterTainmentGrid />
                    </Link>
                    <Link to={":id"}>
                      <EnterTainmentGrid />
                    </Link>
                  </Col>
                  <Col lg={6}>
                    <div className="LeadNewsList">
                      {newsLists &&
                        newsLists.map((item, index) => (
                          <Link to={"/:id"}>
                            <LeadNewsList
                              thumb={item.videoThumb}
                              title={item.title}
                            />
                          </Link>
                        ))}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <SectionTitle title={"???????????? ???????????????????????????"} />
                <Row>
                  <Col lg={6} className={"border-inner-right"}>
                    <Link to={":id"}>
                      <EnterTainmentGrid />
                    </Link>
                    <Link to={":id"}>
                      <EnterTainmentGrid />
                    </Link>
                  </Col>
                  <Col lg={6}>
                    <div className="LeadNewsList">
                      {newsLists &&
                        newsLists.map((item, index) => (
                          <Link to={"/:id"}>
                            <LeadNewsList
                              thumb={item.videoThumb}
                              title={item.title}
                            />
                          </Link>
                        ))}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="video-section py-5">
          <Container>
            <VideoTab />
            <div className="all-video-btn d-flex justify-content-end">
              <button className="btn text-white">????????? ??????????????? ???????????????...</button>
            </div>
          </Container>
        </div>

        <div className="economics-section py-5">
          <Container>
            <Row>
              <Col lg={8}>
                <SectionTitle title={"????????????????????????"} />
                <Row>
                  <Col lg={6} className={"border-inner-right"}>
                    <Link to={"/"}>
                      <NewsGrid />
                    </Link>
                  </Col>
                  <Col lg={6}>
                    <Link to={"/"}>
                      {" "}
                      <LeadNewsList
                        thumb={img}
                        title={
                          "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                        }
                      />
                    </Link>

                    <Link to={"/"}>
                      {" "}
                      <LeadNewsList
                        thumb={img}
                        title={
                          "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                        }
                      />
                    </Link>

                    <Link to={"/"}>
                      {" "}
                      <LeadNewsList
                        thumb={img}
                        title={
                          "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                        }
                      />
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col lg={4}>
                <SectionTitle title={"???????????????"} />

                <Link to={"/"}>
                  {" "}
                  <LeadNewsList
                    thumb={img}
                    title={
                      "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                    }
                  />
                </Link>

                <Link to={"/"}>
                  {" "}
                  <LeadNewsList
                    thumb={img}
                    title={
                      "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                    }
                  />
                </Link>

                <Link to={"/"}>
                  {" "}
                  <LeadNewsList
                    thumb={img}
                    title={
                      "???????????? ???????????????????????? ??????????????????????????? ???????????? ?????????, ??????????????????????????? ????????? ?????? : ????????????????????????????????????"
                    }
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="whole-country py-5">
          <Container>
            <SectionTitle title={"?????????????????????"} />
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={8} className={"border-inner-right"}>
                    <Row>
                      <Col lg={6} className={"border-inner-right  mb-3"}>
                        <Link to={"/"}>
                          <NewsGrid />
                        </Link>
                      </Col>
                      <Col lg={6} className={"mb-3"}>
                        <Link to={"/"}>
                          <NewsGrid />
                        </Link>
                      </Col>
                      <Col lg={6} className={"border-inner-right"}>
                        <Link to={"/"}>
                          <NewsGrid />
                        </Link>
                      </Col>
                      <Col lg={6}>
                        <Link to={"/"}>
                          <NewsGrid />
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} className={"border-inner-right"}>
                    <div className="country-leadNews mb-2">
                      <Link to={"/"}>
                        {" "}
                        <LeadNewsList
                          thumb={img}
                          title={"???????????????????????????????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????????"}
                        />{" "}
                      </Link>
                    </div>
                    <div className="country-leadNews mb-2">
                      <Link to={"/"}>
                        {" "}
                        <LeadNewsList
                          thumb={img}
                          title={"???????????????????????????????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????????"}
                        />{" "}
                      </Link>
                    </div>
                    <div className="country-leadNews mb-2">
                      <Link to={"/"}>
                        {" "}
                        <LeadNewsList
                          thumb={img}
                          title={"???????????????????????????????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????????"}
                        />{" "}
                      </Link>
                    </div>
                    <div className="country-leadNews mb-2">
                      <Link to={"/"}>
                        {" "}
                        <LeadNewsList
                          thumb={img}
                          title={"???????????????????????????????????? ???????????? ???????????? ???????????? ?????????????????? ??????????????????"}
                        />{" "}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={3}>
                <div className="districtNews">
                  <div className="districtNewsWrapper">
                    <div className="desk-title">
                      <span></span>
                      <h2>??????????????? ??????????????? ?????????</h2>
                    </div>
                    <div className="form">
                      <form>
                        <SelectForm className={"mb-3"}>
                          <option>--???????????????--</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </SelectForm>
                        <SelectForm className={"mb-3"}>
                          <option>--????????????--</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </SelectForm>

                        <button className="btn btn-danger btn-block" disabled>
                          ??????????????????????????? ????????????
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="life-style-slider py-5">
            <Container>
              <SectionTitle title={"??????????????????????????????"} />
              <div className="slider mb-5">
                <Slider />
              </div>
            </Container>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default HomePage;
