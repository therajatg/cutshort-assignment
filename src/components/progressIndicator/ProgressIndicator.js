import { RiLeafFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import style from "./progressIndicator.module.css";

const stepNumbers = [
  { step: 1, path: "/" },
  { step: 2, path: "/step2" },
  { step: 3, path: "/step3" },
  { step: 4, path: "/step4" },
];
export const ProgressIndicator = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.window}>
      <div className={style.main}>
        <h2>
          <RiLeafFill /> Eden
        </h2>
        <div className={style.allSteps}>
          {stepNumbers.map(({ step, path }) => (
            <div className={pathname === path ? style.step : ""} key={step}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
