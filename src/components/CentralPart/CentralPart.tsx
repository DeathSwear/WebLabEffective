import classes from "./CentralPart.module.css";
import TextSection from "../TextSection";
import Illustartion1 from "../../assets/images/illustration1.png";
import Illustartion2 from "../../assets/images/illustration2.png";
const CentralPart: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        <img src={Illustartion1} className={classes.headerImage} />
        <TextSection
          title="Leading healthcare providers"
          subtitle="We provides progressive, and affordable healthcare, accessible on mobile 
                and online for everyone. To us, it’s not just work. We take pride in the solutions 
                we deliver"
          buttonTitle="Learn more"
        />
      </div>
      <div className={classes.mainContent}>
        <TextSection
          title="Download our mobile apps"
          subtitle="Our dedicated patient engagement app and 
                web portal allow you to access information instantaneously 
                (no tedeous form, long calls, 
                or administrative hassle) and securely"
          buttonTitle="Download &#129047;"
        />
        <img src={Illustartion2} className={classes.headerImage} />
      </div>
    </div>
  );
};
export default CentralPart;
