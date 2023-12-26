/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import classes from './App.module.css';
import clsx from 'clsx';
import CounterButton from './components/CounterButton';*/
import CentralPart from "./components/CentralPart";
import Header from "./components/Header";
import Services from "./components/Services";
import Slider from "./components/Slider";
import StartPart from "./components/StartPart";
import person from "./assets/images/person.png";
import article1 from "./assets/images/article1.png";
import article2 from "./assets/images/article2.png";
import article3 from "./assets/images/article3.png";
import BottomPart from "./components/BottomPart";
import Footer from "./components/Footer";
import classes from "./App.module.css";
/*
function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={clsx(classes.logo, classes.react)} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <CounterButton defaultCount={100}/>
        <CounterButton/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes.readthedocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
function App() {
  const customers = [
    {
      name: "Edward Newgate",
      job: "Founder Circle",
      review:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: person,
    },
    {
      name: "Edward Newgate 2",
      job: "Founder Circle 2",
      review:
        '"222 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: person,
    },
    {
      name: "Edward Newgate 3",
      job: "Founder Circle 3",
      review:
        '"333 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: person,
    },
    {
      name: "Edward Newgate 4",
      job: "Founder Circle 4",
      review:
        '"444 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: person,
    },
  ];

  const articles = [
    {
      title: "Disease detection, check up in the laboratory",
      subtitle:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
      img: article1,
    },
    {
      title: "Herbal medicines that are safe for consumption",
      subtitle:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      img: article2,
    },
    {
      title: "Natural care for healthy facial skin",
      subtitle:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
      img: article3,
    },
    {
      title: "444Disease detection, check up in the laboratory",
      subtitle:
        "444In this case, the role of the health laboratory is very important to do a disease detection...",
      img: article1,
    },
    {
      title: "555EHerbal medicines that are safe for consumption",
      subtitle:
        "555Herbal medicine is very widely used at this time because of its very good for your health...",
      img: article2,
    },
    {
      title: "666Natural care for healthy facial skin",
      subtitle:
        "666A healthy lifestyle should start from now and also for your skin health. There are some...",
      img: article3,
    },
    {
      title: "444Disease detection, check up in the laboratory",
      subtitle:
        "777In this case, the role of the health laboratory is very important to do a disease detection...",
      img: article1,
    },
    {
      title: "555EHerbal medicines that are safe for consumption",
      subtitle:
        "888Herbal medicine is very widely used at this time because of its very good for your health...",
      img: article2,
    },
    {
      title: "666Natural care for healthy facial skin",
      subtitle:
        "999A healthy lifestyle should start from now and also for your skin health. There are some...",
      img: article3,
    },
  ];

  return (
    <>
      <div className={classes.wrapper}>
        <Header />
        <StartPart />
        <Services />
        <CentralPart />
        <Slider arr={customers} />
        <BottomPart arr={articles} />
      </div>
      <Footer />
    </>
  );
}

export default App;
