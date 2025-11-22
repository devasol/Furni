import React from "react";
import Services from "../../components/services/Services";
import { useEffect } from "react";
import Footer from "../../components/home/footer/Footer";

function ServicesPage() {
  useEffect(function () {
    document.title = "Services | Furni";
  });
  return (
    <>
      <Services />
    </>
  );
}

export default ServicesPage;
