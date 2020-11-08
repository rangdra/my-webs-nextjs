import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium minima nulla quia unde quasi rerum!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: jhon@doe.com</li>
              <li className="contact-item">Phone: +628989899</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
