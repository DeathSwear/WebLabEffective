import classes from "./Slider.module.css";
import { useState } from "react";

interface customer {
  name: string;
  job: string;
  review: string;
  img: string;
}

interface ISlider {
  arr: customer[];
}

const Slider: React.FC<ISlider> = ({ arr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < arr.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={classes.column}>
      <div className={classes.slider_card}>
        <h1 className={classes.header_slider}>What our customer are saying</h1>
        <div className={classes.white_divider}></div>
        <div className={classes.row_sliderInfo}>
          <div className={classes.img_block}>
            <img
              className={classes.img}
              src={arr[currentIndex].img}
              alt={arr[currentIndex].name}
            />
          </div>
          <div className={classes.column_name}>
            <div className={classes.name}>{arr[currentIndex].name}</div>
            <div className={classes.job}>{arr[currentIndex].job}</div>
          </div>
          <h4 className={classes.job}>{arr[currentIndex].review}</h4>
        </div>
      </div>

      <div className={classes.row_button}>
        <button
          style={{
            color:
              currentIndex == 0
                ? "rgba(91, 155, 243, 0.3)"
                : "rgba(91, 155, 243, 1)",
          }}
          className={classes.arrow_button}
          onClick={handleLeftClick}
        >
          ←
        </button>

        {arr.map((_item, index) => (
          <div
            key={index}
            className={classes.dot}
            style={{
              backgroundColor:
                index === currentIndex
                  ? "rgba(91, 155, 243, 1)"
                  : "rgba(91, 155, 243, 0.3)",
            }}
          />
        ))}

        <button
          className={classes.arrow_button}
          style={{
            color:
              currentIndex < arr.length - 1
                ? "rgba(91, 155, 243, 1)"
                : "rgba(91, 155, 243, 0.3)",
          }}
          onClick={handleRightClick}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
