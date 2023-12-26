import BottomPartCard from "../BottomPartCard";
import classes from "./BottomPart.module.css";
import { useState } from "react";

interface IArticleItem {
  title: string;
  subtitle: string;
  img: string;
}

interface IOurLatestArticle {
  arr: IArticleItem[];
}

const OurLatestArticle: React.FC<IOurLatestArticle> = ({ arr }) => {
  const [showAll, setShowAll] = useState(false);

  const handleButtonViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={classes.mainContent}>
      <h1 className={classes.title_text}>Check out our latest article</h1>
      <div className={classes.divider}></div>
      {showAll ? (
        <div className={classes.row}>
          {arr.map((_item, index) => (
            <BottomPartCard
              key={index}
              title={arr[index].title}
              subtitle={arr[index].subtitle}
              img={arr[index].img}
            />
          ))}
        </div>
      ) : (
        <div className={classes.row}>
          <BottomPartCard
            title={arr[0].title}
            subtitle={arr[0].subtitle}
            img={arr[0].img}
          />
          <BottomPartCard
            title={arr[1].title}
            subtitle={arr[1].subtitle}
            img={arr[1].img}
          />
          <BottomPartCard
            title={arr[2].title}
            subtitle={arr[2].subtitle}
            img={arr[2].img}
          />
        </div>
      )}
      <button className={classes.button} onClick={handleButtonViewAll}>
        {!showAll ? "View all" : "Hide"}
      </button>
    </div>
  );
};

export default OurLatestArticle;
