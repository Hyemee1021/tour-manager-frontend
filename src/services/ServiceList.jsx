import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customozationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculte Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae vero quibusdam modi magni natus, exercitationem veniam blanditiis sed dolores?",
  },
  {
    imgUrl: guideImg,
    title: "Calculte Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae vero quibusdam modi magni natus, exercitationem veniam blanditiis sed dolores?",
  },
  {
    imgUrl: customozationImg,
    title: "Calculte Weather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae vero quibusdam modi magni natus, exercitationem veniam blanditiis sed dolores?",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
