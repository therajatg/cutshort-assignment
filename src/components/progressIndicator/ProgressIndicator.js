import { RiLeafFill } from "react-icons/ri";
import { useLocation, Outlet } from "react-router-dom";
import style from "./progressIndicator.module.css";
import { useState } from "react";

export const ProgressIndicator = () => {
  const stepNumbers = [1, 2, 3, 4];
  const { pathname } = useLocation();
  const [displayName, setDisplayName] = useState("");
  const progress = { undefined: 1, 2: 3, 3: 5, 4: 6 };
  return (
    <div className={style.window}>
      <div className={style.main}>
        <h2>
          <RiLeafFill /> Eden
        </h2>
        <div className={style.userProgress}>
          <div className={style.allSteps}>
            {stepNumbers.map((step) => (
              <div
                className={
                  Number(pathname.split("")[5]) >= step || step === 1
                    ? style.activeStep
                    : style.step
                }
                key={step}
              >
                {step}
              </div>
            ))}
          </div>
          <progress
            max="6"
            value={progress[pathname.split("")[5]]}
            className={style.progressBar}
          ></progress>
        </div>

        <Outlet context={[displayName, setDisplayName]} />
      </div>
    </div>
  );
};
