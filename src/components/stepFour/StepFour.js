import style from "./stepFour.module.css";
import { useOutletContext } from "react-router-dom";
import { MdDone } from "react-icons/md";
import React from "react";

export const StepFour = () => {
  const [displayName] = useOutletContext();
  return (
    <React.Fragment className={style.main}>
      <div className={style.tickContainer}>
        <MdDone className={style.tickIcon} />
      </div>
      <div className={`description ${style.description}`}>
        <h1>Congratulations, {displayName}!</h1>
        <p>You have completed onboarding, you can start using Eden!</p>
      </div>
      <button className={style.launchBtn}>Launch Eden</button>
    </React.Fragment>
  );
};
