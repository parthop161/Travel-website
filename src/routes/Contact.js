import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import conpic from "../assets/contactpic.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={conpic} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
