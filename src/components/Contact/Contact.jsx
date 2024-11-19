import React, { useEffect, useRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import icon from "../../assets/icon2.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { SnackbarProvider, useSnackbar } from "notistack";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    // Sending email to the intended recipient (you)
    emailjs
      .send("service_ekbumd9", "template_u43am0v", values, "gHavnqOTeI7VGtZ5N")
      .then(
        (result) => {
          enqueueSnackbar("Message sent successfully!", {
            autoHideDuration: 3000,
          });

          emailjs
            .send(
              "service_ekbumd9",
              "template_xoxdsgy",
              {
                sender_email: values.email,
                sender_name: values.name,
                subject: values.subject,
                message: values.message,
              },
              "gHavnqOTeI7VGtZ5N"
            )
            .then(
              (confirmationResult) => {
                enqueueSnackbar("Confirmation email sent to you!", {
                  variant: "success",
                  autoHideDuration: 3000,
                });
              },
              (confirmationError) => {
                enqueueSnackbar("Failed to send confirmation email!", {
                  variant: "warning",
                  autoHideDuration: 3000,
                });
              }
            );

          setSubmitting(false);
          resetForm();
        },
        (error) => {
          enqueueSnackbar("Message can't be sent!", {
            variant: "error",
            autoHideDuration: 3000,
          });
          setSubmitting(false);
        }
      );
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required!")
      .min(3, "Name length must be more than 2 letters!")
      .max(20, "Name length must be less than 20 letters!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Enter a valid email!"),
    subject: Yup.string()
      .required("Subject is required!")
      .min(5, "Subject length must be more than 4 letters!"),
    message: Yup.string()
      .required("Message is required!")
      .min(5, "Message length must be more than 4 letters!"),
  });

  const containerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const form = containerRef.current.querySelectorAll(".animate-right ");
    gsap.fromTo(
      form,
      {
        opacity: 0,
        y: 200,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    const info = containerRef.current.querySelectorAll(".animate-left");
    gsap.fromTo(
      info,
      {
        opacity: 0,
        y: 500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
    const icons = containerRef.current.querySelectorAll(".animate-icons");
    gsap.fromTo(
      icons,
      {
        opacity: 0,
        x: -100,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.3,
        stagger: 0.3,
        ease: "back.in",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto p-4 space-y-5"
    >
      {/* Contact and Social Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-5 justify-between">
        <div className="animate-left col-span-1 md:col-span-1 grid gap-10">
          <div className="flex flex-col justify-between gap-5">
            <h4 className="font-heading font-semibold text-2xl">
              Contact Info
            </h4>
            <div className="animate-icons flex gap-5">
              <div className="p-3 bg-card-reverseDark rounded-lg">
                <CiMail className="text-3xl" />
              </div>
              <div>
                <p className="text-primary font-body">Mail Me</p>
                <p>ayah208603@gmail.com</p>
              </div>
            </div>
            <div className="animate-icons flex gap-5">
              <div className="p-3 bg-card-reverseDark rounded-lg">
                <BsTelephone className="text-3xl" />
              </div>
              <div>
                <p className="text-primary font-body">Contact Us</p>
                <p>+0201090944979</p>
              </div>
            </div>
            <div className="animate-icons flex gap-5">
              <div className="p-3 bg-card-reverseDark rounded-lg">
                <SlLocationPin className="text-3xl" />
              </div>
              <div>
                <p className="text-primary font-body">Location</p>
                <p>Egypt</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-semibold text-2xl">Social Info</h4>
            <ul className="flex gap-5">
              <li className="animate-icons p-5 rounded-full bg-card-reverseDark hover:bg-card-light hover:text-black transition-colors duration-200">
                <a
                  href="https://github.com/AyaHany0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub className="text-3xl" />
                </a>
              </li>
              <li className=" animate-icons p-5 rounded-full bg-card-reverseDark hover:bg-card-light hover:text-black transition-colors duration-200">
                <a
                  href="https://linkedin.com/in/aya-hany-8b457a172"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </li>
              <li className="animate-icons p-5 rounded-full bg-card-reverseDark hover:bg-card-light hover:text-black transition-colors duration-200">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaDribbble className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="animate-right col-span-1 md:col-span-2 gap-5">
          <div className="com-card  space-y-8">
            <div className="flex justify-between">
              <h5 className="text-3xl font-body font-medium">
                Let's work <span className="text-secondary">together</span>
              </h5>
              <img src={icon} alt="star" className="md:-mt-6 -mt-5" />
            </div>

            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="space-y-5 py-8">
                    <div className="relative">
                      <Field
                        type="text"
                        name="name"
                        className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-card-reverseDark border-2 border-subprimary border-b-primary outline-none focus:border-subprimary peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-lg text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Name
                      </label>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Field
                        type="email"
                        name="email"
                        className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-card-reverseDark border-2 border-subprimary border-b-primary outline-none focus:border-subprimary peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-lg text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Email
                      </label>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Field
                        type="text"
                        name="subject"
                        className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-card-reverseDark border-2 border-subprimary border-b-primary outline-none focus:border-subprimary peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="subject"
                        className="absolute text-lg text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Subject
                      </label>
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="relative">
                      <Field
                        as="textarea"
                        rows="4"
                        name="message"
                        className="block rounded-t-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-card-reverseDark border-2 border-subprimary border-b-primary outline-none focus:border-subprimary peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="message"
                        className="absolute text-lg text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Message
                      </label>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 w-full cursor-pointer text-white bg-subprimary hover:bg-white hover:text-subprimary rounded-lg font-medium transition-colors duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
