import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../components/custom-input/CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { postNewAdmin } from "../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    //password rules //regex

    // 2. must include uppercase
    // 3. must include lowercase
    // 4. must include number
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      toast.error("Password do not match");
      return;
    }

    const userPending = postNewAdmin(rest);

    toast.promise(userPending, {
      pending: "Please wait...",
    });

    const { status, message } = await userPending;
    toast[status](message);
    if (status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "John",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Wick",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "John@email.com",
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "040000000",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "1 george st Sydney",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      // type: "password",
      placeholder: "xxxxxxx",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "xxxxxxxxx",
      type: "password",
    },
  ];

  return (
    <div>
      <hr />
      <Form
        onSubmit={handleOnSubmit}
        className="m-auto border rounded shadow-lg p-3 mt-5"
        style={{ width: "500px" }}
      >
        <h3>Admin signup only</h3>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button type="submit">Sign Up</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
