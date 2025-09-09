import { useEffect } from "react";
import ContactUs from "../../components/contactUs/ContactUs";
export default function ContactUsPage() {
  useEffect(function () {
    document.title = "Contact-Us | Furni";
  });
  return <ContactUs />;
}
