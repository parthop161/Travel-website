import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg = "https://cdn.pixabay.com/photo/2021/07/16/15/29/hellebore-6471156_640.jpg"
        title="Service" 
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
