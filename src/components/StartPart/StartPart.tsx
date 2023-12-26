import classes from "./StartPart.module.css";
import HeaderImage from "../../assets/images/headerimg.png";

const StartPart: React.FC = () => {
  return (
    <div className={classes.mainContent}>
      <div className={classes.column}>
        <h2 className={classes.title}>Virtual healthcare for you</h2>
        <h5 className={classes.subtitle}>
          Our service provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone
        </h5>
        <button className={classes.button}>Consult today</button>
      </div>
      <img src={HeaderImage} className={classes.headerImage} />
    </div>
  );
};
export default StartPart;
