import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactStyle } from "./styled/ContactStyled";

function Contact() {
  const phoneRegExp = /^[0-9]\d{10}$/;
  const renEnergy = ["Solar Panels", "Inverters", "Batteries", "UPS"];
  const security = [
    "CCTV",
    "Burglary Alarm",
    "Electric Fence",
    "Fire Alarm",
    "Biometric Door Lock",
  ];
  const data = ["WLAN", "VSAT", "FTH", "Networking"];
  const homeAuto = [
    "Sound Systems",
    "Video & visuals",
    "IP telephoning",
    "VOIP",
    "Smart homes",
    "Intercom",
  ];

  const [service, setService] = useState("");
  const [type, setType] = useState([]);

  const handleServiceSelect = (e) => {
    setService(e.target.value);
  };

  useEffect(() => {
    service === "renewable energy"
      ? setType(renEnergy)
      : service === "security"
      ? setType(security)
      : service === "data"
      ? setType(data)
      : service === "home automation"
      ? setType(homeAuto)
      : setType([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  return (
    <ContactStyle>
      <div className="text">
        <h1>Contact Us</h1>
        <p>
          Ready for uninterrupted power supply? Leave us a message to discuss
          specifications for your home, office or building. If you&apos;re
          looking for the best service delivery, then you&apos;re in the right
          place.
        </p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          service: service,
          phone: "",
          serviceType: "",
        }}
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
              service: service,
              phoneNo: values.phone,
              serviceType: values.serviceType,
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

          <Field
            name="service"
            as="select"
            className="my-select"
            value={service}
            onChange={(e) => handleServiceSelect(e)}
          >
            <option value="select" className="default">
              Select service
            </option>
            <option value="renewable energy">Renwable Energy</option>
            <option value="security">Security</option>
            <option value="home automation">Home Automation</option>
            <option value="data">Data</option>
          </Field>

          {service.length > 0 && (
            <Field name="serviceType" as="select" className="my-select">
              <option value="">Specific service</option>
              {type.map((ty) => (
                <option value={ty} key={ty}>
                  {ty}
                </option>
              ))}
            </Field>
          )}

          <button type="submit">
            <span>Submit</span>
          </button>
        </Form>
      </Formik>
    </ContactStyle>
  );
}

export default Contact;
