import style from "./stepFour.module.css";
import { useOutletContext } from "react-router-dom";
import { TiTick } from "react-icons/ti";

export const StepFour = () => {
  const [displayName] = useOutletContext();
  return (
    <>
      <div className={style.tick}>
        <TiTick />
      </div>
      <div className="description">
        <h1>Congratulations, {displayName}</h1>
        <p>You have completed onboarding, you can start using Eden!</p>
      </div>
      <button>Launch Eden</button>
    </>
  );
};
