import classes from "./Header.module.css";
import clsx from "clsx";
const Header: React.FC = () => {
  return (
    <header className={classes.headerRow}>
      <div className={classes.row}>
        <h4 className={classes.logo}>T</h4>
        <h5 className={classes.name}>Health care</h5>
      </div>
      <div className={classes.topNavBar}>
        <button className={clsx(classes.navButton, classes.navButtonEnabled)}>
          Home
        </button>
        <button className={classes.navButton}>Find a doctor</button>
        <button className={classes.navButton}>Apps</button>
        <button className={classes.navButton}>Testimonials</button>
        <button className={classes.navButton}>About us</button>
      </div>
    </header>
  );
};
export default Header;
