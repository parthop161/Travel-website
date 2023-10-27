import Mountain1 from "../assets/paris1.jpg";
import Mountain2 from "../assets/paris2.jpg";
import Mountain3 from "../assets/goa1.jpg";
import Mountain4 from "../assets/goa2.jpg";
import Mountain5 from "../assets/los1.jpg";
import Mountain6 from "../assets/los2.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opporyunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Paris, France"
        text=" There’s always familiar air through the streets of Paris, which is
      never quite the same or quite another. Between a postcard panorama
       and the inhabitants’ reality, the eternal Paname, in perpetual
      motion, is constantly evolving, keeping the living traces of its
      history in its heart of stone.If you wonder why Paris is the best
      place to visit or why you should go to Paris, this article is for
      you. Below, we share what we love most about Paris – the top 10
      reasons to visit Paris – completing the list with beautiful shots by
      fellow travel bloggers."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Goa, India"
        text=" Goa, a tiny emerald land on the west coast of India, the 25th state of the Union states of India, was liberated from Portuguese rule in 1961. It was a part of Union Territory of Goa, Daman & Diu till 30th May 1987 when it was carved out of form a separate state. Goa covers an area of 3702 square kilometers and comprises two Revenue district viz North Goa and South Goa. Boundaries of Goa State are defined in the North Terekhol river which separates it from Maharashtra, in the East and South by Karnataka State and West by Arabian Sea. Goa lies in Western Coast of India and is 594 Km (by road) away from Mumbai city."
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-des"
        heading="Los Angeles, California"
        text=" Los Angeles, the heart of southern California, became a world-class city very recently. At the start of the 20th century it was considered merely “a large village.” This ascendancy is all the more remarkable considering that the city originally lacked some of the essential building blocks associated with cityhood, such as a natural harbour. Yet it overcame natural deficiencies and established itself as an important centre of commerce, agriculture, tourism, and industry."
        img1={Mountain6}
        img2={Mountain5}
      />
    </div>
  );
};
export default Destination;
