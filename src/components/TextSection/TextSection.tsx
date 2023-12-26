import classes from "./TextSection.module.css";
interface ITextSection {
  title: string;
  subtitle: string;
  buttonTitle: string;
}
const TextSection: React.FC<ITextSection> = ({
  title,
  subtitle,
  buttonTitle,
}) => {
  return (
    <div className={classes.column}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.divider}></div>
      <h5 className={classes.subtitle}>{subtitle}</h5>
      <button className={classes.button}>{buttonTitle}</button>
    </div>
  );
};
export default TextSection;
