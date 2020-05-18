import React, { Component } from "react";
import "../styling/Home.css";
import "../styling/About.css";
import { Box, Image } from "@chakra-ui/core";

import NavBar from "./NavBar";
import HomeImg from "../img/homepageimgtwo.png";
import Footer from "./Footer.js";
import Icons from "./Icons.js";

const Home = () => {
  const medicalSupplies = {
    imageUrls: "https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg",
    imageAlt: "image of medical supplies",
    range: "First Aid Kits, Disaster Kits, AED's, Manikins",
    title: "Medical Supplies",
  };

  const benefits = {
    imageUrls:
      "https://t-biznetwork.com/wp-content/uploads/2011/02/handshake.jpg",
    imageAlt: "Photo of shaking hands",
    range: "cost, communication, and commitment ",
    title: "Benefits",
  };

  return (
    <div className="body">
      <div>
        <NavBar />
      </div>
      <div className="home-img-div">
        <img className="home-img" src={HomeImg} alt="home" />
      </div>

      <Icons />
      <div>
        <h1> Red Suppliers </h1>
      </div>
      <div className="center">
        <p className="div1">
          Red Suppliers specializes in filling the need of government
          organizations by delivering needed products within the medical
          industry. Red Suppliers focuses on dental and portable aid supplies to
          be delivered to the needed locations.
        </p>
      </div>

      <div className="button" type="submit">
        <a className="button-link" href="https://redsuppliers.com/contact">
          Contact Us
        </a>
      </div>
      <div className="services-title">
        <h2>The Services We Offer</h2>
      </div>
      <div className="center">
        <div className="side-by-side">
          <Box maxW="md" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image
              src={medicalSupplies.imageUrls}
              alt={medicalSupplies.imageAlt}
            />

            <Box p="6">
              <Box alignItems="baseline">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {medicalSupplies.title}
                </Box>
              </Box>

              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {medicalSupplies.range}
              </Box>
            </Box>
          </Box>
          <div className="create-space"> </div>
          {/* Our serverse benfits */}
          <Box maxW="md" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src={benefits.imageUrls} alt={benefits.imageAlt} />

            <Box p="6">
              <Box alignItems="baseline">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {benefits.title}
                </Box>
              </Box>

              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {benefits.range}
              </Box>
            </Box>
          </Box>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// <div className="services1">
// <div>
//   <img className="handshake-img" src={Benefits} />
//   <h3 className="title-font"> Benefits </h3>
//   <p className="font-size2">
//     When it comes to business the way we structure our services is
//     by focusing on three key things: cost, communication, and
//     commitment. We believe in a win-win mentality where the
//     relationship we foster will not only be based on results but
//     also the satisfaction of the work that is done.
//   </p>
// </div>
// </div>
// <div className="services2">
// <img
//   className="med-img"
//   src="https://2001-2009.state.gov/cms_images/030405_med_supplies.jpg"
// />
// <div className="wrapper">
//   <h3 className="title-font2"> Medical Supplies </h3>
// </div>
// <div className="center-width">
//   <p className="font-size">
//     The list of products we supply can range from Basic First Aid to
//     even OSHA, Pets, Coast Guard, Swimming First Aids and many more.
//     We are constantly updating our inventory to satisfy our buyers.
//     Contact us to see how we can provide what you may need.
//   </p>
// </div>
// </div>
