import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "./SportsGrid.css";

function SportsGrid(news) {
  let location = useLocation();
  let pathname = location?.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="sports-wrapper my-3">
      <Row>
        <Col lg={4}>
          <div className="thumb">
            <img className="w-100" src={news?.NewsThumbnail} alt={news?._id} />
          </div>
        </Col>

        <Col lg={8}>
          <div className="desc">
            <div className="title">
              <Link to={pathname + "/" + news?.NewsTitleSlug}>
                <h5>{news?.NewsTitle}</h5>
              </Link>
              <p>{news?.NewsDetails}</p>
            </div>
            <div className="fotr">
              <span>
                <i className="fa-regular fa-clock"></i> মঙ্গলবার, ১ নভেম্বর
                ২০২২, ২২:৫৮
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SportsGrid;
