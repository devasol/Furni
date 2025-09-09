import React from "react";
import Services from "../../components/services/Services";
import { useEffect } from "react";

function ServicesPage() {
  useEffect(function () {
    document.title = "Services | Furni";
  });
  return <Services />;
}

export default ServicesPage;
