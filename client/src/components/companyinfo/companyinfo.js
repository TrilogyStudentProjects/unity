import React from "react";
import { Row, Col, Button } from "react-materialize";
import { Link } from "react-router-dom";
import "./companyinfo.css";

export default () => (
    <div className="companyinfo">
        <hr className="home-line"/>
        <h3 className="title">Why Choose Unity</h3>
        <h5 className="sub-title"> Unity provides a unique experience for someone who wants to take control of their own </h5>
        <h5 className="sub-title"> financial success,  while utilizing the wealth of knowledge from your personal advisor. </h5>
        <Row className="container info-content">
            <Col s={12} m={4} className="infobox">
                <img className="responsive-img circle" src="./assets/why.jpg" alt="left-pic" />
                <p className="infoheading">Research</p>
                <p className="infobody">Use Unity's stock finder.  Our real-time stock tool will give you current stock prices and trends, and allow you to retrieve that company's stock performance for the last 20 years. Found a stock you want to Watch?  We've got you covered.  Just save that company to your own watch-list. </p>
                <Link to="/search">
                    <Button className="searchBtn btn sc-bdVaJa gVMrss">Search </Button>
                </Link>
            </Col>
            <Col s={12} m={4} className="infobox" >
                <img src="./assets/beard.jpg" className="responsive-img circle" alt="center-pic" />
                <p className="infoheading">Advisors</p>
                <p className="infobody">Have questions? Not sure if your stocks are right for you long term? Just ask your personal advisor. Your personal advisor is here to help you meet your overall financial goals.  </p>
                <Link to="#">
                    <Button className="btn sc-bdVaJa gVMrss">Contact Advisor</Button>
                </Link>
            </Col>
            <Col s={12} m={4} className="infobox" >
                <img src="./assets/boy.jpg" alt="right-pic" className="responsive-img circle" />
                <p className="infoheading">Success</p>
                <p className="infobody">Whether you are looking into short term or long term investing, we can help. Lets work together to reach your financial goals!</p>
            </Col>
        </Row>

    </div>
);