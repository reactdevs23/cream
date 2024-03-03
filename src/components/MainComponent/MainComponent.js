import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({
  topImg,
  img,
  logo,
  heading,
  postName,
  responsibilities,
  sendYourCv,
}) => {
  return (
    <div
      className={[
        classes.mainWrapper,
        "min-h-screen flex items-center justify-center w-full ",
      ].join(" ")}
      style={{ background: "var(--primaryColor)" }}
    >
      <div className={classes.container}>
        <div className={classes.topHeader}>
          <img src={logo} alt="#" className={classes.logo} />{" "}
          <img src={topImg} alt="#" className={classes.topImg} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.infoContainer}>
            <h1
              className={classes.heading}
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h1>
            <div className={classes.postName}>
              <p>{postName}</p>
            </div>
            <div className={classes.responsibilitiesContainer}>
              <div className={classes.header}>
                <div className={classes.circles}>
                  {" "}
                  <p className={classes.circle}></p>
                  <p className={classes.circle}></p>
                  <p className={classes.circle}></p>
                </div>
              </div>
              <ul className={classes.responsibilities}>
                {responsibilities.map((el, i) => (
                  <li className={classes.responsibility} key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.sendYourCv}>
              <p className={classes.label}>{sendYourCv.label}</p>
              <a
                href={sendYourCv.link}
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                {sendYourCv.link}
              </a>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={img} alt="#" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
