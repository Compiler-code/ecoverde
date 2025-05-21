import React from 'react';
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <PageHero des="Contact" destination="CONTACT" where="contact" />
      <ContactForm where="contact" />
      <ContactInfo />
    </>
  );
};

export default ContactPage;