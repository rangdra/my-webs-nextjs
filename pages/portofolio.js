import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Portofolio = () => {
  return (
    <>
      <Head>
        <title>Portofolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portofolio</h1>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae recusandae nam ratione possimus rem dolores quia at,
              sapiente eligendi nulla.
            </p>
            <div className="portofolio-wrapper">
              <div className="portofolio-item">
                <img src="/digitalent.png" className="portofolio-image" />
                <h4 className="portofolio-name">Portofolio Name</h4>
                <div className="portofolio-category">Web Developer</div>
              </div>
              <div className="portofolio-item">
                <img src="/digitalent.png" className="portofolio-image" />
                <h4 className="portofolio-name">Portofolio Name</h4>
                <div className="portofolio-category">Web Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
