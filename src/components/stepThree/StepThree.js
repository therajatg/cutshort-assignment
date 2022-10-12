import style from "./stepThree.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

export const StepThree = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="description">
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>

      <main className={style.main}>
        <div
          className={
            active ? `${style.usageType} ${style.active}` : style.usageType
          }
          onClick={() => setActive(true)}
        >
          <BsFillPersonFill
            className={
              active ? `${style.icon} ${style.activeIcon}` : style.icon
            }
          />
          <br />
          <strong>For myself</strong>
          <br />
          <span className={style.typeDescription}>
            Write better. Think more clearly. Stay organized.
          </span>
        </div>
        <div
          className={
            active ? style.usageType : `${style.usageType} ${style.active}`
          }
          onClick={() => setActive(false)}
        >
          <IoIosPeople
            className={
              active ? style.icon : `${style.icon} ${style.activeIcon}`
            }
          />
          <br />
          <strong>With my team</strong>
          <br />
          <span className={style.typeDescription}>
            Wikis, docs, tasks & projects, all in one place.
          </span>
        </div>
      </main>
      <button onClick={() => navigate("/step4")} className={style.createBtn}>
        Create Workspace
      </button>
    </>
  );
};
