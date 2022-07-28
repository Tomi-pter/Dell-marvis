import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactStyle } from "./styled/ContactStyled";

function Contact() {
  const phoneRegExp = /^[0-9]\d{10}$/;

  return (
    <ContactStyle>
      <div className="text">
        <h1>Contact Us</h1>
        <p>
          Ready for uninterrupted power supply? Leave us a message to discuss
          specifications for your home, office or building. If you&apos;re for
          the most best service delivery, then you&apos;re in the right place.
        </p>
      </div>
      <Formik
        initialValues={{ firstName: "", email: "", service: "", phone: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .min(11, "to short")
            .max(11, "to long"),
        })}
        onSubmit={(values) => {
          fetch("https://formsubmit.co/ajax/tomiaiyeniko@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: values.firstName,
              email: values.email,
              service: values.service,
              phoneNo: values.phone,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              data.success && window.location.reload(false);
              console.log(data);
            })
            .catch((error) => console.log(error));
        }}
      >
        <Form>
          <Field name="firstName" type="text" placeholder="Name" />
          <ErrorMessage name="firstName" />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" />

          <Field name="phone" type="tel" placeholder="Phone" />
          <ErrorMessage name="phone" />

          <Field name="service" as="select" className="my-select">
            <option value="select" className="default">
              Select service
            </option>
            <option value="solar">Solar Panels</option>
            <option value="inverter">Inverters</option>
            <option value="battery">Batteries</option>
          </Field>
          <ErrorMessage name="service" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </ContactStyle>
  );
}

export default Contact;
