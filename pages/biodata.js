import React from "react";
import Link from "next/link";
import Head from "next/head";

const Biodata = () => {
  return (
    <>
      <Head>
        <title>Biodata</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {" "}
        <h1>Biodata</h1>
        <h3>Nama: Rangdra</h3>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Biodata;
