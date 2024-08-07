import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function ContactUsPage() {
  const nav = useNavigate();
  const formRef = useRef(); // Define formRef as a useRef
  const [loading, setLoading] = useState(false);

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .sendForm("service_32l8lf6", "template_l70nugu", formRef.current, {
        publicKey: "E9ImXh91swVpNclmR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Thank You For Your Contact Us , We Will Repond You Soon"
          );
          nav("/");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  };

  const formValidationSchema = Yup.object().shape({
    from_name: Yup.string().required("Full name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className=" p-5 h-[100vh] flex justify-center items-center m-auto max-w-lg mb-5 ">
      <Formik
        initialValues={{
          from_name: "",
          subject: "",
          message: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form ref={formRef} className="flex flex-col gap-10 ">
            {" "}
            {/* Add ref={formRef} */}
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Contact Me
              </h1>
              <p className="mt-3">
                For more information or if you have a project for me to
                contribute, please fill this form{" "}
              </p>
            </div>
            <div className="mt-3">
              <div className="flex flex-col gap-3">
                <label htmlFor="fullname" className="text-xl">
                  Fullname
                </label>
                <Field
                  name="from_name"
                  placeholder="Fullname"
                  id="fullname"
                  type="text"
                  className={`text-black w-full px-3 py-2 border rounded-md ${
                    errors.from_name && touched.from_name && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="from_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <label htmlFor="subject" className="text-xl">
                  Subject
                </label>
                <Field
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                  type="text"
                  className={` text-black w-full px-3 py-2 border rounded-md ${
                    errors.subject && touched.subject && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <Field
                  name="message"
                  id="message"
                  placeholder="Message"
                  as="textarea"
                  rows="4"
                  className={`text-black w-full px-3 py-2 border rounded-md ${
                    errors.message && touched.message && "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <button
                  type="submit"
                  className={`bg-orange-500 flex items-center justify-center  text-white py-2 rounded-lg  font-bold ${
                    loading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-4">
                      <Spinner />
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
