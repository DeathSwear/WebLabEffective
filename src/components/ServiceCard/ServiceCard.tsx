import classes from "./ServiceCard.module.css";

interface ICardElement {
  title: string;
  subtitle: string;
  logo: string;
}

const ServiceCard: React.FC<ICardElement> = ({ title, subtitle, logo }) => {
  return (
    <div className={classes.mainContent}>
      <img src={logo} className={classes.headerImage} />
      <h2 className={classes.title}>{title}</h2>
      <h5 className={classes.subtitle}>{subtitle}</h5>
    </div>
  );
};
export default ServiceCard;
