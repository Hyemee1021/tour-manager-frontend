import { Form } from "react-bootstrap";

export const CustomInput = ({ label, passRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Control ref={passRef} {...rest} />
    </Form.Group>
  );
};
