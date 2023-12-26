import classes from "./BottomPartCard.module.css";
import React from "react";

interface IArticleItem {
  title: string;
  subtitle: string;
  img: string;
}

const BottomPartCard: React.FC<IArticleItem> = ({ title, subtitle, img }) => {
  return (
    <div className={classes.cardMaterial}>
      <img className={classes.articleImage} src={img} />
      <h1 className={classes.title_article}>{title}</h1>
      <h2 className={classes.subtitle_article}>{subtitle}</h2>
      <button className={classes.moreButton}>Read more ➜</button>
    </div>
  );
};

export default BottomPartCard;
