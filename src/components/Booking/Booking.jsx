import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import "./booking.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user?._id,
    userEmail: user && user?.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setBooking((prev) => ({ ...prev, [id]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert(`Please sign in`);
      }

      const token = localStorage.getItem("token");
      console.log(token);

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {" "}
          ${price} <span>/per person</span>
        </h3>

        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* booking form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              required
              onChange={handleOnChange}
              placeholder="Full name"
              id="fullName"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" id="bookAt" required onChange={handleOnChange} />
            <input
              type="number"
              required
              id="guestSize"
              placeholder="Guest Num"
              onChange={handleOnChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* booing bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i> 1 person
            </h5>
            <span> ${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span> ${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span> ${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4 " onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
