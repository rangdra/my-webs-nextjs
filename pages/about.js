import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profile</h1>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea optio
              assumenda dolores nulla expedita. Sit, amet doloribus eius
              temporibus maiores, quaerat maxime pariatur dolore ea quibusdam
              vitae aperiam adipisci reiciendis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
