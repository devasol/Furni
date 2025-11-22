import React from "react";
import Services from "../../components/services/Services";
import { useEffect } from "react";
import Footer from "../../components/home/footer/Footer";
import Header from "../../components/home/header/Header";

function ServicesPage() {
  useEffect(function () {
    document.title = "Services | Furni";
  });
  return (
    <>
      <Header />
      <Services />
      <Footer />
    </>
  );
}

export default ServicesPage;
