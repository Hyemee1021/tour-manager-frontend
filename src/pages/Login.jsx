import React, { useEffect, useRef } from "react";
// import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../components/custom-input/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../helpers/axiosHelper";
// import { autoLogin, getUserAction } from "./userAction";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // // const location = useLocation();

  // console.log(location);
  // const { user } = useSelector((state) => state.userInfo);

  // const fromLocation =
  //   location?.state?.from?.location?.pathname || "/dashboard";

  // useEffect(() => {
  //   // redirect to  dashboard
  //   user?._id && navigate(fromLocation);

  //   !user?._id && dispatch(autoLogin());
  // }, [user?._id, navigate, dispatch, fromLocation]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both input field must be filled");
    }

    /// axios

    const { status, message, jwts } = await loginUser({ email, password });

    toast[status](message);

    if (status === "success") {
      const { accessJWT, refreshJWT } = jwts;
      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);
      //   //fetch user info and redirect to dashboard
      //   dispatch(getUserAction());
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return;
    }
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
      passRef: emailRef,
    },

    {
      label: "Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
      passRef: passwordRef,
    },
  ];
  return (
    <div className="bg-background2">
      <div className="bg-white p-3 text-dark rounded ">
        <Form
          onSubmit={handleOnSubmit}
          className="form-center border shadow-lg p-4 rounded mt-5"
        >
          <h2 className="text-center">Welcome login </h2>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              {" "}
              Login
            </Button>
          </div>

          <div className="text-end mt-5">
            New here?
            <a href="/signup">Signup Now!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
