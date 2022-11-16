//  External Import
import React, { Suspense, lazy, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

//  Internall Import
import Layout from "../../../components/Layout/Layout";
import LazyLoader from "../../../components/LazyLoader/LazyLoader";
import FullscreenLoader from "../../../components/Common/FullscreenLoader";
import "./Cricket.css";
import { useSelector } from "react-redux";
import NewsRequest from "../../../APIRequest/NewsRequest";
import { useLocation } from "react-router-dom";
const ReadMore = lazy(() => import("../../../components/ReadMore/ReadMore"));
const Sidebar = lazy(() => import("../../../components/Sidebar/Sidebar"));
const SportsGrid = lazy(() =>
  import("../../../components/SportsGrid/SportsGrid"),
);
const SectionTitle = lazy(() =>
  import("../../../components/SectionTitle/SectionTitle"),
);

function SubCategoryPage({ label }) {
  const { IsLoading } = useSelector((state) => state.Loader);
  const { NewsLists } = useSelector((state) => state.News);

  let location = useLocation();
  let pathname = location?.pathname;

  useEffect(() => {
    NewsRequest.NewsDetailsBySubCategory(pathname?.split("/")?.[2]);
  }, [pathname]);

  if (IsLoading) {
    return (
      <Layout>
        <FullscreenLoader />
      </Layout>
    );
  } else if (NewsLists.length > 0) {
    return (
      <Layout>
        <Suspense fallback={<LazyLoader />}>
          <main>
            <Container>
              <SectionTitle title={label} />
              <Row>
                <Col lg={9}>
                  {NewsLists?.map((news) => (
                    <SportsGrid {...news} />
                  ))}

                  <div className="read d-flex my-5 justify-content-center">
                    <ReadMore
                      className={"hoverBtn"}
                      style={{ width: "500px" }}
                      title={"আরো পড়ুন"}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="Sidebar">
                    <Sidebar />
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
        </Suspense>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Suspense fallback={<LazyLoader />}>
          <main>
            <Container>
              <SectionTitle title={label} />
              <Row>
                <Col lg={9}>{label} এর খবর খুঁজে পাওয়া যায়নি</Col>
                <Col lg={3}>
                  <div className="Sidebar">
                    <Sidebar />
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

export default SubCategoryPage;
