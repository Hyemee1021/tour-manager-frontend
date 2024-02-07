import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");

  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || maxGroupSize === "") {
      return alert("All filds are required.");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/tours/search?city=${location}&maxGroupSize=${maxGroupSize}`, {
      state: result.data,
    });
  };
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              {" "}
              <i class="fa-solid fa-map-pin"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              {" "}
              <i class="fa-solid fa-user-group"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            {/* search icon */}
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
