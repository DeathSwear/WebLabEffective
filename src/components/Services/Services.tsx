import ServiceCard from "../ServiceCard";
import classes from "./Services.module.css";
import Search from "../../assets/images/search.png";
import Consultation from "../../assets/images/consultation.png";
import Details from "../../assets/images/details.png";
import Pharmacy from "../../assets/images/pharmacy.png";
import Tracking from "../../assets/images/tracking.png";
import Care from "../../assets/images/care.png";

const Services: React.FC = () => {
  return (
    <div className={classes.mainContent}>
      <h2 className={classes.title}>Our services</h2>
      <h5 className={classes.subtitle}>
        Our service provides progressive, and affordable healthcare, accessible
        on mobile and online for everyone
      </h5>
      <div className={classes.cards_wrapper}>
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Search}
        />
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Pharmacy}
        />
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Consultation}
        />
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Details}
        />
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Care}
        />
        <ServiceCard
          title="Search doctor"
          subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          logo={Tracking}
        />
      </div>
      <button className={classes.button}>Learn more</button>
    </div>
  );
};
export default Services;
