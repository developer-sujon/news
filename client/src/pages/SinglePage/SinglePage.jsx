//External Lib Import
import React, { lazy, Suspense, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import "./SinglePage.css";
import Layout from "../../components/Layout/Layout";
import LazyLoader from "../../components/LazyLoader/LazyLoader";
import { useParams } from "react-router-dom";
import NewsRequest from "../../APIRequest/NewsRequest";
import { useSelector } from "react-redux";
import FullscreenLoader from "../../components/Common/FullscreenLoader";
const SocialMedia = lazy(() =>
  import("../../components/SocialMedia/SocialMedia"),
);
const SectionTitle = lazy(() =>
  import("../../components/SectionTitle/SectionTitle"),
);
const LeadNewsList = lazy(() =>
  import("../../components/LeadNewsList/LeadNewsList"),
);

function SinglePage(news) {
  const { slug } = useParams();
  const { IsLoading } = useSelector((state) => state.Loader);
  const { NewsDetails } = useSelector((state) => state.News);

  useEffect(() => {
    window.scroll(0, 0);
    NewsRequest.NewsDetailsBySlug(slug);
  }, [slug]);

  if (IsLoading) {
    return (
      <Layout>
        <FullscreenLoader />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Suspense fallback={<LazyLoader />}>
          <main className="mt-2">
            <Container>
              <SectionTitle style={{ margin: "25px 0" }} title={"ক্রিকেট"} />
              <Row>
                <Col lg={2}>
                  <div className="desk">
                    <div className="desk-title">
                      <span></span>
                      <h2>স্পোর্টস ডেস্ক</h2>
                    </div>
                    <div className="desk-bottom">
                      <p>প্রকাশিত : ২১:২৮, ২ নভেম্বর ২০২২</p>

                      <div className="desk-social">
                        <SocialMedia />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="middle">
                    <div className="single-title">
                      <h2>{NewsDetails?.NewsTitle}</h2>
                    </div>
                    <div className="single-content mt-3">
                      <div className="single-img">
                        <img
                          className="w-100"
                          src={NewsDetails?.NewsThumbnail}
                          alt={NewsDetails?.NewsTitleSlug}
                        />
                        <p className="single-img-desc">ছবি: সংগৃহীত</p>
                      </div>

                      <div className="single-desc">
                        {NewsDetails?.NewsDetails}
                      </div>
                    </div>

                    <div className="social-bottom">
                      <SocialMedia />
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="latest-news">
                    <div className="title text-center text-white p-2">
                      সর্বশেষ
                    </div>
                    <div className="news-box">
                      <LeadNewsList />
                      <LeadNewsList />
                      <LeadNewsList />
                      <LeadNewsList />
                      <LeadNewsList />
                      <LeadNewsList />
                      <LeadNewsList />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
        </Suspense>
      </Layout>
    );
  }
}

export default SinglePage;
